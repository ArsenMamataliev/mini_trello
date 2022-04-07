import * as React from 'react';
import Draggable from 'react-draggable';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const style = {
  maxWidth: 345,
  margin: '10px 5px',
  cursor: 'pointer'
}
const high = {
  backgroundColor: "red"
}

const low = {
  backgroundColor: "white"
}

export default function Tasks({ task }) {
  const bgColor = task.taskStatus === "Low"? low: high;
  return (
    <Draggable>
      <Card>
          <CardContent sx={bgColor}>
            <div style={{padding:'5px'}}>
            {task.taskName}
            </div>
          </CardContent>
      </Card>
    </Draggable>
  );
}
