// Controls
let sliderON = true;
let draggable = true;
let autoChange = false;
let arrowControls = true;
let sliderSpeed = 2000;


if (sliderON) {

	//Slider Elements
	const slider = document.querySelector('.slider')
	const box = document.querySelector('.slider__box')
	const imgs = document.querySelectorAll('.slider__box-item')

	//global index

	let i = 0;
	let transformValue;
	//Main Functionality

	const changeImg = () => {
		const sliderCompStyle = window.getComputedStyle(slider);
		const actualWidth = sliderCompStyle.getPropertyValue('width');
		const sliderWidth = parseInt(actualWidth, 10);

		if (i < 0) {
			i = imgs.length - 1;
		} else if (i > imgs.length - 1) {
			i = 0;
		}

		transformValue = -i * sliderWidth;
		box.style.transform = `translateX(${transformValue}px)`;
	}

	//Dragable

	if (draggable) {

		//variables

		let drag = false;
		let startPosition;
		let position;
		let difference;

		//set X axio position
		const dragItem = (e) => {
			drag = true;
			startPosition = e.clientX;
		}

		const moveItem = (e) => {
			if (drag) {
				position = e.clientX;
				difference = position - startPosition;
				box.style.transform = `translateX(${transformValue + (difference)}px)`
			}
		}

		const releaseItem = () => {
			drag = false;
			if (difference < 200) {
				i++;
				changeImg();
			} else if (difference > -200) {
				i--;
				changeImg();
			}

		}
		slider.addEventListener('mousedown', (e) => {
			e.preventDefault();
			dragItem(e);
		})

		//register mouse move

		slider.addEventListener('mousemove', (e) => {
			if (drag) {
				e.preventDefault();
				moveItem(e);
			}
		})
		slider.addEventListener('touchmove', (e) => {
			if (drag) {
				moveItem(e);
			}
		})

		//register mouse release 

		window.addEventListener('mouseup', releaseItem)
		window.addEventListener('touchend', releaseItem)
	}
	//Autochange

	//Autochange functions
	if (autoChange) {
		const intervalChange = () => {
			i++;
			changeImg();
		};

		let startInterval = setInterval(intervalChange, sliderSpeed)

		this.intervalChangeReset = () => {
			changeImg();
			clearInterval(startInterval);
			startInterval = setInterval(intervalChange, sliderSpeed)
		}
	}

	//Arrow Controls

	if (arrowControls) {

		//adding to DOM

		const arrowsBox = document.createElement('div');
		arrowsBox.classList.add('slider-controls');
		arrowsBox.innerHTML = `<button class="slider__controls-btn slider__controls-btn--left"><span aria-hidden="true">&lt;</span><span
		class="sr-only">Next</span></button>
		<button class="slider__controls-btn slider__controls-btn--right"><span aria-hidden="true">&gt;</span><span
		class="sr-only">Previous</span></button>`
		slider.appendChild(arrowsBox);

		//control elements 

		const prevBtn = document.querySelector('.slider__controls-btn--left');
		const nextBtn = document.querySelector('.slider__controls-btn--right');

		//controls function

		const next = () => {
			i++;
			changeImg();
			if (autoChange) {
				intervalChangeReset();
			};
		}
		const prev = () => {
			i--;
			changeImg();
			if (autoChange) {
				intervalChangeReset();
			};

		}

		//controls Event Lsiteners

		prevBtn.addEventListener('click', prev);
		nextBtn.addEventListener('click', next);
	}

}
