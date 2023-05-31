'use strict'; // use strict mode JS

// heading/title has "sticky" behavior when scrolling down or up
// console.log('Hello');

// event when HTML fires up to start - Add a function to this HTML render
document.addEventListener('DOMContentLoaded', function () {
  // Grab the header/title component
  const header = document.getElementById('titleHeading');

  //get the distance between the top of the header element and the top of its offset parent - Storing this variable to compare with current scroll position
  const origOffsetY = header.offsetTop;

  // scroll function

  function scroll() {
    // comparing window current scroll position (window.pageYOffset) with original offset value of the header (origOffsetY) - If current scroll is greater than or equal to original scroll, add sticky class to header element, which makes header static on top of page, else if current scroll is less, remove sticky, so the header follows you when you scroll
    window.pageYOffset >= origOffsetY
      ? header.classList.add('sticky')
      : header.classList.remove('sticky');
  }

  // attach callback scroll function to scroll event
  document.addEventListener('scroll', scroll);
});

// End of JS document
