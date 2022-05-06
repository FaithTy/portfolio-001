import React from 'react'
import { makeStyles } from '@mui/styles'

import Search from '../Search'

// Material UI //
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Typograpgy from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'

// Material Icons //

import NotificationsIcon from '@mui/icons-material/Notifications'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MailIcon from '@mui/icons-material/Mail'

const useStyles = makeStyles({
  root: {
    '& .MuiAppBar-root': {
      flexDirection: 'row !important',
      alignItems: 'center',
    },
    '& .MuiToolbar-root': {
      flexGrow: '1'
    }
  },
  menuIcons: {
    display: 'flex'
  }
})

const Menu = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton 
            size='large'
            edge='start'>
            <Typograpgy variant='caption'>Logo</Typograpgy>
          </IconButton>
        <Search />
          <Box className={classes.menuIcons}>
            <IconButton>
              <NotificationsIcon />
            </IconButton>
            <IconButton>
              <MailIcon />
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Menu