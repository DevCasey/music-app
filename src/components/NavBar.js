import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const NavBar = () => {
    return (
        <div className="NavBar">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="#1976d2">
                        My Music App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;
