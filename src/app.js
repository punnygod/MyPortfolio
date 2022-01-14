import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Lottie from 'react-lottie';
import Work from './assets/working-man.json';
import background from './assets/background.json';
// Import assets
import 'modern-normalize/modern-normalize.css';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Title, WordOrange } from './style';
// Import Components
import Contact from './components/Contact';
import Education from './components/Education';
import MyHeader from './components/Header';
import About from './components/About';
import MySkills from './components/MySkills';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [
        <Title className='firstLine'>WEB </Title>,
        <Title className='firstLine'>MOBILE </Title>,
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
      <div
        style={{
          display: 'flex',
          minHeight: '100vh',
          backgroundColor: '#1D1D1D',
          flexDirection: 'column',
        }}
      >
        <MyHeader />
        <div
          style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <About />
          <Education />
          <MySkills />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
