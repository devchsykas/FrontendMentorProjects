/* This JavaScript code is adding an event listener to an HTML element with the id "switch". When this
element is clicked, the function inside the event listener is executed. This function toggles the
class "black" on the body element of the HTML document. This means that if the "black" class is not
present on the body element, it will be added, and if it is already present, it will be removed.
This can be used to toggle a dark mode theme on and off, for example. */
document.getElementById("switch").addEventListener("click", function () {
  document.body.classList.toggle("black");
});
