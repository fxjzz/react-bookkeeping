import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Item = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

export const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;
export const DivImg = styled.div`
  height: 30px;
  background: #ffda47;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  height: 30px;
`;
export const TotalInfo = styled.div`
  padding-top:8px;
  height: 59px;
  background: #ffda47;
  display: grid;
  grid-template-columns: 100px 1fr;
`;
export const Calendar = styled.div`
  position: relative;
  >div{
    text-align: center;
    font-size: 16px;
  }
  >span{
    display: block;
    text-align: center;
    font-size: 20px;
  }
  ::after {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    content: '';
    height: 24px;
    width: 1px;
    background: #333;
  }
`;
export const Amount = styled.div`
  padding-left: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
