import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Layout =(props:any)=>{
    return (
        <Wrapper>
            <Main className={props.className}>{props.children}</Main>
            <Nav/>
        </Wrapper>
    );
}
export default Layout