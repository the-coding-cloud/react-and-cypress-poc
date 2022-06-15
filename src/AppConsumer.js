import React, { useContext } from 'react';
import './App.css';
import { ApplicationContext } from './utils'

function AppConsumer(props) {
  const context = useContext(ApplicationContext);
  const { toDoList, handleCurrentItem, handleRemoveToDo } = context;
  console.log('AppConsumer', context);
  const handleChange = (e, id) => {
    const {checked} = e.target || e;
    const current = toDoList.find(el => el.id === id) || {};
    handleCurrentItem({
      ...current,
      checked
    })
  };

  return (
    <div className='container'>
      <h2>My TO DO list</h2>
      <ul className='list'>
        {(toDoList || []).map(el => (
          <li key={`${el.title}-${el.id}`}>
            <input type={'checkbox'} onChange={(e) => handleChange(e, el.id)}/>
            {el.title}
            <button onClick={() => handleRemoveToDo(el.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AppConsumer;
