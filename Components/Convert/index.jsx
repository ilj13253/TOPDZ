import { useState } from "react";
const mile=4444
export function ConvertDemo(){
    [meteres,SetMeters]=useState(1500)
    return <><LengthInput value={metres/1000} dimension='km' changeValue={km=>SetMeters()}/></>
}