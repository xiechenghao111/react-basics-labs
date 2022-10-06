import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const AddTaskForm = (props) => {
   
  return (
    <Box
    component="form"
    sx={{
      '& .MuiOutlinedInput-root': { m: 1, width: '30ch' },
    }}
    onSubmit={props.submit}
  >
    <div>
      <TextField
        required
        id="outlined-required"
        name="title"
        label="Task Title"
        InputLabelProps={{ shrink: true }}
        onChange={(event) => props.change(event)}
      />
    </div>
    <div>
      <TextField
        required
        name="deadline"
        label="Deadline"
        InputLabelProps={{ shrink: true }}
        type="date"
        onChange={(event) => props.change(event)}
      />
    </div>
    <div>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Priority</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.priority}
          label="task.Priority"
          onChange={(event) => props.change(event)}
  
        >
          <MenuItem value={10}>Low</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>High</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    </div>
    <div>
      <TextField
        name="description"
        id="outlined-multiline-static"
        label="Task Details"
        InputLabelProps={{ shrink: true }}
        multiline
        rows={4}
        onChange={(event) => props.change(event)}
      />
    </div>
    
    <div>
      <Button 
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          m: 1,
          p: 1,
          width: '95%'
        }}
      >
        Add Task
      </Button>
    </div>
  </Box>
  )
};

export default AddTaskForm;