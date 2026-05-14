import './App.css'
import { useState,useEffect } from 'react'

function App() {
  const[selectedTaskId,setSelectedTaskId] = useState(null)
  const[selectedTask,setSelectedTask] = useState(null)
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

  return (
    
    <>
      <h1>Список  Задач</h1>
      <button onClick={()=>{
        setSelectedTaskId(null)
        setSelectedTask(null)}
        }>Снять выделение</button>
      <div className="container">
        <div className="tasks">
          {tasks===null?
            <span>Подгружаем ваши таcки</span>:
              tasks.length===0?
                <span>На сегодня тасков нет</span>:        
                    <ul className="tasks-lists">
                      {tasks.map(task =>(
                        <li onClick={()=>{
                          setSelectedTaskId(task.id)
                          fetch(`https://trelly.it-incubator.app/api/1.0/boards/${task.attributes.boardId}/tasks/${task.id}`,{
                            headers:{
                                'api-key':'01774c8c-0fec-4605-8f76-5d575b387023'
                            }
                          }).then(res=>res.json())
                          .then(json=>setSelectedTask(json))
                          console.log(selectedTask);
                        } 
                          } 
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
              <div className="task-info">
                <h2>Дополнительная информация о задаче</h2>
                {
                  selectedTask===null
                  ?<span>Вы не выбрали таск</span>
                  :<ul className="desc"> 
                    {/* <li>Название таска:{selectedTask.attributes.title}</li>
                    <li>Название доски:{selectedTask.attributes.boardTitle}</li>
                    <li>Описане:{selectedTask.attributes.description===null?'Описание отсутствует':selectedTask.attributes.description}</li> */}
                  </ul>
                }
                
              </div>
        </div>
    </>
  )
}

export default App
