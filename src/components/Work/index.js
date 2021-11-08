import React, { Component } from 'react';
import ContactUs from '../assets/contact-us.json';
import Lottie from 'react-lottie';

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }

  componentDidMount = () => {};

  render() {
    const gif = {
      loop: true,
      autoplay: true,
      animationData: ContactUs,
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
          Contact Me
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '100%',
          }}
        >
          <div>
            <Lottie
              options={gif}
              height={400}
              width={400}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              width: '100%',
            }}
          >
            <div className='contactItem'>
              <img
                src='https://img.icons8.com/fluency/48/000000/gmail-new.png'
                style={{ width: '40px', height: '40px' }}
              />
            </div>
            <div className='contactItem'>
              {' '}
              <img
                src='https://img.icons8.com/office/80/000000/whatsapp--v1.png'
                style={{ width: '40px', height: '40px' }}
              />
            </div>
            {/* <div className='contactItem'>
              {' '}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
              >
                <path d='M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z' />
              </svg>
            </div>
            <div className='contactItem'>
              <img
                src='https://img.icons8.com/dusk/64/000000/apple-phone.png'
                style={{ width: '40px', height: '40px' }}
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
