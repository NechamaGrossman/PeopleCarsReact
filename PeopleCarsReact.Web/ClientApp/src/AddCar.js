import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            PersonId: this.props.match.params.id,
            id:''
        },
        
    };
    onTextChange = e => {
        const nextState = produce(this.state, draftState => {
            draftState.car[e.target.name] = e.target.value;
        });
        this.setState(nextState);
    }
    onAddclick = async () => {
        await axios.post(`/api/people/AddCar`, this.state.car);
        this.props.history.push('/');
    }
    componentDidMount = async () => {
        const { data } = await axios.get(`api/People/GetPersonById?Id=${this.props.match.params.id }`);
        this.setState({ car: data });
    }
    render() {
        const { firstName, lastName} = this.state.car
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <div className="row">
                    <h4>Add a car for {firstName} {lastName}</h4>
                    <div className="col-md-12">
                        <input type="text" placeholder="Make" name="make" onChange={this.onTextChange} />
                        <input type="text" placeholder="Model" name="model" onChange={this.onTextChange} />
                        <input type="text" placeholder="Year" name="year" onChange={this.onTextChange} />
                    </div>
                </div>
                <div className="container" style={{ marginTop: 20 }}>
                    <div className="row">
                        <button className="btn btn-primary" onClick={this.onAddclick}>Add Car</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default AddCar;