import styled from "styled-components";

const TagsWrapper = styled.section`
  background: #FFFFFF;
  padding: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  > ol {
    .icon {
      width: 48px;
      height: 48px;
    }
    width: 304px;
    display: flex;
    flex-wrap: wrap;
    > li {
      margin-top: 10px;
      width: 76px;
      align-items: center;
      display: flex;
      flex-direction: column;
      > span {
        display: inline-block;
        text-align: center;
      }
      > div {
        border-radius: 50%;
        width: 48px;
        height: 48px;
        background: rgb(245, 245, 245);
        display: flex;
        flex-direction: column;
        font-size: 14px;
        align-items: center;
        &.selected {
          background: orange;
        }
      }
    }
  }
`;
export default TagsWrapper