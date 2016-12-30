import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom';
import {Modal, Thumbnail, Popover, OverlayTrigger} from 'react-bootstrap';
import {validator} from 'validator';
import './App.css';
import './PicBox.css';
import {nodemailer} from 'nodemailer';
import * as child from 'child_process';
class PicBox extends Component {
  constructor(args) {
    super(args);
    this.state = {
      imageUrl:args.imageUrl,
      Title:args.Title,
      subTitle:args.subTitle,
      popout:args.popout
    };
  }

  render() {
    function breakLine(text) {
      var regex = /(<br>)/g;
      return text.split(regex).map(function(line) {
          return line.match(regex) ? React.createElement('br') : line;
      });
    }
    let close = () => this.setState({ show: false});
    var PopUp = breakLine(this.state.popout)
    if (this.state.popout === "OurLoveStory") {
      PopUp = <OurLoveStory/>
    } else if (this.state.popout === "SheSaidYesNowWhat"){
      PopUp = <SheSaidYesNowWhat/>
    }else if ( this.state.popout === "Accommodation"){
      PopUp = <Accommodation/>
    } else if ( this.state.popout === "HowToGetThere"){
      PopUp = <HowToGetThere/>
    } else if (this.state.popout === "Gifts"){
      PopUp = <Gifts/>
    } else if (this.state.popout === "RSVP"){
      PopUp = <RSVP/>
    }
    return (
      <div>
        <Thumbnail src={this.state.imageUrl} alt={this.state.Title} onClick={() => this.setState({ show: true})}>
          <h2>
            <font className="lg">{this.state.Title}</font>
            <font className="sm">{this.state.subTitle}</font>
          </h2>
        </Thumbnail>
        <Modal
          show={this.state.show}
          onHide={close}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">{this.state.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>{ PopUp }</div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
class HoverOverImage extends Component{
  constructor(args){
    super(args);
    this.state = {
      id:args.id,
      text:args.text,
      imgageUrl:args.imageUrl
    };
  }
  render(){
    var popoverTop="";
    if (this.state.id === "HisBlondeWig") {
      popoverTop= (
        <Popover id="AlwaysInMiddle" title={this.state.text}>
          <img src="/images/blonde-wig.jpg" alt={this.state.text} />
        </Popover>
      )
    }else if (this.state.id === "camper") {
      popoverTop= (
        <Popover id="AlwaysInMiddle" title={this.state.text}>
          <img src="/images/therig.jpg" alt={this.state.text} />
        </Popover>
      )
    }else if (this.state.id === "HeProposed"){
      popoverTop= (
        <Popover id="AlwaysInMiddle" title="he proposed">
          <img src="/images/Engagement.jpg" alt={this.state.text} />
        </Popover>
      )
    }else {
      popoverTop= (
        <Popover id="AlwaysInMiddle" title="he proposed">
          <img src="/images/Engagement.jpg" alt={this.state.text} />
        </Popover>
      )
    }
    return(
      <OverlayTrigger overlay={popoverTop} container={this} placement="bottom" delayShow={300} delayHide={250}>
        <text className="hoverOverText">{this.state.text}</text>
      </OverlayTrigger>
    );
  }
}
class OurLoveStory extends Component {
  constructor(args) {
    super(args);
    this.state = {
    };
  }
  render() {
    return (
      React.createElement("div", {id:"attachToThis"},
        React.createElement("p", null, 'We owe it to eHarmony – we first met online', React.createElement('br'), 'You have something in common” (A love of good wine!)'),
        React.createElement("p", null, 'His smile caught my eye, and I agreed to a date', React.createElement('br'), 'Though it has to be said, ',<HoverOverImage id="HisBlondeWig" text="his blonde wig"/>,' was great!'),
        React.createElement("p", null, 'Our dates were extravagant, a ten course meal!', React.createElement('br'), 'But it has to be said, his wit sealed the deal'),
        React.createElement("p", null, 'On date number 3, Cat claimed “he’s the one”', React.createElement('br'), 'And deep down I knew; he was second to none'),
        React.createElement("p", null, 'A few months in, I then broke the news', React.createElement('br'), 'I wished to move home, but would he refuse?'),
        React.createElement("p", null, 'Instead, ',<HoverOverImage id="HeProposed" text="he proposed"/>, ' with a ring on one knee', React.createElement('br'), 'All that matters he said, is just you and me'),
        React.createElement("p", null, 'I’m so lucky I thought, to have met my match', React.createElement('br'), 'When all of a sudden, he said there’s a catch!'),
        React.createElement("p", null, 'We’ll drive home he said, in a ',<HoverOverImage id="camper" text="camper"/>,' for two', React.createElement('br'), 'From Australia to Europe (sure what could I do!)'),
        React.createElement("p", null, 'Everyone said if we survive that with ease', React.createElement('br'), 'Then marriage and everything else is a breeze!'),
        React.createElement("p", null, 'A year in the car would drive anyone mad', React.createElement('br'), 'But we made it, we’re here, such adventures we had!'),
        React.createElement("p", null, 'You now know our story and how our love grew', React.createElement('br'), 'So join us in France as we both say ‘I do!’')
      )
    );
  }
}
class SheSaidYesNowWhat extends Component{
  render(){
    return(
      React.createElement("div", {id:"attachToThis"},
        React.createElement("p", null, "We’re getting hitched! And as much as John tried to elope, we’d love your company to help us celebrate in style!",
          React.createElement("br"),
          React.createElement("div", {className:"list left30"}, "Venue: "),
          React.createElement("div", {className:"list right70"}, React.createElement('a',{href:"http://www.chateaudelisse.com/"}, 'Chateau De Lisse')),
          React.createElement('br'),
          React.createElement("div", {className:"list left30"}, "Date: "),
          React.createElement("div", {className:"list right70"}, "Saturday 16 September 2017"),
          React.createElement("br")),
        React.createElement("p", null,
          React.createElement("Div", {className:"list left"}, 'Order of Events at the Chateau:'),
          React.createElement("br"),
          React.createElement("Div", {className:"list left"}, 'Vows, Rings and I Dos: '),
          React.createElement("Div", {className:"list right"}, '1pm'),
          React.createElement("br"),
          React.createElement("Div", {className:"list left"}, 'Popping the fizz: '),
          React.createElement("Div", {className:"list right"}, '2pm'),
          React.createElement("br"),
          React.createElement("Div", {className:"list left"}, 'Wining and Dining: '),
          React.createElement("Div", {className:"list right"}, '5pm'),
          React.createElement("br"),
          React.createElement("Div", {className:"list left"}, 'Cranking the tunes: '),
          React.createElement("Div", {className:"list right"}, '8pm till late')),
        React.createElement("p", null, 'Sunday 17 September 2017',
          React.createElement("br"),
          "Join us for your hangover cure, in the form of a French picnic on the lawn from 1pm!"),
        React.createElement("P", null, 'Ladies:',
          React.createElement("br"),
          'Weather permitting; we hope to celebrate our wedding on the terrace in the sunshine. Stilettos are of course permitted, but for your comfort we suggest you kick off your heels!'),
        React.createElement("p", null, 'Families:',
          React.createElement("br"),
          'Your little ones are of course welcome at all times, and we will have a professional babysitter and a dedicated cot room at the Chateau on Saturday 16, until midnight.')
      )
    );
  }
}
class Accommodation extends Component{
  render(){
    return(
      React.createElement("div", {id:"attachToThis"},
        React.createElement("p", null, "As there is a global horse show taking place in the area on the same weekend (we do love a bit of competition!) we encourage you to book your accommodation ASAP to avoid disappointment!"),
        React.createElement("p", null, "The following list of local hotels, gites and chambre d'hotes (because that's how they do it in France) are all within a 12km radius of the chateau; many of them have reserved a few rooms and apartments for us, so make sure to mention our wedding to release the rooms. "),
        React.createElement("p", null,
          React.createElement("a", {href:"https://www.bastides-albret.fr/"}, "Les Bastides"),
          ": 10 holiday let apartments; mention our wedding for a 10% discount."),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.hotelhenriiv.fr/"}, "Hotel Henri IV"),
          ": a 3-star hotel with 17 rooms. We've negotiated a reduced rate, so mention our wedding when you book!"),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.chateauhordosse.com/"}, "Château Hordosse"),
          ": A family-run chateau with 4B&B rooms and a 3-bed gite for shared accommodation. We've temporarily booked them all, so mention our wedding to release the rooms."),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.moulindebapaumes.com/"}, "Moulin de Bapaumes"),
          ": 5 B&B rooms, each with a unique theme. We've temporarily booked them all, so mention our wedding to release the rooms."),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.latourdebrazalem.com/"}, "La Tour de Brazalem"),
          ": 5 B&B rooms plus a self-catering studio (excellent reviews on Tripadvisor)"),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.moulin-larroque.com/"}, "Moulin de Larroque"),
          ": a boutique hotel with 5 rooms"),
        React.createElement("p", null,
          React.createElement("a", {href:"http://chambredhotesmoulindestours.fr/"}, "Moulin des Tours"),
          ": 5 B&B rooms, prices start at 65Euro"),
        React.createElement("p", null,
          React.createElement("a", {href:"http://www.domaineducauze.fr/"}, "Domaine de Cauze"),
          ": 5 B&B rooms, prices start from 53Euro"),
        React.createElement("p", null,
          React.createElement("a", {href:"http://relais-moulinneuf.fr/"}, "Le Relais du Moulin Neuf"),
          ": a huge holiday village, but we can't vouch for its quality!"),
        React.createElement("p", null,
          React.createElement("a", {href:"https://www.bastides-albret.fr/"}, "Barbaste Golf Club "),
          ": Hotel rooms and holiday homes at the foot of an 18-hole golf course. We’re told the villas at the back of the club are nicer than those at the front. Don’t confuse with the Barbaste Domaine which is a different property at the same location. ")
      )
    );
  }
}
class HowToGetThere extends Component{
  render(){
    return(
      React.createElement("div", {id:"attachToThis"},
        React.createElement("p", null, "The nearest town to the chateau is Nerac, just 9kms away, and most of the accommodation we have suggested is located here, or in the nearby village Barbaste, just 1km further."),
        React.createElement("h3", null, "AIRPORTS:"),
        React.createElement("p", null, "Chateau De Lisse is located 1.5hours south of Bordeaux Airport, 2 hours west of Toulouse Airport, and there are also regular flights from Pau and Bergerac Airport.",
          React.createElement("br"),
          "The easiest way to get from the airport is to rent a car.",
          React.createElement("br"),
          "SAT NAV COORDINATES",
          React.createElement("br"),
          "Latitude: 44.108242   Longitude: 0.252345"),
        React.createElement("h3", null, "TRAIN:"),
        React.createElement("p", null, "Agen train station is a 20minute drive from the chateau, and it’s only 16Euro in a taxi from there."),
        React.createElement("h3", null, "TAXI:"),
        React.createElement("p", null, "We have negotiated reduced fares with two taxi companies, so if you’d like to book in advance, just let us know and we’ll put you in touch.",
          React.createElement("br"),
          "Car (up to 4 people)",
          React.createElement("br"),
          React.createElement("div", {className:"list left"}, "Toulouse Airport: "),
          React.createElement("div", {className:"list right"}, "155euro, including tolls"),
          React.createElement("br"),
          React.createElement("div", {className:"list left"}, "Bordeaux Airport: "),
          React.createElement("div", {className:"list right"}, "145euro, including tolls"),
          React.createElement("br"),
          React.createElement("br"),
          "Minibus (up to 8 people)",
          React.createElement("br"),
          React.createElement("div", {className:"list left"}, "Toulouse Airport: "),
          React.createElement("div", {className:"list right"}, "300euro, including tolls"),
          React.createElement("br"),
          React.createElement("div", {className:"list left"}, "Bordeaux Airport: "),
          React.createElement("div", {className:"list right"}, "280euro, including tolls")),
        React.createElement("p", null, "We have arranged a shuttle bus to pick up and drop off from areas within a 15kilometre radius of the Chateau on Saturday 16, so if you have a hire car, we suggest you leave it behind."),
        React.createElement("p", null, "If your Sat Nav alias is Irish, it’s likely you’ll get lost… believe us, we’ve just driven 50,000kilometres across the world and took our first wrong turn in France! If so, don’t hesitate to call our venue manager Jo on +33 (0)6 03 12 43 21 for directions.")
      )
    );
  }
}
class Gifts extends Component{
  render(){
    return(
      React.createElement("div", {id:"attachToThis"},
        React.createElement("p", null, "Weddings are pricey, and destination weddings even more so. We know we’re asking a lot – your flights, transfers and accommodation. So please believe us when we say….your presence is our present!"))
    );
  }
}
// handle RSVP Form post

