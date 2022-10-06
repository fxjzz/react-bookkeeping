import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
import styled from "styled-components";
import './index.scss'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;
const Nav = styled.nav`
  border: 1px solid green;
  > ul {
    display: flex;
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
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
                <Nav>
                    <ul>
                        <li>
                            <Link to="tags">标签页</Link>
                        </li>
                        <li>
                            <Link to="money">记账页</Link>
                        </li>
                        <li>
                            <Link to="statistics">统计页</Link>
                        </li>
                    </ul>
                </Nav>
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
