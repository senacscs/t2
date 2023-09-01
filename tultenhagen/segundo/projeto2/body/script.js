class Loader {

  constructor() {

    this.container = document.querySelector('#loader');
    this.grey = this.container.querySelector('.grey');
    this.white = this.container.querySelector('.white');
    this.textWrap = this.container.querySelector('.text-wrap');
    this.text = this.container.querySelector('.text');
    this.dot = this.text.querySelector('span');
    this.animateDot();

  }

  animateDot() {

    this.dotTween = TweenMax.fromTo(this.dot, 0.5, {
      y: 0 },
    {
      y: -10,
      ease: 'Power0.easeOut',
      yoyo: true,
      yoyoEase: 'Bounce.easeOut',
      repeat: -1,
      repeatDelay: 0.3 });


  }

  hide() {

    let tl = new TimelineMax({
      delay: 0.5,
      onComplete: () => {
        this.dotTween.kill();
        this.container.style.display = 'none';
      } });


    tl.to(this.text, 0.8, {
      y: 100,
      ease: 'Expo.easeIn' },
    0).

    to(this.grey, 1, {
      yPercent: 100,
      ease: 'Expo.easeOut' },
    0.8).

    to(this.white, 1, {
      yPercent: 100,
      ease: 'Expo.easeOut' },
    1).

    fromTo('#slider-canvas', 1, {
      scale: 1.1 },
    {
      scale: 1,
      ease: 'Expo.easeOut' },
    1);

  }}



class Slider {

  constructor(canvas, loader) {

    this.canvas = canvas;
    this.loader = loader;

    this.setOptions();
    this.createApp();
    this.loadImages();

  }

  setOptions() {

    PIXI.utils.skipHello(); // turn off console branding
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.LINEAR;
    PIXI.settings.PRECISION_FRAGMENT = PIXI.PRECISION.HIGH;

    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
    this.dpr = window.devicePixelRatio && window.devicePixelRatio >= 2 ? 2 : 1;
    this.thumbsVisible = false;
    this.animating = false;

    this.dom = {
      titleNext: document.querySelector('.slide-title .next'),
      titleCurrent: document.querySelector('.slide-title .current'),
      descriptionNext: document.querySelector('.description .next'),
      descriptionCurrent: document.querySelector('.description .current'),
      countNext: document.querySelector('.slide-count .next'),
      countCurrent: document.querySelector('.slide-count .current') };


    this.slideData = {
      0: {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j110.jpg',
        title: 'J110',
        description: `With the comfort of a lounge chair and the functionality of a dining chair, HAY’s reproduction of Poul M. Voulter’s J110 offers equal measures of strong aesthetics and practicality. Long rods at the back and curved armrests create an inviting expression. Made in lacquered solid beech and available in a variety of colours.` },

      1: {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j104.jpg',
        title: 'J104',
        description: `Jørgen Bækmark’s J104 chair was designed as a cross between a dining chair and an easy chair, HAY’s reproduction of this classic is crafted in solid beech with a variety of soaped or lacquered finishes.` },

      2: {
        image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/j42.jpg',
        title: 'J42',
        description: `HAY’s reproduction of Børge Mogensen’s classic J42 chair clearly reflects his design philosophy. Precise proportions with simple horizontal and vertical lines are used to construct a curved spindled backrest and angular armrests. With a broad plywood seat and frame in solid oak or beech, the design has a timeless quality that is built to provide lasting comfort.` } };



  }

  createApp() {

    this.app = new PIXI.Application(this.canvasWidth, this.canvasHeight, {
      view: this.canvas,
      width: this.canvasWidth,
      height: this.canvasHeight,
      transparent: true,
      resolution: this.dpr,
      autoResize: true });


  }

  loadImages() {

    Object.keys(this.slideData).forEach(key => {
      PIXI.loader.add(key, this.slideData[key].image);
    });

    PIXI.loader.load((l, images) => {

      this.images = images;
      this.createSlider();
      this.loader.hide();

    });

  }

  createSlider() {

    this.slider = new PIXI.Container();
    this.slider.width = this.app.screen.width;
    this.slider.height = this.app.screen.height;
    this.app.stage.addChild(this.slider);

    this.clipRect = new PIXI.Rectangle(0, 0, this.app.screen.width, this.app.screen.height);
    this.slider.filterArea = this.clipRect;

    this.app.stage.interactive = true;
    this.app.stage.on('pointerdown', () => {
      this.thumbsVisible ? this.hideThumbs() : this.showThumbs();
    });

    this.addSlides();
    this.createDisplacementFilter();
    this.buttonEvents();

  }

