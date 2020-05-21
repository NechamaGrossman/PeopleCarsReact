import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        }
    };
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.person[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }
    onAddClick = async () => {
       const response = await axios.post('/api/people/AddPerson', this.state.person);
        this.props.history.push('/'); ;
    }
    render() {

        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <div className="col-md-12">
                        <input type="text" placeholder="First Name" name="firstName" onChange={this.onTextChange}  />
                        <input type="text" placeholder="Last Name" name="lastName" onChange={this.onTextChange} />
                        <input type="text" placeholder="Age" name="age" onChange={this.onTextChange}  />
                    </div>
                </div>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.onAddClick}>Add Person</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddPerson;