import styled from "styled-components";
import React from "react";
import useTags from "hooks/useTags";
import {NavLink} from "react-router-dom";
import Icon from "../../components/Icon";

const Wrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 17px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100px;
  overflow: scroll;
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
type Props = {
    value : number,
    onChange:(selected:number)=> void;
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags}=useTags()
    const selectedTagId = props.value;
    const onToggleTag = (tagId: number) => {
         if(tagId===selectedTagId){
             props.onChange(tagId)
         }else{
             props.onChange(tagId)
         }
    };
    const getClass=(tagId:number)=> selectedTagId ===tagId ? 'selected' : ''
    return (
        <Wrapper>
            <ol>
                {tags.map(tag=><li key={tag.id} onClick={()=>onToggleTag(tag.id)}>
                    <div className={getClass(tag.id)}><Icon name={tag.name}/></div>
                    <span>{tag.name}</span>
                </li>)}
                <li>
                    <div><NavLink to="/tags"><Icon name="add"/></NavLink></div>
                    <span>添加</span>
                </li>
            </ol>
        </Wrapper>
    );
};

export default TagsSection;