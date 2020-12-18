import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './Components/Dahboard/Dashboard'
import Form from './Components/Form/Form'

export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/add' component={Form}/>
        <Route exact path='/edit' component={Form}/>       
    </Switch>
)