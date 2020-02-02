import React from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import '../App.css';

export default class Login extends React.Component {
    render() {
        return (

            <Grid container direction="row" justify="center" alignItems="center">
                <form>
                    <div className="cred-container">
                        <div className="username-outer">
                            <Input placeholder="Username*"></Input>
                        </div>

                        <div className="password-outer">
                            <Input placeholder="Password*"></Input>
                        </div>

                        <div className="submit-button">
                            <Button fullWidth variant="contained" type="submit" color="primary" onClick={() => {this.props.onLogin()}}>
                                Login
                            </Button>
                        </div>
                    </div>

                </form>
            </Grid>
        )
    }
}



