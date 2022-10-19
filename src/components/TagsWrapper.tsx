import styled from "styled-components";

const TagsWrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 17px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 150px;

  > ol {
    .icon {
      width: 48px;
      height: 48px;
    }

    width: 304px;
    display: flex;
    flex-wrap: wrap;

    > li {
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