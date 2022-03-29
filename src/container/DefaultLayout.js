import React, { Component } from "react";
import Years from '../components/Years'
import Items from '../components/Article'
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Col,
  Row,
  Label,
} from "reactstrap";
import ReactLoading from 'react-loading'
import "bootstrap/dist/css/bootstrap.css";
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    if (this.state.launch === true || this.state.launch === false) {
      url += "&launch_success=" + this.state.launch;
    }
    if (this.state.land === true || this.state.land === false) {
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
    if (this.state.land === true || this.state.land === false) {
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
    if (this.state.launch === true || this.state.launch === false) {
      url += "&launch_success" + this.state.launch;
    }
    this.props.getData(url);
  };
  render() {
    let buttonStyle = {
      margin: 5,
    };
    return (
      <div className="container animated-fadein">
        <br />
        <div style={{ border: "3px solid gray", padding: 20, background: '#F0F3F5' }}>
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
                <CardBody><Years year={this.state.year} clickHandler={this.clickHandler} /></CardBody>
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
            {this.props.data.status === 'requesting' ?
              <ReactLoading type='spin' color='#138496' /> :
              <Col>
                <ul><Items {...this.props} /></ul>
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
