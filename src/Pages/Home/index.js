import React from 'react'
import { makeStyles } from '@mui/styles'

import Menu from '../../Components/Menu'

// Material UI //
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typograpgy from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'


// Material Icons //
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '0',
    borderRadius: '0px',
  }
})

const Home = (props) => {
  const classes = useStyles()

const Search = () => {
  
}

  return (
    <Paper elavation={0} className={classes.root}>
      <Menu />
    </Paper>
  )
}

export default Home