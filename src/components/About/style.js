import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 40px;
  color: #fbd54a;
  font-family: Montserrat, serif;
  position: relative;
  text-align: left;
  animation: fadeBlue 5s;
  animation-iteration-count: infinite;
  transform-origin: '22%';
  @keyframes fadeBlue {
    0% {
      transform: scaleY(0);
      opacity: 0;
    }
    15% {
      transform: scaleY(1);
      opacity: 1;
    }
    85% {
      transform: scaleY(1);
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      opacity: 0;
    }
  }
`;
export const Hi = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 47px;
  color: #fff;
`;

export const BouncySpan = styled.div`
  color: white;
  text-align: left;
  animation-iteration-count: infinite;

  &:hover {
    animation: shakeit 0.5s;
    color: #08fdd8;
  }
  @keyframes shakeit {
    0% {
      transform: translateX(0%);
    }
    15% {
      transform: translateX(-25%) rotate(-5deg);
    }
    30% {
      transform: translateX(20%) rotate(3deg);
    }
    45% {
      transform: translateX(-15%) rotate(-3deg);
    }
    60% {
      transform: translateX(10%) rotate(2deg);
    }
    75% {
      transform: translateX(-5%) rotate(-1deg);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;
export const Point = styled.span`
  position: absolute;
`;
export const AboutContainer = styled.div`
  text-align: left;
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.div`
  width: 40%;
  margin-bottom: 10px;
  &:before {
    content: '<h1>';
    font-family: 'La Belle Aurore', cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    top: 33%;
    left: 28%;
  }
  &:after {
    content: '</h1>';
    font-family: 'La Belle Aurore', cursive;
    color: #515152;
    font-size: 1.8rem;
    position: absolute;
    top: 56%;
    left: 28%;
  }
`;
export const Paragraph = styled.div`
  width: 40%;
  color: #8d8d8d;
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  font-weight: 100;
  padding-top: 20px;
  &:before {
    content: '<p>';
    font-family: 'La Belle Aurore', cursive;
    color: #515152;
    font-size: 1.8rem;
    top: 0%;
    left: 28%;
  }
  &:after {
    content: '</p>';
    font-family: 'La Belle Aurore', cursive;
    color: #515152;
    font-size: 1.8rem;
    top: 0%;
    left: 28%;
  }
`;
