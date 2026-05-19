import { useState, useEffect } from "react"

export function TasksList() {
    const[selectedTaskId,setSelectedTaskId] = useState(null)  
    const[tasks, setTasks]=useState(null)
    useEffect(()=>{
    fetch('https://trelly.it-incubator.app/api/1.0/boards/tasks',{
        headers:{
        'api-key':'01774c8c-0fec-4605-8f76-5d575b387023'
        }
    }).then(res=>res.json())
    .then(json=>{
        setTasks(json.data)
    })
    },[])

    return <div className="tasks">
          {tasks===null?
            <span>Подгружаем ваши таcки</span>:
              tasks.length===0?
                <span>На сегодня тасков нет</span>:        
                    <ul className="tasks-lists">
                      {tasks.map(task =>(
                        <li onClick={()=>
                          {
                            setSelectedTaskId(task.id)
                            // setBoardId(task.attributes.boardId)
                          }} 
                          key={task.id} 
                          className = {task.attributes.priority===0
                          ?'priority-0':task.attributes.priority===1
                          ?'priority-1':task.attributes.priority===2
                          ?'priority-2':task.attributes.priority===3
                          ?'priority-3':'priority-4'} 
                          style={{border:selectedTaskId===task.id
                          ?'1px solid green':'none'}}
                        >
                          <h3>Заголовок: <span style={{textDecoration:task.attributes.status===2?'line-through':'none', fontWeight:'lighter'}} >{task.attributes.title}</span></h3>
                          <label htmlFor="isDone">
                            Статус
                            <input type="checkbox" name="check" id="isDone" checked={task.attributes.status===2?true:false}/>
                          </label>
                          <p>
                            Дата создания: {new Date(task.attributes.addedAt).toLocaleDateString()}
                          </p>
                        </li>
                      ))}
                    </ul>
                  }
              </div>
}