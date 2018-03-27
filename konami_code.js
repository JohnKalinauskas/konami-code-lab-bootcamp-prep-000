function init(e) {
  // Write your JavaScript code inside the init() function	+  let index = 0;
 let documentBody = document.querySelector('body');
} 	  
 documentBody.addEventListener('keydown', function(e) {
   const key = parseInt(e.location);
    
    if (key === code[index]) {
    index++;
    
    if (index === code.length) {
      alert("Hurray!");
 
      index = 0;
    }
  } else {
    index = 0;
 } });
}
init();


