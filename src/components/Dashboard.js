import React, { Component } from 'react';
// import Grid from '@material-ui/core/Grid';
// import {Card, CardContent, CardActions} from '@material-ui/core'
import UseStyles from './Cards'
import '../App.css';
// import Switch from '@material-ui/core/Switch';
import OnlineMode from './Cards'
import Notifications from './Notifications';
import {addNotifs} from './Cards'

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
                <Notifications />
            </div>

            
        )
    }
}




