(function(window) {
    'use strict';
  
    var viewport = {
      'height': (window.innerHeight || document.documentElement.clientHeight),
      'width': (window.innerWidth || document.documentElement.clientWidth)
    };
  
    var isInViewport = function(el) {
      // Dimensions
      var dimensions = el.getBoundingClientRect();
  
      // Offset
      var verticalOffset = 0;
      var horizontalOffset = 0;
  
      // Vertical
      var isInViewVertically = ((dimensions.bottom - (dimensions.height * verticalOffset)) > 0) && ((dimensions.top + (dimensions.height * verticalOffset)) < viewport.height);
  
      // Horizontal
      var isInViewHorizontally = ((dimensions.right - (dimensions.width * horizontalOffset)) > 0) && ((dimensions.left + (dimensions.width * horizontalOffset)) < viewport.width);
  
      return (isInViewVertically && isInViewHorizontally);
    };
  
    var sections = document.querySelectorAll('.section');
  
    var setIndices = (function() {
      var l = sections.length;
      [].forEach.call(sections, function(section, i) {
        section.style.zIndex = (l - i);
      });
    })();
  
    var initNavigation = (function() {
      var sectionNav = document.querySelector('.section--nav');
      var l = sections.length;
      [].forEach.call(sections, function(section, i) {
        var a = document.createElement('a');
        a.setAttribute('href', '#' + section.id);
        sectionNav.appendChild(a);
      });
    })();
  
    var initParalax = (function(images) {
      if (typeof(images) === 'string') {
        images = document.querySelectorAll(images);
      } else if ('undefined' === typeof(images)) {
        images = document.querySelectorAll('[data-pl]');
      }
      [].forEach.call(images, function(image) {
        var parent = image.parentNode;
        var sibling = image.nextSibling;
        var container = document.createElement('div');
  
        if (container) {
          parent.insertBefore(container, sibling);
        } else {
          parent.appendChild(container);
        }
  
        image.classList.add('pl-block');
        container.setAttribute('class', 'pl--container');
  
        return container.appendChild(image);
      });
    })();
  
    var setImagesAsBackground = (function() {
      var images = document.querySelectorAll('.section__background img');
      [].forEach.call(images, function(image) {
        image.parentElement.style.backgroundImage = 'url(' + image.src + ')';
        // image.style.opacity = 0;
      });
    })();
  
    var animatedElements;
    var _triggerAnimation = function() {
      animatedElements = document.querySelectorAll('.fx:not(.fx-animated)');
      if (!animatedElements.length) {
        window.removeEventListener('scroll', _triggerAnimation, false);
      }
      [].forEach.call(animatedElements, function(el, i) {
        if (isInViewport(el)) {
          el.classList.add('fx-animated');
        }
      });
    };
  
    var initAnimationTrigger = function()  {
      window.addEventListener('scroll', _triggerAnimation, false);
      _triggerAnimation();
    };
  
    window.raf = (function() {
      return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60); // 60 FPS
        };
    })();
  
    initAnimationTrigger();
    // initNavigation();
    // setIndices();
    // setImagesAsBackground();
  
  })(window);;