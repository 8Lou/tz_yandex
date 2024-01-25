import React, { useRef } from 'react';
import styled from 'styled-components';
import mockData from '../assets/mockData.ts';

const SliderWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;
const SliderContent = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
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
    object-fit: cover;
  }

  div {
    padding: 10px;
  }
`;

const SlideControls = styled.div`
  position: absolute;
  bottom: -16px;
  // left: 5%;
  // transform: translateX(-50%);
  // top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  // padding: 0 20px;
  // box-sizing: border-box;
  left: 0;
  right: 0;
`;

const PrevSlideButton = styled.button`
  width: 5%; 
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;

const NextSlideButton = styled.button`
  width: 200px;
  height: 50px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
`;

const LeftArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 24" fill="#7479A1" width="28px" height="50px">
    <path d="M0 12l10-8v6h14v4h-14v6z" />
  </svg>
);

const RightArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 24" fill="#7479A1" width="28px" height="50px">
    <path d="M24 12l-10-8v6h-14v4h14v6z" />
  </svg>
);

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

  const sliderRef = useRef();

  const scrollToPrev = () => {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  const scrollToNext = () => {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <SliderWrapper>
      <SliderContent ref={sliderRef}>

        {mockData.map((item, index) => (
          <Slide key={item.id} clipPath={generateClipPath(index)}>
            <img src={item.img} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.date}</p>
            </div>
          </Slide>
        ))}
      </SliderContent>
      <SlideControls>
        <PrevSlideButton onClick={scrollToPrev}><LeftArrowIcon /></PrevSlideButton>
        <NextSlideButton onClick={scrollToNext}><RightArrowIcon /></NextSlideButton>
      </SlideControls>
    </SliderWrapper>
  );
};

export default Slider;
