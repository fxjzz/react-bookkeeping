import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'index.scss';
import Nav from "./components/Nav";
import Layout from "./components/Layout";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/tags">
                    <Tags/>
                </Route>
                <Route path="/money">
                    <Money/>
                </Route>
                <Route path="/statistics">
                    <Statistics/>
                </Route>
                <Redirect exact from="/" to="/money"/>
                <Route path="*">
                    <NoMatch/>
                </Route>
            </Switch>
        </Router>
    );
}

function Tags() {
    return (
        <Layout>tags</Layout>
    );
}

function Money() {
    return (
        <Layout>money</Layout>
    );
}

function Statistics() {
    return (
        <Layout>statistics</Layout>
    );
}

function NoMatch() {
    return <div>404</div>;
}

export default App;
