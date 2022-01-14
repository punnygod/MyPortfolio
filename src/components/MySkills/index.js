import React, { Component } from 'react';
import Lottie from 'react-lottie';
import Work from '../../assets/working-man.json';
import cssLogo from '../../assets/images/cssLogo.png';
import gitLogo from '../../assets/images/gitLogo.png';
import htmlLogo from '../../assets/images/htmlLogo.png';
import reactLogo from '../../assets/images/reactLogo.png';
import jsLogo from '../../assets/images/javascript.png';

class MySkills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentDidMount = () => {
    console.log(',ounte');
  };

  render() {
    const gif = {
      loop: true,
      autoplay: true,
      animationData: Work,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
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
          My Skills
        </div>
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
            className={this.state.animate ? 'slideBackwards' : ''}
            style={{ width: '44%' }}
          >
            <Lottie
              options={gif}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div
            className={this.state.animate ? 'slideForward' : ''}
            style={{ width: '44%' }}
            onAnimationEnd={() => this.setState({ animate: false })}
          >
            {/* <div
              style={{
                fontSize: '32px',
                fontWeight: 600,
                color: '#fff',
                lineHeight: '40px',
                fontFamily: 'Montserrat, serif',
              }}
            >
              Started Working on Frontend Technologies and App development
            </div> */}
            <img src={cssLogo} style={{ width: '20px', height: '20px' }} />
          </div>
        </div>
      </div>
    );
  }
}

export default MySkills;
