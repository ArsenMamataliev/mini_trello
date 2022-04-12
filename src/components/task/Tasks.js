import * as React from 'react';
import Draggable from 'react-draggable';
import DeleteIcon from '@mui/icons-material/Delete';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../store/dashboardsSlice';

export default function Tasks({ task }) {
  const dispatch = useDispatch();
  return (
    <Draggable
    grid={[10, 10]} axis='y' bounds='parent'
    >
      <div className="task">
        <p>{task.taskStatus==="High" && <PriorityHighIcon sx={{color:"red"}}/>}{task.taskName}</p>
        <DeleteIcon 
          className="delete-icon"
          onClick={()=>dispatch(deleteTask(task.taskId))}
        />
      </div>
    </Draggable>
  );
}
