import { useEffect, useState } from "react";
export function JSPDemo(){/*return <><GetUser id='1'/>
<GetUser id='2'/>
<GetUser id='3'/></>*/
const [value,setValue]=useState(1);return<><input type='number' value={value} onInput={event=>setValue(+event.currentTarget.value)}/></>
}
function GetUser({id})
{
    const [user,setUser]=useState(null),[error,setError]=useState(null);
    useEffect(()=>async function start() {
        try{const res=await fetch('https://jsonplaceholder.typicode.com/users/'+id+'?'+Math.random());if(!res.ok) throw new Error(res.status+'/'+res.statusText);const data=await res.json(); setUser(data)} catch(err){setError(err)}start();
    },[id])
    if(error)
//   
        return<ErrorInfo error={error}/>
    
    if(user)
    
        return<User user={user}/>
    return <Spinner/>

}
function User({user})
{
    return <div>{user.name}</div>
}
function Spinner(){
    return <div><progress></progress><br/></div>
}
function ErrorInfo({error}){
    return <div style={{color:'red'}}>Error:{error.ToString()}</div>
}