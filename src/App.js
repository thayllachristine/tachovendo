import React from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/home'
import SunnyDay from './pages/sunnyday/sunnyday'
import RainyDay from './pages/rainyday/rainyday'

const App = () => (
    <React.Fragment>
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/sunnyday' component={SunnyDay} />
            <Route path='/rainyday' component={RainyDay} />
        </Switch>
    </React.Fragment>
)

export default withRouter(App)