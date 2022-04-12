import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import TaskIcon from '@mui/icons-material/Task';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Logout from '@mui/icons-material/Logout';
import LogoutBtn from '../auth/LogoutBtn';
import { useSelector } from 'react-redux';
import { useEffect, useState} from 'react';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dash = useSelector(state=>state.dashboards);
  const [taskQuantity, setTaskQuantity] = useState(0); 


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  let name  = localStorage.getItem('name');
  let imageUrl = localStorage.getItem('imageUrl');

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', textAlign: 'center'}}>
        <MenuItem>
          <DashboardCustomizeIcon sx={{color: "white", marginRight: "5px"}}/> {dash.length}
        </MenuItem>
        <MenuItem>
          <TaskIcon sx={{color: "white", marginRight: "5px"}}/> {taskQuantity}
        </MenuItem>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar className="avatar">
              <img id="avatar_image" src={imageUrl} alt="user_image" />
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {name}
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <LogoutBtn/>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
