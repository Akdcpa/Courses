import React, { Component } from 'react';

import PropTypes from 'prop-types'

import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    withStyles
} from '@material-ui/core'

import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const drawerWidth = 240;


class StaticDrawer extends Component {
    render() { 
        const {classes} = this.props;
        return (
            <div style={{zIndex:-100}} >
                <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                        paper: classes.drawerPaper,
                        }}
                        anchor="left"
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        <List> 
                            <ListItem button key={0}>
                                <ListItemIcon>
                                    <ImportContactsIcon/>
                                </ListItemIcon>
                            <ListItemText primary="Courses" />
                            </ListItem>

                            <ListItem button key={1}>
                                <ListItemIcon>
                                    <LibraryAddCheckIcon/>
                                </ListItemIcon>
                            <ListItemText primary="Library" />
                            </ListItem>

                            <ListItem button key={2}>
                                <ListItemIcon>
                                    <FavoriteBorderIcon/>
                                </ListItemIcon>
                            <ListItemText primary="Favourites" />
                            </ListItem>
                        </List>
                        <Divider />
                        <List className={classes.bottomPush} > 
                            <ListItem button key={3}>
                                <ListItemIcon>
                                    <AccountCircleIcon/>
                                </ListItemIcon>
                            <ListItemText primary="Account" />
                            </ListItem>

                            <ListItem button key={4}>
                                <ListItemIcon>
                                    <ExitToAppIcon/>
                                </ListItemIcon>
                            <ListItemText primary="Sign Out" />
                            </ListItem>
                        </List>
                    </Drawer>
            </div>
        );
    }
}
 
StaticDrawer.propTypes={
    classes:PropTypes.object.isRequired,
}

const styles = (theme) =>({
    root: {
        display: 'flex',
        zIndex:-100
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0, 
      },
      drawerPaper: {
        width: drawerWidth,
      },
      // necessary for content to be below app bar
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
      },
      bottomPush: {
        position: "fixed",
        bottom: 0,
        textAlign: "center",
        paddingBottom: 10,
        width:drawerWidth
    }
})

export default withStyles(styles)(StaticDrawer);