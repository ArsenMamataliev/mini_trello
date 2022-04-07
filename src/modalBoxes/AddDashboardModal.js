import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import {useDispatch} from "react-redux";
import {addDash} from '../store/dashboardsSlice'

export default function AddDashboardModal() {
  const [open, setOpen] = useState(false);
  const [dashboardName, setDashboardName]= useState();

  const dispatch = useDispatch();
  const id = nanoid();
  
  const saveValue = e => setDashboardName(e.target.value);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSave = () => {
    if( dashboardName === " " || dashboardName == null){
      handleClickOpen();
    }else{
      dispatch(addDash({id, dashboardName}));
      setDashboardName("");
      handleClose();
    }
  }

  return (
    <div>
      <Button id="add-dashboard-btn" startIcon={<AddCircleOutlineSharpIcon />}
        sx={{ color: 'whitesmoke', fontSize: '20px'}} onClick={handleClickOpen}
      >
        Dashboard
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DASHBOARD</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Dashboard name"
            type="text"
            fullWidth
            variant="standard"
            required
            onChange = {saveValue}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant = "primary" 
            onClick={onSave}
          >Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
