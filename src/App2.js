import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import {Well, Thumbnail, Collapse} from 'react-bootstrap';
import './App.css';
import './PicBox.css';
class PicBox extends Component {
  constructor(args) {
    super(args);
    this.state = {imageUrl:args.imageUrl,
      Title:args.Title,
      subTitle:args.subTitle,
      popout:args.popout
    };
  }

  render() {
    return (
      <div>
        <Thumbnail src={this.state.imageUrl} alt={this.state.Title} onClick={ ()=> this.setState({ open: !this.state.open })}>
          <h2>
            <font className="lg">{this.state.Title}</font>
            <font className="sm">{this.state.subTitle}</font>
          </h2>
        </Thumbnail>
        <Collapse in={this.state.open}>
          <div>
            <Well className="wg">
              {this.state.popout}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Title:"John & Lorraine's Wedding ",
      subTitle:"So French, So Chic",
      OurStory:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      SheSaidYesNowWhat:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Accommodation:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      HowToGetThere:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      RSVP:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      Gifts:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
                <PicBox popout={this.state.OurStory} Title="Our love story&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" imageUrl="/images/OurStory.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout={this.state.SheSaidYesNowWhat} Title="She said yes! now what?&nbsp;&nbsp;&nbsp;" imageUrl="/images/WeddingDetails.jpg" />
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout={this.state.Accommodation} Title="Accommodation options&nbsp;&nbsp;&nbsp;" imageUrl="/images/Accommodation.jpg"/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                  <PicBox popout={this.state.HowToGetThere} Title="How to get there&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" imageUrl="/images/wedding.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout={this.state.RSVP} Title="Repondez, s'il vous plait" imageUrl="/images/RSVP.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout={this.state.Gifts} Title="Wedding gifts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" imageUrl="/images/Gifts.jpg"/>
              </Col>
            </Row>
          </Grid>
    );
  }
}

export default App;
