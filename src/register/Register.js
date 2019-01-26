import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
class Register extends Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleClick(event) {
    }
    render() {
        return (
            <div>
                <Button color="inherit" onClick={this.handleClickOpen}>Register</Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Register</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="firstname"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="lastname"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="password"
                            label="Password"
                            type="password"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">Cancel</Button>
                        <Button onClick={(event) => this.handleClick(event)} color="primary">Register</Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}
export default Register;