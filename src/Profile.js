import React, { Component } from 'react';
import { Row, Col,Icon,Card,Progress } from 'antd';
import {  NavLink } from "react-router-dom";
import './Profile.css';

class Profile extends Component {
    constructor(props){
        super(props);
        const user={name:'Jana Novakova',age:'24',
        avatar:"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg",
        weight:62,
        height:162,
        fat:21,
        steps:3452,
        calories:557,
        temperature:37.5,
        heartrate:82,
        bmi:20.4,
        goals:57,
        blood:'A'
      };
        this.state={ user};
      }
      
        render() {   
        const iconStyle={
            fontSize: 20,color:'#ffffff'
        };
        const overlay={
            height: '30vh',
            zIndex:'1',
            borderBottom: '7px solid #0479BD',
            background:'transparent', 
            width: `${this.state.user.goals}%`,
            padding: '20px 20px 0px'
        };
          return (
            <div className="Profile">
            <header className="Profile-header" style = {{backgroundImage: `url(${this.state.user.avatar})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <div style={overlay}>
              <Row className="header-data">
              <Col span={12}>
              <NavLink to="/">
              <Icon type="menu-fold" style={iconStyle} />
             </NavLink>
              </Col>
              </Row>
              <Row className="Profile-intro">
              <Col span={12}> {this.state.user.name}</Col>
              <Col span={12}> </Col>
              </Row>
              </div>
            </header>
            <div className="Profile-middle">
            <Row>
            <Col span={8} className="box" ><div className="boxcontent">
             <font className="Bigtext">{this.state.user.age}</font>
            <br/><font className="smalltext"> Age</font></div>
            </Col>
            <Col span={8} className="box">
            <div className="boxcontent">
            <font className="Bigtext">{this.state.user.blood}</font>
            <br/><font className="smalltext"> Blood group</font>
            </div>
             </Col>
            <Col span={8} className="box"> 
            <div className="boxcontent">
            <font className="Bigtext">{this.state.user.bmi}</font>
            <br/><font className="smalltext"> BMI</font>
            </div>
            </Col>
            </Row>
            <Row>
            <Col span={8} className="box">
            <div className="boxcontent">
            <font className="Bigtext">{this.state.user.height}</font>cm
            <br/><font className="smalltext"> Height</font>
            </div>
            </Col>
            <Col span={8} className="box"> 
            <div className="boxcontent">
            <font className="Bigtext">{this.state.user.weight}</font>kg
            <br/><font className="smalltext"> Weight</font>
            </div>
            </Col>
            <Col span={8} className="box">
            <div className="boxcontent">
            <font className="Bigtext">{this.state.user.fat}</font> %
            <br/><font className="smalltext"> Fat</font>
            </div>
            </Col>
            </Row>
            </div>
            <div className="Profile-bottom">
        
            </div>
            </div>
          );
        }
      }

export default Profile