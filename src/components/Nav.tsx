import styled from "styled-components";
import React from "react";
import {NavLink} from "react-router-dom";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background: white;
  > ul {
    display: flex;
    line-height: 24px;
    > li {
      width: 33.3333%;
      text-align: center;
      >a{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          background: #faff72;
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="statistics"/>
                        明细
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="chart"/>
                        图表
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;