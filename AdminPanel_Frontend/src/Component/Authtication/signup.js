import React from 'react';
import axios from "axios";

import logo from '../../assets/images/logo2.png'

import { Grid, Button, TextField, } from '@material-ui/core';

import { withRouter } from "react-router";

class Signup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',

        }
    }
    componentDidMount = () => {

    }
    changeUsername = (e) => { this.setState({ username: e.target.value }); }
    changeemail = (e) => { this.setState({ email: e.target.value }); }
    changepass = (e) => { this.setState({ password: e.target.value }); }
    onSignup = () => {
        let body = { username: this.state.username, email: this.state.email, password: this.state.password, role: "user" }
        axios.post(localStorage.getItem("url") + '/Usersignup', body)
            .then((res) => {
                console.log(res.data)
                if(res.data.status == 200){
                    localStorage.setItem("Luki_Token", res.data.data.UserToken);
                    console.log(res.data.data.UserToken)
                    alert(res.data.message)
                    this.props.history.push("/");
                }else{
                    alert(res.data.data)
                }   
            }).catch((error) => {
                console.log(error)
            });
    }
    onLogin = () => {
        this.props.history.push("/login");
    }
    render() {
        return (
            <div  >
                <Grid container spacing={3} style={{ margin: '20px', marginTop: '50px' }} >
                    <Grid item lg={4} md={4} sm={4} xs={4} >
                        &nbsp;
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4} >
                        <Grid container spacing={3} >
                            <Grid item lg={12} md={12} sm={12} xs={12} >
                                <img src={logo} width="100%" />
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={8} md={8} sm={8} xs={8} >
                                <TextField
                                    fullWidth
                                    style={{ backgroundColor: 'white' }}
                                    label="Username"
                                    name="Username"
                                    onChange={this.changeUsername}
                                    type="text"
                                    value={this.state.username}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={8} md={8} sm={8} xs={8} >
                                <TextField
                                    fullWidth
                                    style={{ backgroundColor: 'white' }}
                                    label="Email address"
                                    name="Email"
                                    onChange={this.changeemail}
                                    value={this.state.email}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={8} md={8} sm={8} xs={8} >
                                <TextField
                                    fullWidth
                                    style={{ backgroundColor: 'white' }}
                                    label="Password"
                                    name="password"
                                    type="password"
                                    onChange={this.changepass}
                                    value={this.state.password}
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={2} md={2} sm={2} xs={2} >
                                &nbsp;
                            </Grid>
                            <Grid item lg={8} md={8} sm={8} xs={8} >
                                <Button
                                    color="primary"
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    onClick={this.onSignup}
                                > Register</Button>
                                <br /> <br />
                                <p style={{ textAlign: 'center', color: '#75757c' }}>Already have an account? &nbsp;&nbsp;&nbsp;</p>
                                <Button
                                    style={{ backgroundColor: 'white' }}
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    onClick={this.onLogin}
                                > Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={4} >
                        &nbsp;
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default withRouter(Signup);

