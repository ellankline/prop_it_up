import React, { Component } from 'react';
class PersonCard extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    clicks:0,
                    show:true,
                };
        };
                
        IncrementItem = () => {
            this.setState({ clicks: this.state.clicks + 1 });
        };
        
        render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {age + this.state.clicks}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.IncrementItem}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    };
}


export default PersonCard;