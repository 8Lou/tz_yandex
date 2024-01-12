import React from 'react';
import styled from 'styled-components';
import mockData from "../assets/mockData.ts";


const Slider = () => {
  return (
    <SliderWrapper>
      {mockData.map((item, index) => (
        <Slide key={index}>
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


// doubleSize = { item.title.length > 35 } >
// { item.title }

const SliderWrapper = styled.div`
  display: flex;
  overflow-x: auto;
`;

const Slide = styled.div`
  min-width: 300px;
  margin: 0 10px; 
  overflow: hidden; 

  img {
    width: 100%; 
    height: auto;
    border-radius: 0 50%; 
  }

div {
    padding: 10px;
  }
`;

export default Slider;