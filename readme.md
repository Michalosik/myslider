# MySlider

## Table of content
- [Description](#description)

- [How to install](#how-to-install)

- [How to use](#how-to-use)

- [License](#license)

## Description

MySlider is very simple responsive slider based on VanilaJS, CSS and HTML. Slider has few basic features like bulit-in arrows controls, dragcontrol or autochange. All functionalities can be disabled or enabled in mix option. 

## How to install 

Copy the main.js file to your js, copy css style (or scss) to your css style, and paste into your HTML Code this (feel free to add as many items as you want to):
```
<div class="slider">
        <div class="slider__box">
            <img class="slider__box-item" src="YOUR_IMG_SRC_HERE" alt="" />
            <img class="slider__box-item" src="YOUR_IMG_SRC_HERE" alt="" />
            <img class="slider__box-item" src="YOUR_IMG_SRC_HERE" alt="" />
        </div>
    </div>
```
You can manipulate with width and height using .slider max-height and max-width properties.

## How to use
### Options
All options below you can find in first lines of main.js
#### Enable Slider
To enable MySlider you have to change sliderON variable to true
```
let sliderON = true;
```
#### Draggable option
By changing this option to true you enable the possibility of changing slider items by draging it.

```
let draggable = true;
```
#### Auto change of items
Change this option if you want to items changes automatically.

```
let autoChange = true;
```
You can set the change time in miliseconds by changing value of sliderSpeed variable.
```
let sliderSpeed = 2000;
```
#### Arrow control 
If you want to set up basic arrow control, change this variable to true.
![Arrows](/assets/img/1.png)
```
let arrowControls = true;
```
## License
- ISC

- All graphics come from unsplash random source!
