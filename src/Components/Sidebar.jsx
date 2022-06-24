import * as React from 'react';
import './SideBar.css';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { DeleteTwoTone } from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import MuiList from '@mui/material/List';
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import { styled } from '@mui/system';
import { makeStyles, createStyles } from '@material-ui/core/styles'
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [open, setOpen] = React.useState(false)

  function handleClick() {
    setOpen(!open)
  }



  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
const List = styled(MuiList)({
  // selected and (selected + hover) states
  '&& .Mui-selected, && .Mui-selected:hover': {
    backgroundColor: 'black',
    '&, & .MuiListItemIcon-root': {
      color: 'blue',
    },
  },
  // hover states
  '& .MuiListItemButton-root:hover': {
    backgroundColor: 'black',
    '&, & .MuiListItemIcon-root': {
      color: 'blue','&, & .MuiListItemText-root': {
      color: 'blue',},
    },
  },
});
  const drawer = (
    <>
    <div className='DrawerBody'>
      <div className="drawerbodyflex">
        <div className="drawerimageflex">
          <img className='profilepicture' width="100px" height="100px" src="https://media.istockphoto.com/vectors/vector-image-turn-sign-360-degreesvector-white-icon-on-dark-blue-vector-id860889436?s=612x612" />
        </div>
        <div className="drawerheadf">
            <h4>360* Corporation</h4>
        </div>
      </div>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className='ListItemButton'>
              <ListItemIcon>
                {index === 0 && <InboxIcon className='ListItemIcons'/>}
                {index === 1 && <MailIcon className='ListItemIcons'/>}
                {index === 2 && <DeleteTwoTone className='ListItemIcons'/>}
                {index === 3 && <DeleteTwoTone className='ListItemIcons'/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>      
          <ListItemButton button onClick={handleClick}>
                  <ListItemIcon>
                    <MailIcon  className='ListItemIcons' />
                  </ListItemIcon>
                  <ListItemText primary="Nested Pages" />
                  {open ? <IconExpandLess /> : <IconExpandMore />}
          </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <Divider />
                  <List component="div" disablePadding>
                    <ListItemButton className='ListItemButton' >
                       <ListItemIcon>
                        <MailIcon  className='ListItemIcons' />
                      </ListItemIcon>
                      <ListItemText primary="Nested Page one" />
                    </ListItemButton>
                    <ListItemButton className='ListItemButton'>
                      <ListItemText inset primary="Nested Page 2" />
                    </ListItemButton>
                  </List>
                </Collapse>
        
       </List>

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem className='ListItemButton' key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {index === 0 && <InboxIcon className='ListItemIcons'/>}
              {index === 1 && <MailIcon className='ListItemIcons'/>}
              {index === 2 && <DeleteTwoTone className='ListItemIcons' />}
              {index === 3 && <DeleteTwoTone className='ListItemIcons'/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

       <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem className='ListItemButton' key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {index === 0 && <InboxIcon className='ListItemIcons'/>}
              {index === 1 && <MailIcon className='ListItemIcons'/>}
              {index === 2 && <DeleteTwoTone className='ListItemIcons' />}
              {index === 3 && <DeleteTwoTone className='ListItemIcons' />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
  
    <Box>
        <Toolbar>
          <IconButton
          className="DrawerBodyw"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
        </Toolbar>
    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
        
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
         
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;