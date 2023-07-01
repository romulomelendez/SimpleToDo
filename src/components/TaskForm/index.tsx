import { TaskContainer } from './styles'

export const TaskForm: React.FC = () => {

    const handleTask = () => console.log('handleTask')
    
    return (

        <TaskContainer>
            <input type="text" placeholder="Type your task" />
            <input type="text" placeholder="Author" />
            <button type="button" onClick={ handleTask }>CREATE TASK</button>
        </TaskContainer>

    )

}