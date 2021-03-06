import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { Carousel, Slide } from "../components";

const stories = storiesOf("App test", module);

stories.add("App", () => {
  // const [size, setSize] = useState([0, 0]);

  // const canUseDOM = typeof window !== "undefined";
  // const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

  // useIsomorphicLayoutEffect(() => {
  //   function updateSize() {
  //     setSize([window.innerWidth, window.innerHeight]);
  //   }

  //   window.addEventListener("resize", updateSize);
  //   updateSize();
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);

  const breakpoints = {
    phone: 1,
    tab: 2,
    laptop: 3,
    largeScreen: 5,
    extraLargeScreen: 8,
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <Carousel breakpoints={breakpoints} duration={3000} height={150}>
        <Slide breakpoints={breakpoints}>
          <p>Hello</p>
        </Slide>
        <Slide breakpoints={breakpoints}>
          <p>Hi there</p>
        </Slide>
        <Slide breakpoints={breakpoints}>
          <p>How are you doing</p>
        </Slide>
        <Slide breakpoints={breakpoints}>
          <p>I miss you</p>
        </Slide>
        <Slide breakpoints={breakpoints}>
          <p>Okay, bye now</p>
        </Slide>
      </Carousel>
      <p>Current count is {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </>
  );
});
