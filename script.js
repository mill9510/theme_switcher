"use strict";

const theme = document.querySelector("body");

const themeSelect = document.querySelector("#theme");

themeSelect.addEventListener("change", function () {
  const value = themeSelect.value;
  if (value === "light") {
    theme.dataset.theme = "light";
  } else if (value === "dark") {
    theme.dataset.theme = "dark";
  } else {
    theme.dataset.theme = "hawaii";
  }
});
