import {useState} from 'react'
import classes from './LikeButton.module.css'
export function DemoLikeButton(){
    return <fieldset><legend>LikeButton Demo</legend>
    <LikeButton/>
    <LikeButton start={999} bordered/>
    <LikeButton step="10" color="red"/>
    <LikeButton big/>
    </fieldset>
}
function LikeButton({start=0,step=1,color,big},bordered){
   const [like,setLike]=useState(start),
   [border,setBorder]=useState(bordered)
   //onClick={prev=>setLike(+step +prev)}
   //onClick={()=>setLike(like+ +step)} 
    return <button onContextMenu={()=>setBorder(prev=>!prev)} onClick={()=>setLike(prev=>+step +prev)} className={classes.like+(big?' '+classes.big:'')+(border?' '+classes.border:'')}style={{color}}>Like:{like}</button>
}