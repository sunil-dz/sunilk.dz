import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../component/Header/Header";
import home from '../container/home';
import about from '../container/aboutus';
import contactus from '../container/contactus';
import ourteam from '../container/team';


const AppRouter=()=> {
    return (
        <Router>
            {/* <Button color="danger">Danger!</Button> */}
            <Header/>
            <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/about" component={about}/>
                <Route path="/contactus" component={contactus}/>
                <Route path="/ourteam" component={ourteam} />
            </Switch>
        </Router>
    )
}

export default AppRouter;
