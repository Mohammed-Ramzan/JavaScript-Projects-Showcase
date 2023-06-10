  let start = 0;
 function cont(x){
  clearInterval(interval);
    start = start + x;
    slides(start)
  }
  
    function slides(num) {
      let slides = document.getElementsByClassName("slide");
      if(num == slides.length){
        start = 0;
        num = 0;
      }
      if(num < 0){
        start = slides.length-1;
          num = slides.length-1;
      }
      for(let slide of slides){
        slide.style.display= "none";
      }
      slides[num].style.display = "block";
      
    }
    slides(start)
    function count(){
      start++;
      slides(start)
    }
  let interval = setInterval(count, 2000);