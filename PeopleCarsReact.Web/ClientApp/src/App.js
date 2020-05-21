import React from 'react';
import { Route } from 'react-router';
import PeopleTable from './PeopleTable';
import AddPerson from './AddPerson';
import Delete from './Delete'
import AddCar from './AddCar'
const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleTable} />
            <Route exact path='/AddPerson' component={AddPerson} />
            <Route exact path='/Delete/:id' component={Delete} />
            <Route exact path='/Addcar/:id' component={AddCar} />
        </div>
    );
}

export default App;