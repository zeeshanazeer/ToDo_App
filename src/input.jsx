import { useState } from "react";
import Input from "./App";

function App(){
    const [taskList, setTaskList] = useState([]);
   console.log(taskList)
    return(
        <>
        
        <Input taskList={taskList} setTaskList={setTaskList}/>
        </>
    )
}
export default App;