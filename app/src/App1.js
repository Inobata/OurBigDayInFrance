import React, { Component } from 'react';
import './App.css';
import PicBox from './PicBoxCollapse';
import { Grid } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Title:"John & Lorraine's Wedding ",
      subTitle:"So French, So Chic"
    }
  }
  componentWillMount(){
  }

  render() {
    return (
        <Grid>
          <Row>
              <div className="App-header">
                <h2><font className="largej">{this.state.Title}</font><br/>
                  <font className="smallj">{this.state.subTitle}</font>
                </h2>
              </div>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <PicBox Title="Our love story&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" imageUrl="/images/OurStory.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox Title="She said yes! now what?&nbsp;&nbsp;&nbsp;" imageUrl="/images/WeddingDetails.jpg" />
              </Col>
              <Col xs={12} md={4}>
                <PicBox Title="Accommodation options&nbsp;&nbsp;&nbsp;" imageUrl="/images/Accommodation.jpg"/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                  <PicBox Title="How to get there&nbsp;&nbsp;&nbsp;" imageUrl="/images/wedding.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox Title="Repondez, s'il vous plait" imageUrl="/images/RSVP.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox Title="Wedding gifts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" imageUrl="/images/Gifts.jpg"/>
              </Col>
            </Row>
          </Grid>
    );
  }
}

export default App;
