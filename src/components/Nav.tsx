import styled from "styled-components";
import React from "react";
import {Link, NavLink} from "react-router-dom";
import Icon from "./Icon";


const NavWrapper = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);

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
          background: pink;
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
                    <NavLink to="tags" activeClassName="selected">
                        <Icon name="tag"/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="money" activeClassName="selected">
                        <Icon name="money"/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};
export default Nav;