import React, {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
// import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const SlideStyled = styled.div`
  height: auto;
  min-width: ${(props) => {
    return 100 / props.size;
  }}%;
  min-height: 100%;
`;

const SliderContentStyled = styled.div`
  transform: translateX(-${(props) => props.transform}px);
  transition: transform ease-out 0.45s;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: none;
`;

const CarouselContainerStyled = styled.div`
  width: 100%;
  height: 100%;

  .hidden {
    display: none;
  }

  .secondary-container {
    width: 100%;
    height: 100%;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-wrap: none;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }

  .arrow {
    cursor: pointer;
    z-index: 10;
    position: absolute;
    margin-top: auto;
    margin-bottom: auto;

    @media (max-width: 450px) {
      opacity: 0.5;
    }
  }

  .custom-arrow-btn {
    cursor: pointer;
    padding-left: 14px;
    padding-right: 14px;
    padding-bottom: 6px;
    border-radius: 9999px;
    background-color: rgb(255, 255, 255);
    border: 1px solid grey;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .left-arrow {
    left: 0px;
  }

  .right-arrow {
    right: 0px;
  }

  .slider-content-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;

export const Carousel = ({
  height,
  width,
  children,
  breakpoints,
  auto,
  noControls,
  leftButton,
  rightButton,
  duration,
  infinite = true,
}) => {
  const [propsValues, setPropsValues] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [childrenSlides, setChildrenSlides] = useState([]);
  const [carouselSlideShow, setCarouselSlideShow] = useState(null);
  const [slideSize, setSlideSize] = useState(0);

  const [size, setSize] = useState([0, 0]);

  // let slideSize =
  //   size[0] >= 1960
  //     ? breakpoints?.extraLargeScreen ?? 8
  //     : size[0] >= 1440
  //     ? breakpoints?.largeScreen ?? 5
  //     : size[0] >= 769
  //     ? breakpoints?.laptop ?? 3
  //     : size[0] >= 481
  //     ? breakpoints?.tab ?? 2
  //     : breakpoints?.phone ?? 1;

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const slideShowDuration = duration ?? 5000;

  const forwardButtonRef = useRef(null);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  const setNumberOfSlides = (num) => setNumberOfChildren(num);
  const setChildrenSlidesFunc = (array) => setChildrenSlides(array);

  const clickNext = () => {
    if (forwardButtonRef?.current) {
      forwardButtonRef.current.click();
    }
  };

  const onNextClicked = () => {
    if (currentIndexRef.current != numberOfChildren - 1)
      setCurrentIndex(currentIndexRef.current + 1);
    else setCurrentIndex(slideSize - 1);

    if (carouselSlideShow) {
      clearInterval(carouselSlideShow);
    }

    if (auto) {
      setCarouselSlideShow(
        setInterval(() => {
          clickNext();
        }, slideShowDuration)
      );
    }
  };

  const onPrevClicked = () => {
    if (currentIndexRef.current != slideSize - 1)
      setCurrentIndex(currentIndexRef.current - 1);
    else setCurrentIndex(numberOfChildren - 1);

    if (carouselSlideShow) {
      clearInterval(carouselSlideShow);
    }

    if (auto) {
      setCarouselSlideShow(
        setInterval(() => {
          clickNext();
        }, slideShowDuration)
      );
    }
  };

  useEffect(() => {
    let properties = { ...propsValues };
    if (height) properties = { ...properties, height };
    if (width) properties = { ...properties, width };

    let slideSizeTemp =
      size[0] >= 1960
        ? breakpoints?.extraLargeScreen ?? 8
        : size[0] >= 1440
        ? breakpoints?.largeScreen ?? 5
        : size[0] >= 769
        ? breakpoints?.laptop ?? 3
        : size[0] >= 481
        ? breakpoints?.tab ?? 2
        : breakpoints?.phone ?? 1;

    setSlideSize(slideSizeTemp);
    setCurrentIndex(slideSizeTemp - 1);

    setPropsValues(properties);

    if (carouselSlideShow) {
      clearInterval(carouselSlideShow);
    }

    if (auto) {
      setCarouselSlideShow(
        setInterval(() => {
          clickNext();
        }, slideShowDuration)
      );
    }
  }, [height, width, breakpoints, auto, size]);

  return (
    <CarouselContainerStyled>
      <div className="secondary-container" style={{ ...propsValues }}>
        <span
          className={`arrow left-arrow ${
            currentIndex === slideSize - 1 && !infinite && "hidden"
          } ${numberOfChildren === slideSize && !infinite && "hidden"} ${
            noControls && !infinite && "hidden"
          }`}
          onClick={() => onPrevClicked()}
          title="Previous Slide"
        >
          {leftButton ? (
            leftButton
          ) : (
            <button className={`custom-arrow-btn`}>
              <span style={{ fontSize: 25 }}>&lsaquo;</span>
            </button>
          )}
        </span>
        <div className="slider-content-container">
          <SliderContent
            currentIndex={currentIndex}
            setNumberOfSlides={setNumberOfSlides}
            setChildrenSlidesFunc={setChildrenSlidesFunc}
            size={
              size[0] >= 1960
                ? breakpoints?.extraLargeScreen ?? 8
                : size[0] >= 1440
                ? breakpoints?.largeScreen ?? 5
                : size[0] >= 769
                ? breakpoints?.laptop ?? 3
                : size[0] >= 481
                ? breakpoints?.tab ?? 2
                : breakpoints?.phone ?? 1
            }
          >
            {children}
          </SliderContent>
        </div>
        <span
          className={`arrow right-arrow ${
            currentIndex === numberOfChildren - 1 && !infinite && "hidden"
          } ${numberOfChildren == slideSize && !infinite && "hidden"} ${
            noControls && !infinite && "hidden"
          }`}
          ref={forwardButtonRef}
          onClick={() => onNextClicked()}
          title="Next Slide"
        >
          {rightButton ? (
            rightButton
          ) : (
            <button className={`custom-arrow-btn`}>
              <span style={{ fontSize: 25 }}>&rsaquo;</span>
            </button>
          )}
        </span>
      </div>
    </CarouselContainerStyled>
  );
};

const SliderContent = ({
  children,
  setNumberOfSlides,
  currentIndex,
  setChildrenSlidesFunc,
  size,
}) => {
  const [innerWidth, setInnerWidth] = useState(0);
  const childrenCount = Children.count(children);

  const ref = useRef(null);

  const getWidth = () => {
    ref.current ? setInnerWidth(ref.current.offsetWidth) : setInnerWidth(0);
  };

  useEffect(() => {
    setNumberOfSlides(childrenCount);
    setChildrenSlidesFunc(children);
  }, []);

  useEffect(() => {
    getWidth();
    window.addEventListener("resize", getWidth);
    getWidth();

    return () => window.removeEventListener("resize", getWidth);
  }, []);

  return (
    <SliderContentStyled
      transform={() => {
        let transform = 0;

        if (currentIndex <= size - 1) transform = 0;
        else transform = (innerWidth / size) * (currentIndex - (size - 1));

        return transform.toString();
      }}
      size={size}
      ref={ref}
    >
      {children}
    </SliderContentStyled>
  );
};

export const Slide = ({ children, breakpoints }) => {
  const [size, setSize] = useState([0, 0]);

  const canUseDOM = typeof window !== "undefined";
  const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <SlideStyled
      className=""
      size={
        size[0] >= 1960
          ? breakpoints?.extraLargeScreen ?? 8
          : size[0] >= 1440
          ? breakpoints?.largeScreen ?? 5
          : size[0] >= 769
          ? breakpoints?.laptop ?? 3
          : size[0] >= 481
          ? breakpoints?.tab ?? 2
          : breakpoints?.phone ?? 1
      }
    >
      {children}
    </SlideStyled>
  );
};
