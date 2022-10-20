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
  padding: 10px;
  font-size: 20px;

  > div {
    line-height: 35px;
    height: 35px;

    > .icon {
      vertical-align: middle;
      width: 35px;
      height: 35px;
    }

    > div {
      display: inline-block;
      line-height: 35px;
    }
  }
`;
const defaultTags = [
    {name: '午餐'},
    {name: '外卖'},
    {name: '买菜'},
    {name: '零食'},
    {name: '小吃'},
    {name: '酒水'},
    {name: '日用品'},
    {name: '衣服'},
    {name: '数码'},
    {name: '电器'},
    {name: '家具'},
    {name: '化妆品'},
    {name: '电影'},
    {name: '手机'},
    {name: '水电费'},
    {name: '运动'},
    {name: 'Q币'},
    {name: '游戏'},
    {name: '其他'}
] as TagItem[];

function Tags() {
    const {addTag} = useTags();
    const [selectedTag, setSelectedTag] = useState('');
    const [defaultTag, setDefaultTag] = useState<TagItem[]>([]);
    useEffect(() => {
        setDefaultTag(defaultTags);
    }, []);
    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const getClass = (name: string) => selectedTag === name ? 'selected' : '';
    const onToggleTag = (name: string) => {
        setSelectedTag(name);
    };




    const onOK = (selectedTag: string) => {
        const tags: TagItem[] = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if(tags.filter(t => t.name === selectedTag)[0]){
            alert('已存在标签')
        }else {
            addTag(selectedTag);
            alert('添加成功');
            goBack();
        }
    };
    return (
        <Layout>
            <Topbar>
                <div>
                    <Icon name="left" onClick={() => goBack()}/>
                    添加标签
                </div>
                <Button onClick={() => onOK(selectedTag)}>
                    完成
                </Button>
            </Topbar>
            <Current>
                <div>选中标签:<Icon name={selectedTag}/></div>
                <div>{selectedTag}</div>
            </Current>
            <hr/>
            <TagsWrapper>
                <ol>
                    {defaultTag.map(t =>
                        <li key={t.name} onClick={() => onToggleTag(t.name)}>
                            <div className={getClass(t.name)}><Icon name={t.name}/></div>
                            <span>{t.name}</span>
                        </li>)}
                </ol>
            </TagsWrapper>
        </Layout>
    );
}

export default Tags;