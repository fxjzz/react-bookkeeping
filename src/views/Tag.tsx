import React from "react";
import {useParams, useHistory} from "react-router-dom";
import useTags from "../hooks/useTags";
import Icon from "../components/Icon";
import styled from "styled-components";
import {Input} from "../components/Input";
import {Topbar} from "../components/Topbar";
import {useRecords} from "../hooks/useRecords";
import dayjs from "dayjs";

type Params = {
    id: string
}
const TopBar = styled(Topbar)`
  height: 100px;
  > div {
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 50%;
    font-size: 16px;
    display: flex;
    flex-direction: column;

    .icon {
      width: 48px;
      height: 48px;
    }

    text-align: center;
  }
`;
const TagList = styled.ul`
  height: 260px;
  
  > li {
    border-bottom: 1px solid #dddddd;
    height: 65px;
    margin-left: 16px;
    padding: 12px 16px;
    >label{
      display: flex;
      align-items: center;
      padding-top: 10px;
      >div{
        font-size: 20px;
        padding-left: 16px;
      }
    }
    span{
      display: block;
      color:#d7b599;
    }
  }
`;
const Bottom = styled.ul`
  display: flex;
  padding: 16px;
  >li{
    text-align: center;
    width: 150px;
    padding: 20px;
    border: 1px solid #dddddd;
  }
`
const Tag: React.FC = () => {
    const {findRecord,updateRecordAmount,updateRecordNote,deleteRecord} =useRecords()
    const {findTag} = useTags();
    let {id: idString} = useParams<Params>();   //params 得到的id 是路由的:id 这是一个string
    const tag = findTag(parseInt(idString));

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    };
    const record=findRecord(tag.id)
    const day= dayjs(record.createdAt).format('YYYY年MM月DD日')
    const Delete=(id:number)=>{
        deleteRecord(id)
        goBack()
    }
    return (
        <>
            <TopBar>
                <Icon name="left" onClick={() => goBack()}/>
                <div>
                    <div><Icon name={tag.name}/></div>
                    {tag.name}
                </div>
                <Icon/>
            </TopBar>
            <TagList>
                <li>
                    <label>
                        <span>类型</span><div>{tag.name}</div>
                    </label>
                </li>
                <li>
                    <label><Input label="金额" type="text"
                                                 value={record.amount}
                                                 onChange={(e) => {
                                                     updateRecordAmount(tag.id, e.target.value);
                                                 }}/></label>
                </li>
                <li>
                    <label><span>日期</span><div>{day}</div></label>
                </li>
                <li>
                    <label><Input label="备注" type="text"
                                                 value={record.note}
                                                 onChange={(e) => {
                                                     updateRecordNote(tag.id, e.target.value);
                                                 }}/></label>
                </li>
            </TagList>
                <Bottom>
                    <li onClick={()=>goBack()}>编辑完成</li>
                    <li onClick={()=>Delete(tag.id)}>删除</li>
                </Bottom>
        </>
    );
};
export default Tag;
