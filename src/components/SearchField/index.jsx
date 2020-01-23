import React from 'react';
import axios from 'axios';

export default class extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            postcode: '',
            data: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.getInformation = this.getInformation.bind(this);
    }

    getInformation(){
        const { postcode } = this.state;

        axios.get('https://api.postcodes.io/postcodes/' + postcode).then(res => {
            this.setState({
                data: res.data.result
            });
        }).catch(err => {

        })
    }
    

    handleChange(event){
        this.setState({
            postcode: event.target.value
        });
    }

    render(){
        return(
            <div>
                <input type='text' value={this.state.postcode} onChange={this.handleChange}/>
                <button onClick={() => this.getInformation( )}>Search</button>
                {this.state.data ? <React.Fragment><h1>{this.state.data.country}</h1><h2>{this.state.data.parliamentary_constituency}</h2></React.Fragment> : 'sorry, nothing here'}
            </div>
        )
    }

}

// type in a postcode

// retrieve information

// display information