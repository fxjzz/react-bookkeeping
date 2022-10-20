import {NavLink} from "react-router-dom";
import Icon from "./Icon";
import React from "react";
type Props={
    value:'-'|'+'
}
const AddList=(props:Props)=>{
    if(props.value==='-'){
        return (
            <li>
                <div><NavLink to="/money/tags"><Icon name="add"/></NavLink></div>
                <span>添加</span>
            </li>
        )
    }else{
        return (<></>)
    }

}
export default AddList