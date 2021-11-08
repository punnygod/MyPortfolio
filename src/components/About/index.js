import React, { Component } from 'react';
import { Title, Hi, BouncySpan, AboutContainer, H1, Paragraph } from './style';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        <Title className='firstLine'>
          WEB <BouncySpan style={{ marginLeft: '10px' }}>D</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>V</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>L</BouncySpan>
          <BouncySpan>O</BouncySpan>
          <BouncySpan>P</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>R</BouncySpan>
        </Title>,
        <Title className='firstLine'>
          MOBILE <BouncySpan style={{ marginLeft: '10px' }}>D</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>V</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>L</BouncySpan>
          <BouncySpan>O</BouncySpan>
          <BouncySpan>P</BouncySpan>
          <BouncySpan>E</BouncySpan>
          <BouncySpan>R</BouncySpan>{' '}
        </Title>,
      ],
      index: 0,
    };

    this.timer = null;
  }

  updateIndex = () => {
    let index = (this.state.index + 1) % this.state.title.length;
    this.setState({ index });
  };

  componentDidMount = () => {
    this.timer = setInterval(this.updateIndex, 5000);
  };
  render() {
    return (
      <AboutContainer>
        <H1>
          <Hi style={{ display: 'flex', flexDirection: 'row' }}>
            <BouncySpan>H</BouncySpan>
            <BouncySpan>i</BouncySpan>
            <BouncySpan>,</BouncySpan>
          </Hi>
          <Hi style={{ display: 'flex', flexDirection: 'row' }}>
            <BouncySpan>I</BouncySpan>
            <BouncySpan>'</BouncySpan>
            <BouncySpan style={{ marginRight: '10px' }}>m</BouncySpan>
            <BouncySpan>S</BouncySpan>
            <BouncySpan>I</BouncySpan>
            <BouncySpan>D</BouncySpan>
            <BouncySpan>D</BouncySpan>
            <BouncySpan>H</BouncySpan>
            <BouncySpan>E</BouncySpan>
            <BouncySpan>S</BouncySpan>
            <BouncySpan>H</BouncySpan>
          </Hi>
          <div>{this.state.title[this.state.index]}</div>
        </H1>
        <Paragraph> React/React Native Developer </Paragraph>
      </AboutContainer>
    );
  }
}

export default About;
