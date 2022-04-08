import * as React from 'react';
import Draggable from 'react-draggable';
import DashboardMenuOption from '../dashboard/DashboardMenuOption';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function Tasks({ task }) {
  return (
    <Draggable>
      <div className="task">
        <p>{task.taskStatus==="High" && <PriorityHighIcon sx={{color:"red"}}/>}{task.taskName}</p>
        <DashboardMenuOption/>
      </div>
    </Draggable>
  );
}
