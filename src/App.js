import React, {useState, useEffect} from 'react'
import Form from './components/Form'
import List from './components/List'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState([])
  const [info, setInfo] = useState({condition: false, type: '', msg: ''})

  // The function responsible for add task to the array
  const submitFunction = (e) => {
    e.preventDefault()
    if(inputValue !== '') {
    const newTask = {id: new Date().getTime().toString(), title: inputValue, isCompleted: false}
    setTasks([...tasks, newTask])
    setInfo({condition: true, type:'success', msg: 'The task has been added'})
    setInputValue('')
  }
  else {
    alert('Too short input value')
  }
  }

  // Check and add typing in input
  const inputValueHandler = (e) => {
    const text = e.target.value
    setInputValue(text)
  }

  // Change task status on completed
  const doneTask = (id) => {
    setTasks(tasks.map(task => {
      if(task.id === id) {
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    }))
  }

  // Delete task from the array
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
    setInfo({condition: true, type: 'remove', msg: 'The task has been removed'})
  }

  useEffect(() => {
    let time = setTimeout(() => setInfo(true), 4000)
    return () => clearTimeout(time)
  }, [info])
  
  return (
    <div className='app'>
        <h1 className='app__title'>Todo List</h1>
        <Form 
        inputValueHandler={inputValueHandler} 
        submitFunction={submitFunction}
        inputValue={inputValue}/>
        {info.condition && info.type === 'success' ? 
        <p className='info-success'>{info.msg}</p> : null}
        {info.condition && info.type === 'remove' ? 
        <p className='info-remove'>{info.msg}</p> : null}
        <List tasks={tasks} deleteTask={deleteTask} doneTask={doneTask}/>
    </div>
  );
}

export default App;
