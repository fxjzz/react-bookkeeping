import {useEffect, useState} from "react";
import createId from "../lib/createId";
import {useUpdate} from "./useUpdate";


const useTags = () => {
    const [tags, setTags] = useState<{ id: number, name: string }[]>([]);
    const [incomeTags,setIncomeTags]=useState<{ id: number, name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('-tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                {id: 1, name: '餐饮'},
                {id: 2, name: '购物'},
                {id: 3, name: '居住'},
                {id: 4, name: '交通'},
                {id: 5, name: '药品'},
                {id: 6, name: '娱乐'}
            ];
        }
        setTags(localTags);
    }, []); // 组件挂载时执行
    useEffect(()=>{
        // let localTags = JSON.parse(window.localStorage.getItem('+tags') || '[]');
        // if (localTags.length === 0) {
            const  localTags = [
                {id: 100, name: '工资'},
                {id: 101, name: '礼金'},
                {id: 102, name: '彩礼'}
            ];
        // }
        setIncomeTags(localTags);
    },[])
    useUpdate(() => {
        window.localStorage.setItem('+tags', JSON.stringify(incomeTags));
    }, incomeTags);
    useUpdate(() => {
        window.localStorage.setItem('-tags', JSON.stringify(tags));
    }, tags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const updateTag = (id: number, name: string) => {
        setTags(tags.map(tag => tag.id === id ? {id, name} : tag));
    };
    const addTag = (name:string) => {
        setTags([...tags, {id: createId(), name: name}]);
        return true
    };
    const getName = (id: number,category:'-'|'+') => {
        if(category==='-'){
            const tag = tags.filter(t => t.id === id)[0];
            return tag ? tag.name : '';
        }else{
            const tag = incomeTags.filter(t=>t.id===id)[0]
            return tag ? tag.name : '';
        }
    };
    return {incomeTags,tags, getName, setTags, findTag, updateTag,  addTag};
};
export default useTags;
