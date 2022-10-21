import styled from "styled-components";

export const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 16px;
  background: rgb(255, 218, 71);
  font-size: 24px;
  > div > .icon {
    height: 20px;
    width: 20px;
  }
`;