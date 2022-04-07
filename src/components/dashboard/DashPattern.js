import {React, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import AddTaskModal from '../../modalBoxes/AddTaskModal';
import DashboardMenuOption from './DashboardMenuOption';
import Tasks from '../task/Tasks';
import {useDispatch} from "react-redux";
import { EditText} from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { renameDash } from '../../store/dashboardsSlice';

export default function DashPattern({id, name, tasks, index}) {
  const [newDashName, setNewDashName]= useState(name);
  const dispatch = useDispatch();

  const handleSave = ({ name, value, previousValue }) => {
    dispatch(renameDash(newDashName,id))
  };


  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="avatar">
            {name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DashboardMenuOption id = {id}/>
          </IconButton>
        }
        title = <EditText
        name="textbox1"
        value={newDashName}
        onChange={setNewDashName}
        onSave={handleSave}
        />
      />
      <CardContent>
        <div className="dashboard">
            { tasks.map(task =>
              <Tasks
                key = {task.taskId}
                task = {task} 
              />
              )
            }
        </div>
        <AddTaskModal index = {index}/>
      </CardContent>
    </Card>
  );
}
