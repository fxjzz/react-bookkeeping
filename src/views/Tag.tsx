import React from "react";
import {useParams} from "react-router-dom";
import useTags from "../useTags";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";
import styled from "styled-components";

type Params = {
    id: string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background:white;
`;
const Tag: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();   //params 得到的id 是路由的:id 这是一个string
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <Topbar>
                <Icon name="left"/>
                <span>编辑标签</span>
                <Icon/>
            </Topbar>
            <div>
                <label>
                    <span>标签名</span>
                    <input type="text" placeholder="请输入"/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    );
};
export default Tag;
