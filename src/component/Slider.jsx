import React from 'react';
import styled from 'styled-components';
import mockData from '../assets/mockData.ts';

const SliderWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

const Slide = styled.div`
  min-width: 300px;
  margin: 3px;
  overflow: hidden;
  position: relative;
  // border-radius: 20px;
  background-color: #f2f2f2;

  img {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    object-fit: cover;
    clip-path: ${props => props.clipPath};
  }

  div {
    padding: 10px;
  }
`;

const Slider = () => {
  const generateClipPath = (index) => {
    if (index % 3 === 0) {
      return "circle(90px at 50% 50%)"; //круг
    } else if (index % 3 === 1) {
      return "border-radius: 0 50%; border-radius: 50% 0;"; //лепесток
    } else {
      return "ellipse(50% 50% at 50% 50%)"; //овал
    }
  };

  return (
    <SliderWrapper>
      {mockData.map((item, index) => (
        <Slide key={item.id} clipPath={generateClipPath(index)}>
          <img src={item.img} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        </Slide>
      ))}
    </SliderWrapper>
  );
};

export default Slider;
