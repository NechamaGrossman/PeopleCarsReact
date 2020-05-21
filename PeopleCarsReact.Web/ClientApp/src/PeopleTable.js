import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { produce } from 'immer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonRow from './PersonRow'
class PeopleTable extends React.Component {
    state = {
        peopleCarArray: [],
        Person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        }
    }
    componentDidMount = async () => {
        await this.refreshPeople();
    }
    refreshPeople = async () => {
        const response = await axios.get('/api/people/getall');
        const people = response.data;
        this.setState({ peopleCarArray: people });
    }
    render() {
        return (
            <div className="container" style={{ marginTop: 60 }}>
                <Link to='/AddPerson' className="btn btn-info"
                ><button>Add Person</button></Link>
                <table className="table table-hover table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Car Count</th>
                            <th>Add a Car</th>
                            <th>Delete Cars</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.peopleCarArray.map((person, i) => <PersonRow person={person} key={i}/>)}
                    </tbody>
                </table>
            </div >
        )
    }
}
export default PeopleTable;