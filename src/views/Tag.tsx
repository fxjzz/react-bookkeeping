import React from "react";
import {useParams} from "react-router-dom";
import useTags from "../useTags";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";
import styled from "styled-components";
import {Input} from "../components/Input";
import Center from "../components/Center";
import Space from "../components/Space";

type Params = {
    id: string
}
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
    const {findTag, updateTag, deleteTag} = useTags();
    let {id: idString} = useParams<Params>();   //params 得到的id 是路由的:id 这是一个string
    const tag = findTag(parseInt(idString));
    const tagContent = (tag:{id:number,name:string}) => (
            <div>
                <InputWrapper>
                    <Input label="标签名" type="text" placeholder="输入"
                           value={tag.name}
                           onChange={(e) => {
                               updateTag(tag.id,  e.target.value);
                           }}/>
                </InputWrapper>
                <Center>
                    <Space/>
                    <Space/>
                    <Space/>
                    <Button onClick={() => deleteTag(tag.id)}>删除标签</Button>
                </Center>
            </div>
    )
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            {tag ? tagContent(tag) : <Center>tag 已删除</Center>}
        </Layout>
    );
};
export default Tag;
