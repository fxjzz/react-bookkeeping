import Layout from "../components/Layout";
import React from "react";
import useTags from "../useTags";

function Tags() {
    const {tags,setTags}= useTags()
    return (
        <Layout>
            <ul>
                {tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </Layout>
    );
}
export default Tags