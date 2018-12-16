import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div>
        <SayFullName name="Dmitry" surname="Kek" link="vk.com" />
        <SayFullName name="Lol" surname="qwer" link="#" />
      </div>
      )
  }
}

function SayFullName(props) {
  return (
    <div>
      <h1>Name - {props.name}, Surname - {props.surname}</h1>
      <a href={props.link}>My VK</a>
    </div>
    )
}

export default App;