class RSVP extends Component{
  constructor(args){
    super(args)
    this.state={
      Title:"RSVP Page"
    }
  }

  render(){
    function handleSubmit(event) {
      event.preventDefault();
      //Check All equired Fields
      var formData = {
        Name: ReactDOM.findDOMNode(this.refs.yourNames).value,
        Children:ReactDOM.findDOMNode(this.refs.Children).value,
        Email: ReactDOM.findDOMNode(this.refs.yourEmail).value,
        YesOrNo: ReactDOM.findDOMNode(this.refs.YesOrNo).value,
        DietaryNeeds: ReactDOM.findDOMNode(this.refs.DietaryNeeds).value,
        Songs: ReactDOM.findDOMNode(this.refs.Songs).value
      };
      //HoneyPot
      //Check Rquired Fformdata
      if(formData.Name || formData.email || formData.Children || formData.YesOrNo || formData.DietaryNeeds || formData.Songs){
        console.log('Error formdata incomplete')
        return;
      }
      //Cehck for Valid email
      if(!validator.isEmail(formData.Email)){
        console.log('Error formData Email Invalid')
        return;
      }
      //Send email
      var mailOpt, smtpTransporter;
      mailOpt = {
        from: formData.Name + '&lt;' + formData.Email + '&gt;',
        to: 'johnandlorrainerawlings@gmail.com',
        subject:'Wedding RSVP',
        text: formData.DietaryNeeds + ' || Name:' + formData.Name + ' || Email:' + formData.Email
      };
      smtpTransporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
          user:"johnandlorrainerawlings@gmail.com",
          pass:"7qh9qhvM"
        }
      });
      smtpTransporter.sendMail(mailOpt, function(error, info){
        if(error){
          console.log('e-mail send error')
        }
        else {
          console.log('e-mail send sucessful')
        }
      });
    }
    return(
        React.createElement("userform", {action:""},
          React.createElement("p", {classname:"rsvpForm"},
            React.createElement("input", {id:"yourNames", ref:"yourNames", type:"text", placeholder:"Uw naam", name:"name", required:"", size:"40", value:""})
          ),
          React.createElement("p", {class:"company"},
            React.createElement("input", {id:"YesOrNo", ref:"YesOrNo", type:"text", placeholder:"Uw bedrijfsnaam", name:"company", size:"40"})
          ),
          React.createElement("p", {class:"form_Children"},
            React.createElement("input", {id:"Children", ref:"Children", type:"email", placeholder:"Uw e-mail", name:"email", required:"", size:"40", value:""})
          ),
          React.createElement("p", {class:"form_email"},
            React.createElement("input", {id:"yourEmail", ref:"yourEmail", type:"email", placeholder:"Uw e-mail", name:"email", required:"", size:"40", value:""})
          ),
          React.createElement("p", {class:"form_textarea"},
            React.createElement("textarea", {id:"DietaryNeeds", ref:"DietaryNeeds", name:"message", placeholder:"Hoe kunnen onze Drupal expert helpen?", required:"", cols:"40", rows:"10"})
          ),
          React.createElement("p", {class:"form_textarea"},
            React.createElement("textarea", {id:"Songs", ref:"Songs", name:"message", placeholder:"Hoe kunnen onze Drupal expert helpen?", required:"", cols:"40", rows:"10"})
          ),
          React.createElement("p", {class:"form_submit"},
            React.createElement("input", {type:"submit", value:"Verstuur uw bericht ->", class:"lead-form-bottom-submit"})
          )
        )
      )
  }
}
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      Title:"John & Lorraine's Wedding ",
      subTitle:"So French, So Chic",
    }
  }
  componentWillMount(){
  }
  render() {
    return (
        <Grid>
          <Row>
              <div className="App-header">
                <h2><div className="largej">{this.state.Title}</div>
                  <div className="smallj">{this.state.subTitle}</div>
                </h2>
              </div>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                <PicBox popout="OurLoveStory" Title="Our love story" imageUrl="/images/OurStory.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout="SheSaidYesNowWhat" Title="She said yes! now what?" imageUrl="/images/WeddingDetails.jpg" />
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout="Accommodation" Title="Accommodation options" imageUrl="/images/Accommodation.jpg"/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={4}>
                  <PicBox popout="HowToGetThere" Title="How to get there" imageUrl="/images/wedding.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout="RSVP" Title="Repondez, s'il vous plait" imageUrl="/images/RSVP.jpg"/>
              </Col>
              <Col xs={12} md={4}>
                <PicBox popout="Gifts" Title="Wedding gifts" imageUrl="/images/Gifts.jpg"/>
              </Col>
            </Row>
          </Grid>
    );
  }
}

export default App;
