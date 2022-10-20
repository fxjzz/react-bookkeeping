import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from 'styled-components';
import TagsSection from "./Money/TagsSection";
import NoteSection from "./Money/NoteSection";
import CategorySection from "./Money/CategorySection";
import NumberPadSection from "./Money/NumberPadSection";
import {useRecords} from "../hooks/useRecords";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: rgb(255, 218, 71);
`;
type Category = '-' | '+';
const defaultFormData = {
    tagId: 1,
    note: '',
    category: '-' as Category,
    amount: 0
};

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecords();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});/////////////
    };
    const submit = () => {
        if (addRecord(selected)) {
            alert('保存成功');
            setSelected(defaultFormData);
        }
    };
    return (
        <MyLayout>
            <CategoryWrapper>
                <CategorySection value={selected.category} onChange={category => {
                    onChange({category});
                }}/>
            </CategoryWrapper>
            <TagsSection value={selected.tagId} x={selected.category}
                         onChange={tagId => {
                             onChange({tagId});
                         }}/>
            <NoteSection value={selected.note}
                         onChange={note => {
                             onChange({note});
                         }}/>
            <NumberPadSection value={selected.amount}
                              onChange={amount => {
                                  onChange({amount});
                              }}
                              onOK={submit}/>
        </MyLayout>
    );
}

export default Money;