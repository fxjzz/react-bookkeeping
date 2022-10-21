import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

export type RecordItem = {
    tagId: number
    note: string
    category: '+' | '-'
    amount: number
    createdAt:string
}
type newRecordItem = Omit<RecordItem, 'createdAt'>

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records')||'[]'))
    },[])
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, records);
    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.amount <= 0) {
            alert('请输入金额');
            return false;
        }
        if (newRecord.tagId === undefined) {
            alert('请选择标签');
            return false;
        }
        const record = {...newRecord, createdAt: (new Date()).toISOString()};
        setRecords([...records,record])
        return true
    };
    const findRecord =(id:number)=>{
        return  records.filter(r=>r.tagId===id)[0]||'[]'
    }
    const updateRecordAmount=(id:number,am:string)=>{
        const a= parseInt(am)
        const r = records.filter(r=>r.tagId===id)[0]
        let {amount:number,...rest} =r
        let amount = a;
        setRecords(records.map(r=>r.tagId===id?{amount,...rest}:r))
    }
    const updateRecordNote=(id:number,note:string)=>{
        const r = records.filter(r=>r.tagId===id)[0]
        let {note:string,...rest} =r
        setRecords(records.map(r=>r.tagId===id?{note,...rest}:r))
    }
    const deleteRecord=(id:number)=>{
        setRecords(records.filter(r=>r.tagId!==id))
    }
    return {records, addRecord,findRecord,updateRecordAmount,updateRecordNote,deleteRecord};
};