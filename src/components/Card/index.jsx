import React from 'react';


// when we pass props into the component, we can access them via this.props.{propname}
// <Card name='nathan' /> this.props.name // nathan
class Card extends React.Component{

    constructor(props){
        super(props);
    }

    // when the component "mounts" what is rendered is displayed on the screen
    render(){
        return(
            <div className='col-lg-6'>
                {this.props.url ? <img src={this.props.url} className='img-thumbnail'/> : <img src='https://unowp.com/wp-content/uploads/2017/08/white-screen-of-death.png' />}
                <h1 className='title'>Name: {this.props.name}</h1>
                <h2>Age: {this.props.age}</h2>
                <h3>Gender: {this.props.gender ? this.props.gender : 'N/A'}</h3>
                <hr />
            </div>
        )
    }

}

export default Card;