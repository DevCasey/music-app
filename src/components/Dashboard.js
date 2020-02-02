import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {Card, CardContent, CardActions} from '@material-ui/core'
import UseStyles from './Cards'
import '../App.css';
import Switch from '@material-ui/core/Switch';
import OnlineMode from './Cards'

export default class Dashboard extends React.Component {
    state = {
        online: false,
        volume: 20,
        quality: 1,
        notifications: []
    }


    render() {
 


        return (
            <div>
                <OnlineMode />
            </div>

            // <Grid container directions="row" justify="center" alignItems="center">
                
            //         <Card className="online-card">
            //             <h2>Online Mode</h2>
            //             Is this Application Connected to the internet?
            //         </Card>

            //         <Card className="volume-card">
            //             <h2>Master Volume</h2>
            //             Overrides all other sound settings in this application
            //         </Card>

            //         <Card className="quality-card">
            //             <h2>Sound Quality</h2>
            //             Manually control the music quality in event of poor connection
            //         </Card>
                
            // </Grid>

            
        )
    }
}




