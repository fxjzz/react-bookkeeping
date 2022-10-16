import styled from "styled-components";
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/Input';
import Icon from "../../components/Icon";

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 4px 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  .icon{
    width: 16px;
    height: 16px;
  }
`;
type Props = {
    value:string,
    onChange:(value: string)=> void
}
const NoteSection: React.FC<Props> = (props) => {
        const note = props.value;
        const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
            props.onChange(e.target.value);
        };
        return (
            <Wrapper>
                <Icon name="note"/>
                <Input label="备注" type="text" value={note} onChange={onChange}
                placeholder="写点备注吧~~"/>
            </Wrapper>
        );
    };
export default NoteSection;