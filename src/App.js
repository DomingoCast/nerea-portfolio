import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Session from './components/Session/Session'
import Layout from './components/Layout/Layout'
//Layout/


function App() {
  return (
    <Layout>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/session/:id" component={Session}/>
            <Redirect from="/" to="/home"/>
        </Switch>
    </Layout>
  );
}

export default App;
