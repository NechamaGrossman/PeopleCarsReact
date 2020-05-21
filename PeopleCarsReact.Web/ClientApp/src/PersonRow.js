import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
function PersonRow(props){

    const { firstName, lastName, age, cars,id } = props.person;
        return (
            <tr >
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>{cars.length}</td>
                <td><Link to={`/AddCar/${id}`}><button className="btn btn-success">Add Car</button></Link></td>
                <td><Link to={`/Delete/${id}`}><button className="btn btn-danger">Delete Car</button></Link></td>
            </tr>
        )
    
}
export default PersonRow