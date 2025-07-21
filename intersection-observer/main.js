// The IntersectionObserver API lets you asynchronously observe changes in the
//  intersection of a target element with an ancestor element or the viewport.
//  It's useful for:
// Lazy-loading images
// Infinite scroll
// Triggering animations
// Reporting ad viewability
// Analytics on elements visibility
// You can also pass an array: threshold: [0, 0.5, 1]. callback fires up each time

const options = {
  root: document.querySelector("#box"),
  rootMargin: 0,
  threshold: 1, // Callback fires when 50% or more of the element enters or exits the view.
};
const callback = (entries, obs) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      console.log("gurba is intersecting");
      const img = entry.target;
      img.alt = "loading";
      setTimeout(() => {
        img.src =
          "https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/bigstock-Closeup-Meowing-Ginger-Cat-On-97254212.jpg";
      }, 1000);
      setTimeout(() => {
        // img.src = img.dataset.src;
        obs.unobserve(img); // Stop observing after loading
      }, 5000);
    }
  });
};

const box = document.getElementById("box");
const gurba = document.getElementById("gurba");

const observer = new IntersectionObserver(callback);
observer.observe(gurba);
