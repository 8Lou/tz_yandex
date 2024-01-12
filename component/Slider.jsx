import React from 'react';
import styled from 'styled-components';
import mockData from "./mockData";


const Slider = () => {
    return (
        <SliderWrapper>
            {mockData.map((item, index) => (
                <Slide key={index} doubleSize={item.title.length > 35}>
                    {item.title}
                </Slide>
            ))}
        </SliderWrapper>
    );
};

const SliderWrapper = styled.div`
  /* Стили для обертки слайдера */
`;

const Slide = styled.div`
  width: ${props => (props.doubleSize ? "200px" : "100px")};
  height: ${props => (props.doubleSize ? "200px" : "100px")};
  border-radius: ${props => (props.doubleSize ? "50%" : "5px")};
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  &:nth-child(odd) {
    background-color: lightgreen;
  }
`;