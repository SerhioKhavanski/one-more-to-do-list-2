import { useState, useEffect } from "react"

export function TaskDetails() {

    const[selectedTask,setSelectedTask] = useState(null)
    const selectedTaskId = "4f310604-82b5-4afd-b9a4-ddf12dfac0a3"
    const boardId = "13923117-72de-4788-a7f0-4c42f162a5ab"

    useEffect(()=>{
    if(boardId===null&&selectedTaskId===null){
      return
    }
    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`,{
        headers:{
            'api-key':'01774c8c-0fec-4605-8f76-5d575b387023'
        }
      }).then(res=>res.json())
      .then(json=>{
        const {data}= json
        setSelectedTask(data)
      })
    },[selectedTaskId])

    return <div className="task-info">
                <h2>Дополнительная информация о задаче</h2>

                {!selectedTaskId&&!selectedTask&&<span>Вы не выбрали таск</span>}
                {selectedTaskId&&!selectedTask&&<span>подгружаем инфо</span>}
                {selectedTaskId&&selectedTask&&selectedTask.id!==selectedTaskId&&<span>подгружаем инфо</span>}
                {selectedTaskId&&selectedTask&&<ul className="desc"> 
                    <li>Название таска: {selectedTask.attributes.title}</li>
                    <li>Название доски: {selectedTask.attributes.boardTitle}</li>
                    <li>Описане: {selectedTask.attributes.description===null?'Описание отсутствует ':selectedTask.attributes.description}</li>
                  </ul>}

              </div>
}