import React, { Component } from 'react';
import Header from './Head/Header'
import SideDrawer from './Drawer/SideDrawer'
import BackDrop from './BackDrop/BackDrop'
import {
    withStyles
} from '@material-ui/core'
import PropTypes from 'prop-types'


class AppBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sideDrawer:false
        }
        this.drawerHandle = this.drawerHandle.bind(this);
        
    }
    
    drawerHandle = () =>{
        this.setState((prevState)=>{return{sideDrawer:!prevState.sideDrawer}})
    }
    // closeIcon = () =>{
    //     this.setState({})
    // }
    backDropClickHandle = () =>{
        this.setState({sideDrawer:false})
    }

    render() { 

        const { classes } = this.props;

        let backdrop;
        if(this.state.sideDrawer){
            backdrop=<BackDrop click={this.backDropClickHandle} />
        }
        return (
            <div className={classes.root} >
                <Header name={this.props.name} drawerClick = {this.drawerHandle} />
                {backdrop}  
                <SideDrawer history={this.props.history} click={this.backDropClickHandle} show={this.state.sideDrawer} />
                
            </div>
        );
    }
}

 
AppBar.propTypes={
    classes:PropTypes.object.isRequired,
}

const styles = (theme) =>({
    root: { 
        height:'100%', 
        marginBottom:60, 
        zIndex:theme.zIndex.drawer+1
      }, 
})

export default withStyles(styles)(AppBar);