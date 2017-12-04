import React, { Component } from 'react';
import { Row, Col,Icon,Avatar,Card,Progress } from 'antd';
import Trend from 'react-trend';
import { AreaChart,Area,ResponsiveContainer,ComposedChart,Line } from 'recharts';
import {  NavLink } from "react-router-dom";
import './Home.css';
const activity = [
  {name: 'Page A', today_activity: 4000, average: 2400, amt: 2400},
  {name: 'Page B', today_activity: 3000, average: 1398, amt: 2210},
  {name: 'Page C', today_activity: 2000, average: 9800, amt: 2290},
  {name: 'Page D', today_activity: 2780, average: 3908, amt: 2000},
  {name: 'Page E', today_activity: 1890, average: 4800, amt: 2181},
  {name: 'Page F', today_activity: 2390, average: 3800, amt: 2500},
  {name: 'Page G', today_activity: 3490, average: 4300, amt: 2100},
];
class Home extends Component {
constructor(props){
  super(props);
  const user={name:'Mithun',age:'24',
  avatar:"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373_960_720.jpg",
  weight:62,
  steps:3452,
  calories:557,
  temperature:37.5,
  heartrate:82,
  goals:57,
  status:'allright'
};
  this.state={ user};
}

  render() {
  const statusStyle={
      color:'green'
  };
    return (
      <div className="App">
      <header className="App-header">
        <Row className="App-nav">
        <Col span={12}>
        <NavLink to="/Profile">
        <Icon type="menu-unfold" style={{ fontSize: 20}} />
       </NavLink>
        </Col>
        <Col span={2} offset={10}><Avatar className="App-avatar" size="large" src={this.state.user.avatar} /></Col>
        </Row>
        <Row className="App-intro">
        <p>
         Welcome {this.state.user.name},<br/>
         Things looks <font style={statusStyle}>{this.state.user.status}.</font>
        </p>
        </Row>
      </header>
      <div className="App-middle">
      <Card.Grid className="cardbox">
      <font className="Bigtext">{this.state.user.temperature}&deg;</font>
      <br/><font className="smalltext"> Temperature</font>
       <Trend
       smooth
       data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
       gradient={['#D7722F']}
       radius={13.4}
       strokeWidth={5}
       strokeLinecap={'square'}
       />
      </Card.Grid>
      <Card.Grid className="cardbox">
      <font className="Bigtext">{this.state.user.calories}</font>cal
      <br/><font className="smalltext"> Colories burned</font>
      <Trend
       smooth
       data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
       gradient={['#509866']}
       radius={13.4}
       strokeWidth={5}
       strokeLinecap={'square'}
       />
      </Card.Grid>
      <Card.Grid className="cardbox">
      <font className="Bigtext">{this.state.user.steps}</font>
      <br/><font className="smalltext"> Steps</font>
      <Progress percent={50} showInfo={false} />
      </Card.Grid>
      <Card.Grid className="cardbox">
      <font className="Bigtext">{this.state.user.heartrate}</font>bpm
      <br/><font className="smalltext"> Heart rate</font>
      <Trend
       smooth
       data={[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0]}
       gradient={['#902EB3']}
       radius={20}
       strokeWidth={5}
       strokeLinecap={'square'}
       />
      </Card.Grid>
      </div>
      <div className="App-bottom">
      <font style={{padding:'20px'}}> Moving activity</font>
      <ResponsiveContainer >
      <AreaChart  data={activity}>
      <Area type="monotone" dataKey="today_activity" stroke="#82ca9d" fillOpacity={1} fill="#7CB0FE" />
      <Area type="monotone" dataKey="average" stroke="#82ca9d" fillOpacity={1} fill="#D4DEED" />
      </AreaChart>
      </ResponsiveContainer>
      </div>
      </div>
    );
  }
}

export default Home;