  addSlides() {

    this.slides = {
      activeIndex: 0,
      count: 0 };


    let i = 0;

    Object.keys(this.images).forEach(key => {

      let slide = new PIXI.Sprite(this.images[key].texture);
      slide.width = this.app.screen.width;
      slide.height = this.app.screen.height;
      slide.y = i === 0 ? 0 : -this.app.screen.height;

      this.slides[i] = slide;
      this.slider.addChild(slide);

      i++;
      this.slides.count++;

    });

    document.querySelector('.slide-count .total').textContent = `0${this.slides.count}`;
    document.querySelector('.slide-title .code').style.width = this.dom.titleCurrent.scrollWidth + 6 + 'px';

    for (let i = 0; i < this.slides.count; i++) {
      document.querySelector('.dots').innerHTML += '<span></span>';
    }

    document.querySelector('.dots > span:nth-child(1)').classList.add('active');

  }

  nextSlide() {

    if (this.nextBtn.getAttribute('disabled') || this.thumbsVisible || this.animating) return false;

    this.prevBtn.removeAttribute('disabled');

    if (this.slides.activeIndex + 2 >= this.slides.count) {
      this.nextBtn.setAttribute('disabled', 'disabled');
    }

    let nextSlideData = this.slideData[this.slides.activeIndex + 1];
    this.dom.titleNext.textContent = nextSlideData.title;
    this.dom.descriptionNext.textContent = nextSlideData.description;
    this.dom.countNext.textContent = '0' + (this.slides.activeIndex + 2);

    this.updateDot(true);

    let tl = new TimelineMax({
      onStart: () => {
        this.animating = true;
      },
      onComplete: () => {
        this.slides.activeIndex++;
        this.resetText();
        this.animating = false;
      } });


    tl.to(this.slides[this.slides.activeIndex], 2, {
      y: this.app.screen.height,
      ease: 'Expo.easeInOut' },
    0).

    fromTo(this.slides[this.slides.activeIndex + 1], 2, {
      y: -this.app.screen.height },
    {
      y: 0,
      ease: 'Expo.easeInOut' },
    0).

    to(this.dispFilter.scale, 1, {
      x: 10,
      y: 10,
      ease: 'Power2.easeInOut' },
    0).

    to(this.dispFilter.scale, 1, {
      x: 0,
      y: 0,
      ease: 'Power2.easeInOut' },
    1).

    set('.slide-count .next', { top: '-100%' }, 0).

    fromTo(['.slide-count .current', '.slide-count .next'], 2, {
      yPercent: 0 },
    {
      yPercent: 100,
      ease: 'Expo.easeInOut' },
    0).

    set('.slide-title .next', { top: '-100%' }, 0).

    fromTo(['.slide-title .current', '.slide-title .next'], 2, {
      yPercent: 0 },
    {
      yPercent: 100,
      ease: 'Expo.easeInOut' },
    0).

    to('.slide-title .code', 2, {
      width: this.dom.titleNext.scrollWidth + 6,
      ease: 'Expo.easeInOut' },
    0).

    fromTo('.description .current', 2, {
      y: 0,
      autoAlpha: 1 },
    {
      y: 40,
      autoAlpha: 0,
      ease: 'Expo.easeInOut' },
    0).

    fromTo('.description .next', 2, {
      y: -40,
      autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      ease: 'Expo.easeInOut' },
    0);

  }

  prevSlide() {

    if (this.prevBtn.getAttribute('disabled') || this.thumbsVisible || this.animating) return false;

    this.nextBtn.removeAttribute('disabled');

    if (this.slides.activeIndex - 2 < 0) {
      this.prevBtn.setAttribute('disabled', 'disabled');
    }

    let nextSlideData = this.slideData[this.slides.activeIndex - 1];
    this.dom.titleNext.textContent = nextSlideData.title;
    this.dom.descriptionNext.textContent = nextSlideData.description;
    this.dom.countNext.textContent = '0' + this.slides.activeIndex;

    this.updateDot(false);

    let tl = new TimelineMax({
      onStart: () => {
        this.animating = true;
      },
      onComplete: () => {
        this.slides.activeIndex--;
        this.resetText();
        this.animating = false;
      } });


    tl.to(this.slides[this.slides.activeIndex], 2, {
      y: -this.app.screen.height,
      ease: 'Expo.easeInOut' },
    0).

    fromTo(this.slides[this.slides.activeIndex - 1], 2, {
      y: this.app.screen.height },
    {
      y: 0,
      ease: 'Expo.easeInOut' },
    0).

    to(this.dispFilter.scale, 1, {
      x: 10,
      y: 10,
      ease: 'Power2.easeInOut' },
    0).

    to(this.dispFilter.scale, 1, {
      x: 0,
      y: 0,
      ease: 'Power2.easeInOut' },
    1).

    set('.slide-count .next', { top: '100%' }, 0).

    fromTo(['.slide-count .current', '.slide-count .next'], 2, {
      yPercent: 0 },
    {
      yPercent: -100,
      ease: 'Expo.easeInOut' },
    0).

    set('.slide-title .next', { top: '100%' }, 0).

    fromTo(['.slide-title .current', '.slide-title .next'], 2, {
      yPercent: 0 },
    {
      yPercent: -100,
      ease: 'Expo.easeInOut' },
    0).

    to('.slide-title .code', 2, {
      width: this.dom.titleNext.scrollWidth + 6,
      ease: 'Expo.easeInOut' },
    0).

    fromTo('.description .current', 2, {
      y: 0,
      autoAlpha: 1 },
    {
      y: -40,
      autoAlpha: 0,
      ease: 'Expo.easeInOut' },
    0).

    fromTo('.description .next', 2, {
      y: 40,
      autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      ease: 'Expo.easeInOut' },
    0);

  }

