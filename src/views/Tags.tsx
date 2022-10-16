import Layout from "../components/Layout";
import React from "react";
import useTags from "../hooks/useTags";
import styled from 'styled-components';
import Icon from '../components/Icon';
import {Link, useHistory} from "react-router-dom";
import Button from "../components/Button";
import Center from "../components/Center";
import Space from "../components/Space";
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: rgb(255, 218, 71);
  font-size: 24px;
`;
const TagList = styled.ol`
  font-size: 16px;
  background: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;
    a{
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

function Tags() {
    const {tags,addTag} = useTags();
    const history = useHistory()
    const goBack = ()=>{
        history.goBack()
    }
    return (
        <Layout>
            <Topbar>
                <Icon name="left" onClick={()=>goBack()}/>
                <span>添加标签</span>
                <Icon/>
            </Topbar>
            <TagList>
                {tags.map(tag =>
                    <li key={tag.id}>
                        <Link to={'/tags/'+tag.id}>
                            <span className="oneLine">{tag.name}</span>
                            <Icon name="right"/>
                        </Link>
                    </li>
                )}
            </TagList>
            <Center>
                <Space/>
                <Space/>
                <Space/>
                <Button onClick={addTag}>新增标签</Button>
            </Center>
        </Layout>
    );
}

export default Tags;