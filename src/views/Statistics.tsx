import Layout from "../components/Layout";
import React from "react";
import {RecordItem, useRecords} from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import dayjs from "dayjs";
import logo from 'bookkeeping.jpg';
import {Item, Header, DivImg, Img, TotalInfo, Calendar, Amount,} from './Statistics/StatisticsCSS';


function Statistics() {
    const {records} = useRecords();
    const {getName} = useTags();
    const hash: { [key: string]: RecordItem[] } = {};
    const utc = require('dayjs/plugin/utc');
    let income:number=0
    let expend:number=0
    records.forEach(r=>{r.category==='-'? income+=r.amount: expend+=r.amount})
    dayjs.extend(utc);
    const yesterday = dayjs().subtract(1, 'day').format('YYYY年MM月DD日')
    const today =dayjs().format('YYYY年MM月DD日')
    records.forEach(r => {
        const key = dayjs(r.createdAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const arr = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return -1;
        if (a[0] < b[0]) return 1;
        return 0;
    });
    return (
        <Layout>
            <DivImg>
                <Img src={logo} alt={logo}></Img>
            </DivImg>
            <TotalInfo>
                <Calendar>
                    <div>{dayjs().format('YYYY年')}</div>
                    <span>{dayjs().format('MM月')}</span>
                </Calendar>
                <Amount>
                    <div>
                        <div>支出</div>
                        <span>{income}</span>
                    </div>
                    <div>
                        <div>收入</div>
                        <span>{expend}</span>
                    </div>
                </Amount>
            </TotalInfo>
            {arr.map(([date, records]) =>
                <div key={date}>
                    <Header>
                        {date===today?'今天':(date===yesterday?'昨天':date)}
                    </Header>
                    <div>
                        {records.map(r => {
                            return <Item key={r.createdAt} to={"/tags/"+r.tagId}>
                                <div className="tags oneLine">
                                    {<span key={r.tagId}>{getName(r.tagId, r.category)}</span>}
                                </div>
                                {r.note && <div className="note">
                                    {r.note}
                                </div>}
                                <div className="amount">
                                    {r.category}￥{r.amount}
                                </div>
                            </Item>;
                        })}
                    </div>
                </div>
            )}
        </Layout>
    );
}

export default Statistics;