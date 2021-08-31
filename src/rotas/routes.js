import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import User from '../components/user';
import Form from '../components/form';
import Aula1 from '../components/aula1';
import Aula2 from '../components/aula2';
import Aula3 from '../components/aula3';
import Aula4 from '../components/aula4';


export default function Routes(){
    return(
    <Router>
        <Switch>
            <Route path="/" exact component={Form}/>
            <Route path="/user" exact component={(User)}/>
            <Route path="/aula1" exact component={Aula1}/>
            <Route path="/aula2" exact component={Aula2}/>      
            <Route path="/aula3" exact component={Aula3}/>
            <Route path="/aula4" exact component={Aula4}/>
        </Switch>
    </Router>
    );
}