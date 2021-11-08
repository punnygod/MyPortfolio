import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const Timeline = styled.div`
  width: 70%;
  margin: 50px 60px;
  height: 4px;
  background-color: #ccc;
`;
export const TimelineProgress = styled.div`
  width: 0;
  height: 100%;
  background-color: orange;
`;
export const TimelineItems = styled.div`
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -12px;
  display: flex;
  justify-content: space-between;
`;
export const TimelineItem = styled.div`
  position: relative;
  &:before {
    content: '';
    width: 20px;
    height: 20px;
    background-color: #ccc;
    display: block;
    border-radius: 100%;
  }
  &.active:before {
    background-color: rgb(251, 213, 74);
  }
  &.active.timeline-content {
    color: #fff;
    background-color: rgb(251, 213, 74);
  }
  &.active.timeline-content:before {
    background-color: rgb(251, 213, 74);
  }
`;
export const TimelineContent = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ddd;
  width: 100px;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  &:before {
    content: '';
    width: 10px;
    height: 10px;
    background-color: #ddd;
    display: block;
    position: absolute;
    top: -8px;
    margin-left: -2px;
    left: 50%;
    transform: rotate(-45deg) translateX(-50%);
  }
`;
