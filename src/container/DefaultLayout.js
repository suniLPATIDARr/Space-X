import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Button,
  Col,
  Row,
  FormGroup,
  Label,
} from "reactstrap";
import ReactLoading from 'react-loading'
import "bootstrap/dist/css/bootstrap.css";
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
      ],
    };
  }
  componentDidMount = () => {
    this.props.getData();
  };
  clickHandler = (year) => {
    let url = "&launch_year=" + year;
    this.setState({
      year,
    });
    if (this.state.launch===true || this.state.launch===false) {
      url += "&launch_success=" + this.state.launch;
    }
    if (this.state.land===true || this.state.land===false) {
      url += "&land_success" + this.state.land;
    }
    this.props.getData(url);
  };
  launchHandler = (value) => {
    let url = "&launch_success=" + value;
    this.setState({
      launch: value,
    });
    if (this.state.year) {
      url += "&launch_year=" + this.state.year;
    }
    if (this.state.land===true || this.state.land===false) {
      url += "&land_success" + this.state.land;
    }
    this.props.getData(url);
  };
  landingHandler = (value) => {
    let url = "&land_success=" + value;
    this.setState({
      land: value,
    });
    if (this.state.year) {
      url += "&launch_year=" + this.state.year;
    }
    if (this.state.launch===true || this.state.launch===false ) {
      url += "&launch_success" + this.state.launch;
    }
    this.props.getData(url);
  };
  render() {
    let buttonStyle = {
      margin: 5,
    };
    let data = this.props.data.data.map((item, index) => {
      return (
        <li
          style={{
            listStyleType: "none",
            display: "inline-block",
            border: "1px solid #CBCED0",
            padding: 5,
            margin: 5,
          }}
        >
          <article>
            <img height={200} width={200} src={item.links.mission_patch}></img>
            <h3></h3>
            <Label>
              <b>Mission Id`s :</b>
            </Label>
            <br />
            <ul>
              {item.mission_id.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
            <Label>
              <b>Launch Year :</b>
              <span>{item.launch_year}</span>
            </Label>
            <br />
            <Label>
              <b>Successful Launch :</b>{" "}
              <span>{item.launch_success?item.launch_success.toString():''}</span>
            </Label>
            <br />
            <Label>
              <b>Successful Landing :</b>{" "}
              <span>
                {item.rocket.first_stage.cores[0].land_success
                  ? item.rocket.first_stage.cores[0].land_success.toString()
                  : ""}
              </span>
            </Label>
          </article>
        </li>
      );
    });

    let buttons = this.state.years.map((year) => {
      return (
        <Button
          color={this.state.year === year ? "success" : "info"}
          style={buttonStyle}
          onClick={this.clickHandler.bind(this, year)}
        >
          {year}
        </Button>
      );
    });
    return (
      <div className="container animated-fadein">
        <br />
        <div style={{ border: "3px solid gray", padding: 20,background:'#F0F3F5' }}>
          <Row>
            <Col>
              <CardHeader><h4>SpaceX Launch Program</h4></CardHeader>
            </Col>
          </Row>
          <Row>
            <Col className="text-left">
              <span className="text-left">Filters</span>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card>
                <CardHeader>Launch year</CardHeader>
                <CardBody>{buttons}</CardBody>
                <CardHeader>Successful Launch</CardHeader>
                <CardBody>
                  <Button
                    color={this.state.launch === true ? "success" : "info"}
                    style={buttonStyle}
                    onClick={this.launchHandler.bind(this, true)}
                  >
                    True
                  </Button>
                  <Button
                    color={this.state.launch === false ? "success" : "info"}
                    style={buttonStyle}
                    onClick={this.launchHandler.bind(this, false)}
                  >
                    False
                  </Button>
                </CardBody>
                <CardHeader>Successful Landing</CardHeader>
                <CardBody>
                  <Button
                    color={this.state.land === true ? "success" : "info"}
                    style={buttonStyle}
                    onClick={this.landingHandler.bind(this, true)}
                  >
                    True
                  </Button>
                  <Button
                    color={this.state.land === false ? "success" : "info"}
                    style={buttonStyle}
                    onClick={this.landingHandler.bind(this, false)}
                  >
                    False
                  </Button>
                </CardBody>
              </Card>
            </Col>
            {this.props.data.status==='requesting'?
        <ReactLoading type='spin' color='#138496' />:
            <Col>
              <ul>{data}</ul>
              <Label>
                <b>Developed by</b> : Sunil
              </Label>
            </Col>}
          </Row>
        </div>
  </div>
    );
  }
}
export default DefaultLayout;
