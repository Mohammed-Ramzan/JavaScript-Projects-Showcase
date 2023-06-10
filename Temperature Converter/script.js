    let cel = document.querySelector(".cel");
    let fah = document.querySelector(".fah");

    // Converting celsius into fahrenhiet
    cel.addEventListener("input", function(){
      let celsius = this.value;
      fah.value = (celsius * 9/5) + 32;
    })

        // Converting fahrenhiet into celsius 
    fah.addEventListener("input", function(){
      let fahrenhiet = this.value;
      cel.value = (fahrenhiet - 32) * 5/9;
    })
