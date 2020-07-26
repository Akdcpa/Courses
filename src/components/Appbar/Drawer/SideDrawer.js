import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {
        IconButton,
        Typography,
        ListItem,
        List, 
        } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'; 
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import MoreOutlinedIcon from '@material-ui/icons/MoreOutlined';
import ContactsOutlinedIcon from '@material-ui/icons/ContactsOutlined';

import './SideDrawer.css'
const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height:'1px',
            width:'95%'
        }}
    />
);
class SideDrawer extends Component {
    constructor(props) {
        super(props)
        this.state = { 
                show:true
            }
        }
    onClickClose(drawerclass){
        drawerclass='side-drawer'
    }
    render() { 
        let drawerClass = 'side-drawer' 
        if(this.props.show){
            drawerClass = 'side-drawer open'
        }
        return (
            <div>
                <nav className={drawerClass} >
                    <div style={styles.drawerhead} >
                        <div>
                            <Typography style={styles.title} >SharePost</Typography>
                        </div>
                        <div className='spacer' ></div>
                        <div>
                            <IconButton  onClick={this.props.click} ><CloseIcon style={styles.closeicon} /></IconButton>
                        </div>
                    </div>
                    <div style={styles.listdiv} >
                        {/* <List> 
                            <ListItem onClick={()=>this.props.history.push('Home')} style={styles.listitem} >
                                <HomeOutlinedIcon fontSize='large' />
                                <Typography style={styles.drawerlist} >Home</Typography>
                            </ListItem> 

                            <ListItem onClick={()=>this.props.history.push('friends')} style={styles.listitem} >
                                <ContactsOutlinedIcon fontSize='large' />
                                <Typography style={styles.drawerlist} >Friends</Typography>
                            </ListItem>

                            <ListItem style={styles.listitem} >
                                <MoreOutlinedIcon fontSize='large' />
                                <Typography style={styles.drawerlist} >More</Typography>
                            </ListItem>

                            <ListItem style={styles.listitem} >
                                <ExploreOutlinedIcon fontSize='large' /> 
                                <Typography style={styles.drawerlist} >Explore</Typography>
                            </ListItem>

                            <ListItem style={styles.listitem} >
                                <NotificationsNoneOutlinedIcon fontSize='large' /> 
                                <Typography style={styles.drawerlist} >Notification</Typography>
                            </ListItem>

                            <ListItem onClick={()=>this.props.history.push('profile')}  style={styles.listitem} >
                                <PersonOutlineIcon fontSize='large' />
                                <Typography style={styles.drawerlist} >Profile</Typography>
                            </ListItem>
                        </List> */}
                       
                    </div>
                </nav>
            </div>
        );
    }
}

const styles={
    closeicon:{ 
        color:'white'
    },
    drawerhead:{
        display:'flex',
        backgroundColor:'#521751', 
        flexDirection:'row' ,
        height:'62px',
        alignItems: 'center',
    },
    title:{
        fontSize:'20px',
        fontWeight:'bold',
        margin:5,
        color:'white', 
    },
    listitem:{
        cursor:'pointer'
    },
    drawerlist:{
        marginLeft:10,
        fontSize:'20px', 
    },
    listdiv:{
        // marginTop:10
    }
}
 
export default SideDrawer;