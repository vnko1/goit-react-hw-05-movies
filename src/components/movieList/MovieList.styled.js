import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 20px;
`;

export const Item = styled.li`
  max-width: 250px;
  text-align: center;
`;

export const NavLink = styled(Link)`
  color: black;
  font-size: 16px;
  font-weight: 500;

  &:hover,
  &:focus {
    color: tomato;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 50px;
`;

const Canvas = styled(CircularProgressbar)``;

export const Progressbar = ({ value, text }) => {
  return (
    <Canvas
      value={value}
      text={text}
      background
      backgroundPadding={6}
      styles={buildStyles({
        textColor: 'black',
        pathColor: 'teal',
        trailColor: 'tomato',
        backgroundColor: 'silver',
        textSize: '30px',
      })}
    ></Canvas>
  );
};
