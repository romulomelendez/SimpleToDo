import { Schedule } from '../../components/Schedule'
import { TaskForm } from '../../components/TaskForm'

import { Background, ToDoContainer } from './styles'

export const Home: React.FC = () => (

    <Background>
        <ToDoContainer>
            <Schedule />
            <TaskForm /> 
        </ToDoContainer> 
    </Background>

)