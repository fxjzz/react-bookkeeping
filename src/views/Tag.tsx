import React from "react";
import {useParams} from "react-router-dom";
import useTags from "../useTags";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Icon from "../components/Icon";

type Params = {
    id: string
}
const Tag: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();   //params 得到的id 是路由的:id 这是一个string
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <header>
                <Icon name="left"/>
                <span>编辑标签</span>
            </header>
            <div>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="请输入备注"/>
                </label>
            </div>
            <div>
                <Button>删除标签</Button>
            </div>
        </Layout>
    );
};
export default Tag;
