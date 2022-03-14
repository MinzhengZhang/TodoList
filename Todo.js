import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { db } from './firebase';
import { doc, deleteDoc } from "firebase/firestore";
import './Todo.css';

const Todo = ({ arr }) => {
    return (
        <List className="todo_list" >
            <ListItem alignItems="flex-start" >
                <ListItemAvatar />
                <ListItemText id="ListText" primary={arr.item.todo} />
                <DeleteIcon fontSize="medium" style={{ opacity: 0.4 }} onClick={() => { deleteDoc(doc(db, 'todos', arr.id)) }} />
            </ListItem>

        </List>
    )
};

export default Todo;

// db.collection('todos').doc(arr.id).delete()