  resetText() {

    this.dom.titleCurrent.textContent = this.dom.titleNext.textContent;
    this.dom.titleCurrent.removeAttribute('style');
    this.dom.titleNext.textContent = '';
    this.dom.titleNext.removeAttribute('style');

    this.dom.descriptionCurrent.textContent = this.dom.descriptionNext.textContent;
    this.dom.descriptionCurrent.removeAttribute('style');
    this.dom.descriptionNext.textContent = '';
    this.dom.descriptionNext.removeAttribute('style');

    this.dom.countCurrent.textContent = this.dom.countNext.textContent;
    this.dom.countCurrent.removeAttribute('style');
    this.dom.countNext.textContent = '';
    this.dom.countNext.removeAttribute('style');

  }

  createDisplacementFilter() {

    this.dispSprite = PIXI.Sprite.fromImage('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123024/disp5.jpg');
    this.dispSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
    this.dispSprite.skew.x = 1;
    this.dispSprite.skew.y = -1;
    this.dispSprite.position.y = 380;
    this.dispSprite.scale.y = 1.8;
    this.dispSprite.scale.x = 1.8;
    this.app.stage.addChild(this.dispSprite);

    this.dispFilter = new PIXI.filters.DisplacementFilter(this.dispSprite, 0);

    this.slider.filters = [this.dispFilter];

  }

  buttonEvents() {

    this.prevBtn = document.querySelector('.slide-nav [data-direction="prev"]');
    this.nextBtn = document.querySelector('.slide-nav [data-direction="next"]');
    this.prevBtn.addEventListener('click', this.prevSlide.bind(this));
    this.nextBtn.addEventListener('click', this.nextSlide.bind(this));

    document.onkeydown = e => {
      e = e || window.event;
      if (e.keyCode == 38) {
        this.prevSlide.call(this);
      } else
      if (e.keyCode == 40) {
        this.nextSlide.call(this);
      }
    };

  }

  showThumbs() {

    this.thumbsVisible = true;
    this.canvas.classList.add('thumbs-visible');

    this.thumbsTl = new TimelineMax();

    this.thumbsTl.

    fromTo(this.clipRect, 3, {
      y: 0 },
    {
      y: this.app.screen.height + 50,
      ease: 'Expo.easeInOut' },
    0).

    fromTo(this.dispFilter.scale, 2, {
      x: 0,
      y: 0 },
    {
      x: 10,
      y: 10,
      ease: 'Expo.easeInOut' },
    0).

    fromTo(this.dispSprite, 3, {
      y: this.app.screen.height },
    {
      y: 0,
      ease: 'Power2.easeInOut' },
    0.5).

    staggerFromTo('.thumbs > div', 3, {
      height: 0 },
    {
      height: '47%',
      ease: 'Expo.easeInOut' },
    0.1, 0.2).

    staggerFromTo('.thumbs > div img', 3, {
      scale: 1.4 },
    {
      scale: 1,
      ease: 'Expo.easeInOut' },
    0.1, 0.2).

    to('.expand .square', 2, {
      autoAlpha: 1,
      ease: 'Expo.easeInOut' },
    1).

    to('.expand .grid', 2, {
      autoAlpha: 0,
      ease: 'Expo.easeInOut' },
    1);

  }

  hideThumbs() {

    this.thumbsVisible = false;
    this.canvas.classList.remove('thumbs-visible');

    this.thumbsTl.reverse();

  }

  updateDot(right) {

    let newActive = right ? this.slides.activeIndex + 2 : this.slides.activeIndex;
    document.querySelector('.dots > span.active').classList.remove('active');
    document.querySelector(`.dots > span:nth-child(${newActive})`).classList.add('active');

  }}



let loader = new Loader();
let slider = new Slider(document.getElementById('slider-canvas'), loader);