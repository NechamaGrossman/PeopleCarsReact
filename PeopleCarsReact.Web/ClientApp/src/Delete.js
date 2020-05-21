import React from 'react';
import axios from 'axios';
import { produce } from 'immer';

class Delete extends React.Component {
    state = {
        id:  this.props.match.params.id
    }
    yesOnClick = async () => {
        await axios.post(`/api/people/DeleteCars`, {id:this.state.id});
        this.props.history.push('/'); 
    }
    noOnClick = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div className="well" style={{ marginTop: 60 }}>
                <h1>Are you sure you would like to delete all the cars?????</h1>
                <br/>
                <button onClick={this.yesOnClick} className="btn btn-success" >Yes</button>
                <button onClick={this.noOnClick} className="btn btn-danger">No</button>
            </div>
        )
    }
}
export default Delete;