import React from 'react';
import {connect} from 'react-redux'
import './App.css';
import {handleAddToDo, handleRemoveToDo, handleToDoItem} from './actions/toDoList'
import {handleChangeValue} from './actions/inputActions'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';

const mapStateToProps = (state) => {
    return {
        toDoList: state.toDoList,
        value: state.inputReducer.value,
        dummy: state.inputReducer.dummy
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleCurrentItem: (payload) => dispatch(handleToDoItem(payload)),
        handleAddToDo: (payload) => dispatch(handleAddToDo(payload)),
        handleChangeValue: (payload) => dispatch(handleChangeValue(payload)),
        handleRemoveToDo: (payload) => dispatch(handleRemoveToDo(payload))
    }
};

function App(props) {
    console.log(props);
    const {toDoList, handleCurrentItem, handleAddToDo, value, handleChangeValue, handleRemoveToDo} = props;

    const handleChange = (e, id) => {
        const {checked} = e.target || e;
        const current = toDoList.find(el => el.id === id) || {}
        handleCurrentItem({
            ...current,
            checked
        })
    };

    const handleInputChange = (e) => {
        const {value} = e.target || e;
        handleChangeValue(value)
    };

    const handleAddToDoClick = () => {
        handleAddToDo(value);
        handleChangeValue('')
    };

    const handleRemove = (id) => {
        handleRemoveToDo(id)
    };

    return (
        <div className='container'>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        My To Do App
                    </Typography>
                </Toolbar>
            </AppBar>
            <List className='list'>
                {toDoList.map(el => (
                    <ListItem key={`${el.title}-${el.id}`} data-cy={el.id}>
                        <Checkbox onChange={(e) => handleChange(e, el.id)}/>
                        <ListItemText>
                            {el.title}
                        </ListItemText>
                        <ListItemButton>
                            <Button variant="outlined" data-cy={`delete-${el.id}`} onClick={() => handleRemove(el.id)}>Remove</Button>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <div>
                <TextField id="input" label="New To Do" variant="standard" value={value}
                           onChange={handleInputChange}/>
                <Button onClick={handleAddToDoClick} data-cy={"add-button"}>Add Item</Button>
            </div>
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
