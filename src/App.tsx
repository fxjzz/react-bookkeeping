import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import 'index.scss';
import Tags from "./views/Tags";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import NoMatch from "./views/NoMatch";
import styled from 'styled-components';
import Tag from './views/Tag'
import Chart from "./views/Chart";

const AppWrapper = styled.div`
  color: #333;
`;

function App() {
    return (
        <AppWrapper>
            <Router>
                <Switch>
                    <Route path="/money/tags" exact>
                        <Tags/>
                    </Route>
                    <Route path="/tags/:id" exact>
                        <Tag/>
                    </Route>
                    <Route path="/money" exact>
                        <Money/>
                    </Route>
                    <Route path="/statistics" exact >
                        <Statistics/>
                    </Route>
                    <Route path="/chart" exact >
                        <Chart/>
                    </Route>
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*" exact >
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
);
}

export default App;
