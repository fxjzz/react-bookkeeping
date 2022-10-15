import {useEffect, useState} from "react";
import createId from "../lib/createId";
import {useUpdate} from "./useUpdate";

const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'},
            ];
        }
        setTags(localTags);
    }, []); // 组件挂载时执行
    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const updateTag = (id: number,  name: string ) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    const addTag = () => {
        const tagName = window.prompt('请输入标签内容');
        if (tagName !== null && tagName !== '') {
            setTags([...tags, {id:createId(),name:tagName}]);
        }
    };
    const getName = (id:number)=>{
        const tag = tags.filter(t=>t.id===id)[0]
        return tag?tag.name:''
    }
    return {tags,getName, setTags, findTag, updateTag, deleteTag,addTag};
};
export default useTags;
