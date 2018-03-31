import React, {Component} from "react";
import {Button} from 'reactstrap';
import images from '../images';
let {indexPhoto} = images;

class Home extends Component {
  render() {
    return (
      <div>
      <img width="100%" src={indexPhoto} alt="logo"/>
      <h2 className="mt-4">Welcoms To Lion DanceSchool</h2>
      <p>Cras facilisis urna ornare ex volutpat, et convallis erat elementum. Ut aliquam, ipsum vitae gravida suscipit, metus dui bibendum est, eget rhoncus nibh metus nec massa. Maecenas hendrerit laoreet augue nec molestie. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
      <div className="d-flex justify-content-center">
        <Button className="bg-dark px-5 ">
          Sign Up
        </Button>
      </div>
      <br/>
      <br/>
    </div>
    );
  }
}

export default Home;
