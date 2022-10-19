import Layout from "../components/Layout";
import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import Icon from '../components/Icon';
import {useHistory} from "react-router-dom";
import Button from "../components/Button";
import useTags from "../hooks/useTags";
import TagsWrapper from "../components/TagsWrapper";


type TagItem = {
    name: string
}

const Topbar = styled.header`
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
const Current = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-size: 20px;
`;
const KindName = styled.div`
  padding: 8px;
  text-align: center;
`;

const defaultFoodTags = [
    {name: '午餐'},
    {name: '外卖'},
    {name: '买菜'},
    {name: '零食'},
    {name: '小吃'},
    {name: '酒水'}
] as TagItem[];

function Tags() {
    const {addTag}=useTags()
    const [selectedTag,setSelectedTag] =useState('')
    const [foodTags, setFoodTags] = useState<TagItem[]>([]);
    useEffect(() => {
        setFoodTags(defaultFoodTags);
    }, []);
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const getClass=(name:string)=> selectedTag ===name ? 'selected' : ''
    const onToggleTag=(name:string)=>{
        setSelectedTag(name)
    }
    const onOK=(selectedTag:string)=>{
        addTag(selectedTag)
    }
    return (
        <Layout>
            <Topbar>
                <div>
                    <Icon name="left" onClick={() => goBack()}/>
                    添加标签
                </div>
                <Button onClick={()=>onOK(selectedTag)}>完成</Button>
            </Topbar>
            <Current>
                <div>选中标签:<Icon name=""/></div>
                <span>tagName</span>
            </Current>
            <hr/>
            <KindName>餐饮</KindName>
            <TagsWrapper>
                <ol>
                    {foodTags.map(t =>
                        <li key={t.name} onClick={()=>onToggleTag(t.name)} >
                            <div className={getClass(t.name)}><Icon name={t.name}/></div>
                            <span>{t.name}</span>
                        </li>)}
                </ol>
            </TagsWrapper>
        </Layout>
    );
}

export default Tags;