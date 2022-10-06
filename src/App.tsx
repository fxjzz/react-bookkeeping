import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import styled from "styled-components";
import 'index.scss'
import Nav from "./components/Nav";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


function App() {
    return (
        <Router>
            <Wrapper>
                <Main>
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
                </Main>
                <Nav/>
            </Wrapper>
        </Router>
    );
}

function Tags() {
    return <div>tags</div>;
}

function Money() {
    return <div>money</div>;
}

function Statistics() {
    return <div>statistics</div>;
}

function NoMatch() {
    return <div>404</div>;
}

export default App;
