import React from 'react';
import axios from "axios";

import logo from '../../assets/images/logo2.png'

import { Grid, Button, TextField, } from '@material-ui/core';

import { withRouter } from "react-router";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',

        }
    }
    componentDidMount = () => {
        // let body = { firstName: 'admin', lastName: 'admin', email: 'admin', password: 'admin', phoneNumber: '1234567890', flag: '1' }
        // axios.post(localStorage.getItem("url") + '/Userlogin', body)
        //     .then((res) => {
        //         console.log(res.data)
        //     }).catch((error) => {
        //         console.log(error)
        //     });
        // if (localStorage.getItem("email") != "" && localStorage.getItem("password") != "") {
        //     window.location.href = '/admin'
        // }

    }
    changeemail = (e) => { this.setState({ email: e.target.value }); }
    changepass = (e) => { this.setState({ password: e.target.value }); }
    onSignin = () => {
        let body = { email: this.state.email, password: this.state.password }
        axios.post(localStorage.getItem("url") + '/Userlogin', body)
            .then((res) => {
                console.log(res.data)
                // if (res.data.data.email[0].length > 0) {
                //     localStorage.setItem("name", res.data.data.firstName);
                //     localStorage.setItem("email", res.data.data.email);
                //     localStorage.setItem("password", res.data.data.password);
                //     localStorage.setItem("phoneNumber", res.data.data.phoneNumber);
                //     if (res.data.data.flag == 1) {
                //         localStorage.setItem("key", "1");
                //         window.location.href = '/admin'
                //     } else if (res.data.data.flag == 2) {
                //         localStorage.setItem("key", "2");
                //         window.location.href = '/admin'
                //     }

                // } else {
                //     alert("No member!");
                // }
                // console.log(res.data.data.email)
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
                alert("Wrong username or password!");
            })
        this.setState({ email: '', password: '' })
    }
    onSignup = () => {
        this.props.history.push("/signup");
    }
    render() {
        return (
            <div  >
                <Grid container spacing={3} style={{ margin: '20px' , marginTop:'50px'}} >
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
                                    label="Email address"
                                    name="email"
                                    onChange={this.changeemail}
                                    type="text"
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
                                    onChange={this.changepass}
                                    type="password"
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
                                    onClick={this.onSignin}
                                > Login</Button>
                                 <br/> <br/>
                                <p style={{textAlign:'center', color:'#75757c'}}>Don't have an account? &nbsp;&nbsp;&nbsp;</p>
                                <Button
                                    style={{backgroundColor:'white'}}
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    onClick={this.onSignup}
                                > Creat an account</Button> 
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

// export default Login;
export default withRouter(Login);
