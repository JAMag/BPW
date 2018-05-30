// var element = document.getElementsByClassName("navigation-link");

// element.addEventListener("click", close);
// function close() {
//   document.getElementById("navi-toggle").checked=false;
// }

// Firstly, your are using getElementByClassName , but the method is getElementsByClassName  (making the fix will resolve the type error that you are receiving in your console).

// Now, I should note that you are going to want to add a 'click' handler for each navigation link.  This way, whichever link you click, the navigation will toggle like you expect.

// Here is what you need to do (without refactoring your code too much) ...

var elements = document.getElementsByClassName("navigation__link");
var navToggle = document.getElementById('navi-toggle')
 
// Now, getElementsByClassName returns a NodeList.  NodeLists, while array-like,
// are not arrays so in order to use the forEach method, we need to 'convert' the
// Nodelist to a true array like so....
Array.prototype.slice.call(elements)
  .forEach(function (el) {
      el.addEventListener('click', function (e) {
          navToggle.checked = false
          console.log("click");
      })
  })




