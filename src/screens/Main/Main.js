import React, { Component } from 'react';

import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    withStyles,
    Grid,
    Typography
} from '@material-ui/core/'
import PropTypes from 'prop-types'


import {
    AppBar,
    StaticDrawer,
    CourseCard
} from '../../components/index'

import './Main.css'

// const courseData = [
//     {
//         id:1,
//         title:"Machine Learning",
//         description:"",
//         img:
//     }
// ]
 
class Main extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() { 

        const { classes } = this.props;

        return (
            <div className={classes.root} >

                <div className="show-hide-drawer" >
                     <StaticDrawer/>
                </div> 
                <Grid  className="rootGrid" 
                       container
                    //    style={{backgroundColor:'red'}} 
                       > 
                    <Grid style={{width:"100%"}} item xs >
                        <Typography className={classes.title} >My courses</Typography>
                        <CourseCard/>
                    </Grid>
                    <Grid style={{width:"100%"}} item xs >
                        <Typography className={classes.title} >Recently Watched</Typography>
                        <CourseCard/>
                    </Grid> 
                </Grid> 
            </div>
        );
    }
}

Main.propTypes = {
    classes : PropTypes.object.isRequired,
}

const styles = (theme) =>({
    root: {
        display: 'flex',  
      }, 
    content:{
        marginTop:20
    },
    cardStyle:{
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop:40
    },
    rootGrid:{

    },
    title:{
        color:'#1f5c75',
        fontSize:20,
        fontStyle:'italic',
        fontWeight:'bolder',
        margin:10
    }
})

 
export default withStyles(styles)(Main);