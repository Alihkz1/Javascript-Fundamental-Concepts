// It's a browser API that allows you to asynchronously
//  observe changes in the intersection (visibility) of a target element
// with an ancestor element or the viewport.

// IntersectionObserver is much more
// efficient than using scroll or resize events for visibility checks.

const targetElement = document.getElementById("lazyImage");

callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) console.log("target element is intersecting");
  });
};

const observer = new IntersectionObserver(callback, {
  root: null, // root: The element used as the viewport. Use null for the browser viewport.
  threshold: 0.5, // trigger when 50% visible
});

observer.observe(targetElement);

// stop observing
observer.unobserve(targetElement); // solution 1
observer.disconnect(); // solution 2
