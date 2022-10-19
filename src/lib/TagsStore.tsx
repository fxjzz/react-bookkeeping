import React, {useEffect, useState} from "react";

type TagItem = {
    id: number
    name: string
}

const defaultIncomeTags = [
    {id: 6, name: '工资'},
    {id: 7, name: '兼职'},
    {id: 8, name: '奖金'},
    {id: 9, name: '报销'},
    {id: 10, name: '礼金'}
] as TagItem[];

const TagsStore:React.FC = (props) => {
    const [tags, setTags] = useState<TagItem[]>();
    useEffect(() => {
        setTags(defaultIncomeTags);
    }, []);
    return (
        <div>

        </div>
    )
};
export default TagsStore;