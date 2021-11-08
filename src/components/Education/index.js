import React, { Component } from 'react';
import Student from '../../assets/student.json';
import App from '../../assets/appDev.json';
import Teaching from '../../assets/teaching.json';

import Lottie from 'react-lottie';
import {
  Timeline,
  TimelineItems,
  TimelineContent,
  TimelineItem,
} from './style';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [
        {
          name: '2019',
          active: true,
        },
        {
          name: '2015',
          active: false,
        },
        {
          name: '2013',
          active: false,
        },
      ],
      activeStrip: '2019',
      animate: false,
    };
  }

  componentDidMount = () => {};
  clickedItem = (i) => {
    console.log('index', i);
    let temp = [
      {
        name: '2019',
        active: false,
      },
      {
        name: '2015',
        active: false,
      },
      {
        name: '2013',
        active: false,
      },
    ];
    temp[i] = {
      name: temp[i].name,
      active: true,
    };
    this.setState({ details: temp }, () =>
      this.setState({ activeStrip: temp[i].name, animate: true })
    );
  };
  renderEducationYearwise = () => {
    console.log('activeStrip', this.state.activeStrip);
    switch (this.state.activeStrip) {
      case '2013':
        const gif_2013 = {
          loop: true,
          autoplay: true,
          animationData: Teaching,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        };
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 50,
              marginLeft: '20px',
              marginRight: '20px',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <div
              className={this.state.animate ? 'slideForward' : ''}
              style={{ width: '44%' }}
              onAnimationEnd={() => this.setState({ animate: false })}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: '40px',
                  fontFamily: 'Montserrat, serif',
                }}
              >
                Completed Schooling
              </div>
              <div
                style={{
                  marginTop: '20px',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
            <div
              className={this.state.animate ? 'slideBackwards' : ''}
              style={{ width: '38%', paddingLeft: '12%' }}
            >
              <Lottie
                options={gif_2013}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
            </div>
          </div>
        );
      case '2015':
        const gif_2015 = {
          loop: true,
          autoplay: true,
          animationData: Student,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        };
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 50,
              marginLeft: '20px',
              marginRight: '20px',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <div
              className={this.state.animate ? 'slideForward' : ''}
              style={{ width: '44%' }}
              onAnimationEnd={() => this.setState({ animate: false })}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: '40px',
                  fontFamily: 'Montserrat, serif',
                }}
              >
                Started Engineering at KJ Somaiya College of Engineering
              </div>
              <div style={{ marginTop: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
            <div
              className={this.state.animate ? 'slideBackwards' : ''}
              style={{ width: '38%', paddingLeft: '12%' }}
            >
              <Lottie
                options={gif_2015}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
            </div>
          </div>
        );
      case '2019':
        const gif_2019 = {
          loop: true,
          autoplay: true,
          animationData: App,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        };
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 50,
              marginLeft: '20px',
              marginRight: '20px',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <div
              className={this.state.animate ? 'slideForward' : ''}
              style={{ width: '44%' }}
              onAnimationEnd={() => this.setState({ animate: false })}
            >
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  color: '#fff',
                  lineHeight: '40px',
                  fontFamily: 'Montserrat, serif',
                }}
              >
                Started Working on Frontend Technologies and App development
              </div>
              <div style={{ marginTop: '20px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </div>
            </div>
            <div
              className={this.state.animate ? 'slideBackwards' : ''}
              style={{ width: '38%', paddingLeft: '12%' }}
            >
              <Lottie
                options={gif_2019}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
              />
            </div>
          </div>
        );
    }
  };
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'right',
          flexDirection: 'column',
          alignItems: 'center',
          width: '85%',
          alignSelf: 'flex-end',
        }}
      >
        <div
          style={{
            fontSize: '40px',
            color: '#fbd54a',
            fontFamily: 'Montserrat, serif',
          }}
        >
          Education
        </div>
        <Timeline>
          <TimelineItems>
            {this.state.details &&
              this.state.details.map((item, i) => {
                return (
                  <TimelineItem
                    key={i}
                    onClick={() => {
                      this.clickedItem(i);
                    }}
                    className={'timeline-item' + (item.active ? ' active' : '')}
                  >
                    <TimelineContent>{item.name}</TimelineContent>
                  </TimelineItem>
                );
              })}
          </TimelineItems>
        </Timeline>
        {this.renderEducationYearwise()}
      </div>
    );
  }
}

export default Education;
