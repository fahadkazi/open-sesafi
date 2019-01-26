import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
class Login extends Component {
    state = {
        open: false,
        username: '',
        password: ''
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick(event) {
        console.log(event);
        const payload = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log("state", this.state);
        console.log(payload);
        if (payload.username === '' && payload.password === '') {
            alert("username password do not match")
        }
    }
    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="username"
                            label="Username"
                            type="text"
                            fullWidth
                            required
                            onChange={(event) => this.setState({ username: event.target.value })}
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                            onChange={(event) => this.setState({ password: event.target.value })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={(event) => this.handleClick(event)} color="primary">Login</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default Login;