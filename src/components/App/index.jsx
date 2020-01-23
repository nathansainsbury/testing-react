import React from 'react';
import Card from './../Card';
import Search from './../SearchField';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // data
            people: [
                {
                    name: 'Harper',
                    age: 27,
                    gender: 'female',
                    img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                },
                {
                    name: 'Nathan',
                    age: 23,
                    gender: 'male',
                },
                {   
                    name: 'Josh',
                    age: '30',
                    gender: 'male',
                    img: 'https://image.shutterstock.com/image-photo/portrait-happy-mature-man-wearing-260nw-732336316.jpg'
                },
                {
                    name: 'Yiju',
                    age: '34',
                    gender: 'female',
                    img: 'https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
                }
            ]
        }
    }

    render(){
        return(
            <div className='container'>
                {/* <Search /> */}
                <div className='row'>
                    {/* loop through the people array (this.state.people) and create a Card component with the relavant properties */}
                    {this.state.people.map(person => <Card name={person.name} age={person.age} gender={person.gender} url={person.img}/>)}
                </div>
            </div>
        );
    }
}

// { } === curly braces
// [] === square brackets / braces

// | === pipe
// ; === semi colon
// : === colon

// * === asterisk(s)
// & === and/ampasan
// ~ === tilda

export default App;