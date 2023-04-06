function hello() {
    alert("Hello");
  }
  window.onload = function() {
    let btn = document.getElementById("myButton");
    btn.onclick = hello;
  };
  // alternatively i thout this might help
   /*if (typeof window !== 'undefined') {
    //here `window` is available
  } */

  window.onload = function() {
    let btn = document.getElementById("myButton");
    btn.onclick = function() {
      console.log("Hello");
    }; 
  };

  //for the calculater
  window.onload = function() {
    let c = document.getElementById("celsius");
    let f = document.getElementById("fahr");
    c.oninput = function() {
        f.value = (c.value * 9/5) + 32;
    };
    f.oninput = function() {
        c.value = (f.value - 32) * 5/9;
    }
  };