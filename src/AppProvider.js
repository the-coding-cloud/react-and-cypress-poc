import React, { useState, useEffect } from 'react';
import { ApplicationProvider } from './utils'

const AppProvider = (props) => {
  const [toDoList, setToDoList] = useState([
    {
      title: 'Do your homework',
      checked: false,
      id: 0
    }
  ])

  const handleCurrentItem = (toDo) => {
    const index = toDoList.findIndex(el => el.id === toDo.id)
    setToDoList([
      ...toDoList.slice(0, index),
      toDo,
      ...toDoList.slice(index + 1, toDoList.length)
    ])
  }

  const handleRemoveToDo = (id) => {
    const index = toDoList.findIndex(el => el.id === id)
    setToDoList([
      ...toDoList.slice(0, index),
      ...toDoList.slice(index + 1)
    ])
  }

  return <ApplicationProvider value={{
    toDoList,
    handleCurrentItem,
    handleRemoveToDo
  }}>
    {props.children}
  </ApplicationProvider>
}

export default AppProvider