import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AddUsers from '../Users/AddUsers';
import ListUsers from '../Users/ListUsers';

function DataContainer(){
    return (
        <Switch>
            <Route path='/add' render={() => (<AddUsers/>)}/>
            <Route path='/list' render={() => (<ListUsers/>)}/>
            <Redirect to='/list' />
        </Switch>
    );
}
export default DataContainer;