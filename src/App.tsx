import './App.css'
import { useState } from 'react'
const tasks = [
  {
    id: 1,
    title: "Купить продукты на неделю",
    isDone: false,
    addedAt: "1 сентября",
    priority: 2,
  },
  {
    id: 2,
    title: "Полить цветы",
    isDone: true,
    addedAt: "2 сентября",
    priority: 0,
  },
  {
    id: 3,
    title: "Сходить на тренировку",
    isDone: false,
    addedAt: "3 сентября",
    priority: 1,
  },
  {
    id: 4,
    title: "Срочно отправить рабочий отчет",
    isDone: false,
    addedAt: "4 сентября",
    priority: 4,
  },
  {
    id: 5,
    title: "Заплатить за коммунальные услуги",
    isDone: false,
    addedAt: "3 сентября",
    priority: 3,
  },
]
function App() {

  const[selectedTaskId,setSelectedTaskId] = useState(null)

  return (
    <>
      <h1>Список  Задач</h1>
      <button onClick={()=>setSelectedTaskId(null)}>Снять выделение</button>

      {tasks===null?
        <span>Подгружаем ваши таcки</span>:
          tasks.length===0?
            <span>На сегодня тасков нет</span>:        
              <ul className="tasks-lists">
                {tasks.map(task =>(
                  <li onClick={()=> setSelectedTaskId(task.id)} key={task.id} className ={task.priority===0?'priority-0':task.priority===1?'priority-1':task.priority===2?'priority-2':task.priority===3?'priority-3':'priority-4'} style={{border:selectedTaskId===task.id?'1px solid green':'none'}}>
                    <h3>Заголовок: <span style={{textDecoration:task.isDone?'line-through':'none', fontWeight:'lighter'}} >{task.title}</span></h3>
                    <label htmlFor="isDone">
                      Статус
                      <input type="checkbox" name="check" id="isDone" checked={task.isDone}/>
                    </label>
                    <p>
                      Дата создания: {task.addedAt}
                    </p>
                  </li>
                ))}
              </ul>
              }

    </>
  )
}

export default App
