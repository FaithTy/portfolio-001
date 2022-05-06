import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'

import SearchIcon from '@mui/icons-material/Search'


import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '50px',
    borderRadius: '5px',
    marginRight: '2em',
    flex: '1 0 auto',
    backgroundColor: '#ffffff21',
    '& .MuiInput-root': {
      width: 'calc(100% - 2em)',
      height: '100%',
      marginLeft: '2em'
    }
  },
  iconWrapper: {
    position: 'absolute',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Search = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.iconWrapper}>
        <SearchIcon />
      </Box>
      <Input placeholder='Search...' />
    </Box>
  )
}

export default Search