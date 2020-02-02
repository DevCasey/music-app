import React from 'react';
import { Card, CardActions, CardContent, Typography, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import VolumeUp from '@material-ui/icons/VolumeUp';
import VolumeDown from '@material-ui/icons/VolumeDown';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'


const useStyles = makeStyles({
    root: {
        width: 250,
    },
});



const moreStyles = makeStyles(theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}))


const OnlineMode = () => {
    const classes = useStyles();
    const moreClasses = moreStyles();
    const [quality, setQuality] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeQuality = event => {
        setQuality(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    }



    return (
        <div className={classes.root}>
            <div className="all-containers">
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

                    <Card className="quality-styles">
                        <CardContent>
                            <Typography className="card-title" color="primary">
                                Sound Quality
                            </Typography>
                            <Typography variant="h6" component="h3">
                                Manually control the music quality in event of poor connection.
                            </Typography>
                            <Grid container spacing={2}>
                                <Button className={moreClasses.button} onClick={handleOpen}>
                                    Open the select
                                </Button>
                                <FormControl className={moreClasses.formControl}>
                                    <InputLabel id="demo-controlled-open-select-label">Normal</InputLabel>
                                    <Select
                                    labelId="demo-controlled-open-select-label"
                                    id="demo-controlled-open-select"
                                    open={open}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    value={quality}
                                    onChange={handleChangeQuality}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>Low</MenuItem>
                                        <MenuItem value={2}>Normal</MenuItem>
                                        <MenuItem value={3}>High</MenuItem>
                                        
                                    </Select>
                                </FormControl>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </div>
    )
}

export default OnlineMode;
