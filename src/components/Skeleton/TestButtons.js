import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import '../../styles/Buttons.css'

const mockData = [{"name": "one"}, {"name": "two"}, {"name": "three"}]
const mockDataEmpty = []
const updateData = (d, index) => {
  console.log(`Here is the data: ${JSON.stringify(d[index])}`)
}

const handleRest = () => {
  console.log("Reset")
}

const buttonGen = (d) => {
  console.log(d)
  const buttons = []
  for( const data of d) {
    buttons.push(<Button type="submit" key={data.name} onClick={ () => {updateData(d, d.indexOf(data))}}>{data.name}</Button>)
  }
  return buttons
}

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'end',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        {buttonGen(mockData)}
        <Button type="reset" key="reset" onClick={ () => {handleRest([{"name": "reset"}])}}>Reset</Button>
      </ButtonGroup>
    </Box>
  );
}