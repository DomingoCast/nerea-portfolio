import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Contact from './components/Contact/Contact'
import Session from './components/Session/Session'
import Layout from './components/Layout/Layout'
import Title from './components/Title/Title'
import NotFound from './components/NotFound/NotFound'
//NotFound/


function App() {
                    //<Redirect from="/" to="/404"/>
  return (
    <>
        <Switch>
            <Route path="/title" component={Title} exact/>
            <Layout>
                    <Route path="/home" component={Home}/>
                    <Route path="/aboutme" component={AboutMe}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/session/:id" component={Session}/>
                    <Route path="404" component={NotFound}/>
            </Layout>
        </Switch>
      </>
  );
}

export default App;
