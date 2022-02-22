# Actual Responsive Carousel

## Documentation

### Installation

##### npm:

`npm install actual-responsive-carousel`

##### yarn:

`yarn add actual-responsive-carousel`

### Example

```javascript
import React from "react";
import { Carousel, Slide } from "actual-responsive-carousel";

export default const SimpleSlider = () => {
  let props = {
    auto: true,
    height: 400,
    duration: 3000,
    breakpoints: {
      phone: 1,
      tab: 2,
      laptop: 3,
      largeScreen: 5,
      extraLargeScreen: 8,
    },
  };

  return (
    <Carousel {...props}>
      <Slide breakpoints={props.breakpoints}>
        <h3>1</h3>
      </Slide>
      <Slide breakpoints={props.breakpoints}>
        <h3>2</h3>
      </Slide>
      <Slide breakpoints={props.breakpoints}>
        <h3>3</h3>
      </Slide>
      <Slide breakpoints={props.breakpoints}>
        <h3>4</h3>
      </Slide>
      <Slide breakpoints={props.breakpoints}>
        <h3>5</h3>
      </Slide>
    </Carousel>
  );
}
```

### Props

| name        | description                                                                                                                                              | type                       | default value               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- | --------------------------- |
| height      | This will set the `height` of the carousel container.                                                                                                    | `Number` (in px)           | unset                       |
| width       | This will set the `width` of the carousel container.                                                                                                     | `Number` (in px)           | unset                       |
| auto        | This determines if the carousel slides would play without user interaction                                                                               | `Boolean`                  | `false`                     |
| noControls  | This determines if the controls of the carousel (the left and right arrow) will show. If set to false the user will not be able to control the carousel. | `Boolean`                  | `false`                     |
| leftButton  | This is the left arrow button of the carousel. Passing a `ReactNode` will replace the default button                                                     | `ReactNode`                | unset                       |
| rightButton | This is the right arrow button of the carousel. Passing a `ReactNode` will replace the default button.                                                   | `ReactNode`                | unset                       |
| duration    | This is the duration that will be spent on each slide if auto is set to true.                                                                            | `Number` (in milliseconds) | `5000`                      |
| infinite    | This determines if the carousel will scroll infinitely (when the carousel reaches the end, it goes back to the first slide and vice versa)               | `Boolean`                  | `true`                      |
| breakPoints | This is an object that allows you set the number of slides to be show at pre-specified break points. For more information [check here](#break-points).   | JavaScript object          | [check here](#break-points) |

#### Break points

The `breakpoints` props look like this:

```javascript
{
  phone: 1,               // max-width: 480px
  tab: 3,                 // max-width: 768px
  laptop: 4,              // max-width: 1399px
  largeScreen: 6,         // max-width: 1959px
  extraLargeScreen: 10,   // max-width: > 1960px
}
```

The default values for each break point are as follows:

```javascript
phone: 1;
tab: 2;
laptop: 3;
largeScreen: 5;
extraLargeScreen: 8;
```
