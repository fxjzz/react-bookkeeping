import React from "react";
import {useParams} from "react-router-dom";
import useTags from "../useTags";
import Layout from "../components/Layout";

type Params = {
    id: string
}
const Tag: React.FC = (props) => {
    const {findTag} = useTags();
    let {id} = useParams<Params>();   //params 得到的id 是路由的:id 这是一个string
    const tag = findTag(parseInt(id));
    return (
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    );
};
export default Tag;
