import styled from "styled-components"

export const Background = styled.div `

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: var(--background-color-primary);

`

export const ToDoContainer = styled.div `

    display: flex;
    flex-direction: column;
    row-gap: 12px;
    height: 450px;
    width: 350px;
    background-color: var(--white);
    border-radius: 0.5rem;
    box-shadow: 10px 7px 20px 1px var(--light-blue);

`