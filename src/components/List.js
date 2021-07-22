import { RiTaskFill } from "react-icons/ri";
import { FaTimesCircle } from "react-icons/fa";


const List = ({tasks, deleteTask, doneTask}) => {
    return (
        <>
        {tasks.length <= 0 ? <p className='empty'>You don't have any task</p> :
        tasks.map(task => {
            const {id, title, isCompleted} = task
            return (
                <div className='task' key={id}>
                    <p className={isCompleted ? 'completed' : 'task__title'}>{title}</p>
                    <button className='task__btn-completed' onClick={() => doneTask(id)}><RiTaskFill/></button>
                    <button className='task__btn-remove' onClick={() => deleteTask(id)}><FaTimesCircle/></button>
                </div>
            )
        })
    }
        </>
    );
}
 
export default List;