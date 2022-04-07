import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import AddIcon from '@mui/icons-material/Add';
import Select from '@mui/material/Select';
import {useDispatch} from "react-redux";
import { addTask } from '../store/dashboardsSlice';

export default function AddTaskModal({index}) {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskStatus, setTaskStatus] = useState('Low');
  const dispatch = useDispatch();
  const taskId = nanoid();

  const saveTaskStatus = e => setTaskStatus(e.target.value);
  const saveTaskName = e => setTaskName(e.target.value);
  const saveDefaultValue = () => {
          setTaskName('');
    }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
        color = "error" 
        variant="text" 
        startIcon={<AddIcon/>}
        sx={{fontSize: '15px'}}
        fullWidth = "true"
        onClick={handleClickOpen}
      >
        Task
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>TASK</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Task name"
            type="text"
            fullWidth
            variant="standard"
            value = {taskName}
            onChange = {saveTaskName}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
         <Select
          value={taskStatus}
          label="Status"
          onChange={saveTaskStatus}
         >
          <MenuItem value="Low" selected >Low</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant = "primary" 
            onClick={() => {
              handleClose();
              dispatch(addTask({taskName, taskStatus, index, taskId}));
              saveDefaultValue();
            }
            }
          >Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
