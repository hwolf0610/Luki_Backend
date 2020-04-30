import React from 'react';
import axios from "axios";

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'
import { withRouter } from "react-router";

// var perf =require('../Landing_Template/index.html');

// import Page from '../Landing_Template/index.html';
// var htmlDoc = {__html: Page};

// import htmlContent from '../Landing_Template/index.html';

import { Grid, Button, TextField, } from '@material-ui/core';
import logo from '../../assets/images/logo.png'
import logo_header2 from '../../assets/images/logo_header2.png'
import header_mobile from '../../assets/images/header-mobile.png'
import Progress_phone from '../../assets/images/progress-phone.png'
import HeaderImage from '../../assets/images/header-bg.jpg'
import ProgressImage from '../../assets/images/progress-bg.jpg'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            dataStar: [],
            template: "",
        }
    }
    componentDidMount = () => {
        if(localStorage.getItem('Luki_Token') == ""){
            this.props.history.push("/login");
            console.log("Token expired")
        }
        console.log("Token :", localStorage.getItem('Luki_Token'))
        // this.props.history.push("/login");
        // let {template} = this.state;

        // var __html = require('../Landing_Template/index.html');
        //  template = { __html: __html };

        /* Template html */
        //  template =require('../Landing_Template/index.html');
        //         this.setState({template})
    }
    onLogout=()=>{
        localStorage.setItem("Luki_Token", "");
        console.log("Token :", localStorage.getItem('Luki_Token'))
        this.props.history.push("/login");
    }
    render() {
        return (
            // <div style={{height:'100%', margin:'0px',padding:'0px',overflow:'hidden'}}>
            //     <iframe src="Landing/" frameborder="0" width="100%" height="100%" style={{overflow:'hidden',height:'100%',width:'100%',position:'absolute',top:'0px',left:'0px',right:'0px',bottom:'0px'}}></iframe>
            // </div>
            // <div>
            //     {/* <div dangerouslySetInnerHTML={this.state.template} /> */}
            //     <template/>
            // </div>
            // <iframe src={perf }></iframe>   /* like this */
            // <div dangerouslySetInnerHTML={htmlDoc} />
            // <div dangerouslySetInnerHTML={ {__html: htmlContent} }  />
            <div>
                <Grid container style={{ backgroundColor: '#5f88fc', width: '100%', height: '100px', position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: '999' }} >
                    <Grid item lg={4} md={4} sm={4} xs={4}  >
                        <img src={logo} width="30%" style={{ margin: '15px' }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={6} style={{ margin: '30px', color: 'white', fontSize: '25px' }}>
                        {/* <span style={{ marginRight: '30px' }}>Home</span>
                        <span>Contact</span> */}
                    </Grid>
                    <Grid item lg={1} md={1} sm={1} xs={1} style={{float:'right'}} >
                    <Button
                            style={{marginTop:'15px', marginLeft:'3px',float:'right'}}
                            color="primary"
                            size="large"
                            variant="contained"
                            onClick={this.onLogout}
                        > Log out</Button>
                    </Grid>
                </Grid>
                <div style={{ position: 'absolute' }}>
                    <img src={HeaderImage} width="100%" />

                    <div style={{ position: 'absolute', width:'35%', color: 'white' , textAlign: 'center', top: '45%', left: '53%', paddingLeft: '10px', paddingTop: '10px', fontSize: '16px', zIndex: '5' }}>
                        <p style={{ fontSize: '60px' }}>Start your amazing stuff through appy.</p>
                        <p style={{ position: 'relative', left: '-30px', fontSize: '15px' }}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                    </div>

                </div>
                <img src={header_mobile} width="25%" style={{ position: 'relative', marginLeft: '25%', marginTop: '20%' }} />

                {/* <div style="position:relative;">
                        <img src="../../assets/imgs/Bitmap Copy 76.png" width="100%" height="196px" />
                        <div
                            style="position:absolute;width:210px;color:white;top:70px;left:40%;padding-left:10px;padding-top:10px;font-size:16px;z-index:5;">
                            <p style="font-size: 25px;">EDUCATION</p>
                            <div
                                style="position: relative;left: 30px; height: 2px;width: 90px;background-color: white;">
                            </div><br>
                            <p style="position: relative;left: -30px;font-size: 15px;text-align: center;">Tutors(teachers), Students, Job
                                Offers, Looking for job</p>
                        </div>

                        </div> */}

                <div style={{ marginTop: '10%', width: '100%' }}>
                    <img src={logo_header2} width="5%" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '5%' }} />
                    <div style={{ marginLeft: '25%', marginRight: '25%', textAlign: 'center' }}>
                        <h4 style={{ color: 'grey' }}>About Appy</h4>
                        <h3 style={{ color: '#5f88fc', fontSize: '30px' }}>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis. </h3>
                        <p style={{ color: 'grey' }}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut
                            labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                    </div>
                </div>


                <Grid container style={{ backgroundColor: '#f5f6ff', position: 'absolute', marginTop: '15%', width: '100%', marginBottom: '5%' }}>
                    <Grid item lg={6} md={12} sm={12} xs={12} style={{ paddingTop: '25px', paddingLeft: '10%', paddingRight: '10%' }}  >
                        <p style={{ color: '#8790af' }}>Our Progress</p>
                        <p style={{ fontSize: '30px' }}>Grat Application Ever</p>
                        <p style={{ color: '#8790af' }}>Lorem ipsum dolor sit amet, consectetur adipiing elit, sed do eiusmod tempor incididunt ut
                            labore et laborused sed do eiusmod tempor incididunt ut labore et laborused.</p>
                        <br />
                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                        > Learn More</Button>
                    </Grid>
                    <Grid item lg={6} md={12} sm={12} xs={12}  >
                        <img src={ProgressImage} style={{ width: '100%' }} />
                    </Grid>
                </Grid>
                <img src={Progress_phone} width="20%" style={{ position: 'relative', marginLeft: '45%', marginTop: '12%' }} />


                <div style={{ backgroundColor: '#f5f6ff', width: '100%', height: '60px', position: 'fixed', bottom: '0px', left: '0px', right: '0px', zIndex: '999' }}>
                    <p style={{ textAlign: 'center' }} >Copyright ©2020 All rights reserved</p>
                </div>




            </div>
        )
    }
}
export default withRouter(Home);
