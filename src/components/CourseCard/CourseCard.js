import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'; 

import {
    Typography,
    IconButton,
    CardMedia,
    CardContent,
    Card,
    withStyles
} from '@material-ui/core';

import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PropTypes from 'prop-types'

class CourseCard extends React.Component {
  render() { 

    const { classes } = this.props;
    return (
      <Card variant="outlined" className={classes.root}>
          <CardMedia
              className={classes.cover} 
              title="Live from space album cover"
          />
          <div className={classes.details}>
              <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                  {this.props.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                  {this.props.description}
              </Typography>
              </CardContent>
              <div className={classes.controls}> 
              </div>
        </div>
      </Card>
  );
  }
}
 


const styles =(theme) => ({
    root: {
      display: 'flex',
      margin:10,
      marginTop:20,
      backgroundColor:"#e1e1e1", 
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      // width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

  CourseCard.propTypes = {
    classes:PropTypes.object.isRequired
  }

  export default withStyles(styles)(CourseCard);