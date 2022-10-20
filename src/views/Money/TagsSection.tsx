import React from "react";
import useTags from "hooks/useTags";
import Icon from "../../components/Icon";
import TagsWrapper from "../../components/TagsWrapper";
import styled from "styled-components";
import AddList from "../../components/AddList";

const Wrapper = styled(TagsWrapper)`
  height: 100px;
  overflow: scroll;
`;
type Props = {
    value: number,
    onChange: (selected: number) => void;
    x: '-' | '+'
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags, incomeTags} = useTags();
    const selectedTagId = props.value;
    const category = props.x;
    let outputTags;
    outputTags = category === '-' ? tags : incomeTags;
    const onToggleTag = (tagId: number) => {
        if (tagId === selectedTagId) {
            props.onChange(tagId);
        } else {
            props.onChange(tagId);
        }
    };
    const getClass = (tagId: number) => selectedTagId === tagId ? 'selected' : '';
    return (
        <Wrapper>
            <ol>
                {outputTags.map(tag => <li key={tag.id} onClick={() => onToggleTag(tag.id)}>
                    <div className={getClass(tag.id)}><Icon name={tag.name}/></div>
                    <span>{tag.name}</span>
                </li>)}
                <AddList value={props.x}/>
            </ol>
        </Wrapper>
    );
};

export default TagsSection;