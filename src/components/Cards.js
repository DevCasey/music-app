import React from 'react';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeDown from '@material-ui/icons/VolumeDown';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
});


const OnlineMode = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    return (
        <div className={classes.root}>
            <Grid container directions="row" justify="center" alignItems="center">
                <Card className="online-styles">
                    <CardContent>
                        <Typography classname="card-title" color="primary">
                            Online Mode
                        </Typography>

                        <Typography variant="h6" component="h3">
                            Is this application connected to the internet?
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <FormControlLabel value="Online" control={<Switch color="primary" />} label="Offline" labelPlacement="Start"/>
                    </CardActions>

                </Card>

                <Card className="volume-styles">
                    <CardContent>
                        <Typography className="card-title" color="primary">
                            Master Volume
                        </Typography>

                        <Typography variant="h6" component="h3">
                            Overrides all other sound settings in this application.
                        </Typography>

                    <CardActions>

                        <Typography id="continuous-slider" gutterBottom>
                            Volume
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item>
                                <VolumeDown />
                            </Grid>
                            <Grid item xl>
                                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                            </Grid>
                            <Grid item>
                                <VolumeUp />
                            </Grid>
                        </Grid>
                        {/* <Slider disabled defaultValue={30} aria-labelledby="continuous-slider" /> */}
                    </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default OnlineMode;
