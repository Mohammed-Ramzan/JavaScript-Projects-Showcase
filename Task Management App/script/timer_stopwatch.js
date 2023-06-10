
// timer js start
let allInputs = document.querySelectorAll(".inp");
let allNumbers = document.querySelectorAll(".value");
let del = document.querySelector(".fa-delete-left");

let inputValue = "";
let clickCount = 0;

let x = [0, 1, 2];

allInputs.forEach(function (i, index, arr) {
  allNumbers.forEach(function (number) {
    number.addEventListener("click", function () {
      if (i.classList.contains("active") && clickCount <= 2) {
        if (clickCount === 2) {
          clickCount = 0;
          inputValue = "";
          inputValue += this.value;
          clickCount++
          i.innerText = parseInt(inputValue);
        }
        else {
          inputValue += this.value;
          clickCount++
          i.innerText = parseInt(inputValue);
        }
        if (i.innerText >= 60) {
          i.innerText = 59;
        }
        if (i.innerText.length === 1) {
          i.innerText = `0${parseInt(inputValue)}`;
        }
      }
    })
  })
  del.addEventListener("click", function () {
    if (i.classList.contains("active")) {
      i.innerText = "00";
      console.log(i)
    }
  })
})
allInputs.forEach(function (input, index) {
  input.addEventListener("click", function () {
    removeActive()
    this.classList.add("active")
    console.log(index)
  })
})

function removeActive() {
  allInputs.forEach(function (input) {
    input.classList.remove("active")
  })
}
let stop = document.querySelector(".timer-stop");
let play = document.querySelector(".timer-play-icon");

stop.style.display = "none"

play.addEventListener("click", function () {
  document.querySelector(".timer-stop-icon").style.display = "block"
  this.style.display = "none";
  stop.style.display = "block"
  document.querySelector(".inputs").style.marginTop = "120px";
  document.querySelector(".buttons").style.display = "none";
  startTimer()
})

document.querySelector(".timer-stop-icon").addEventListener("click", function () {
  document.querySelector(".timer-stop-icon").style.display = "none"
  play.style.display = "block"
  
  clearInterval(timer)
})

document.querySelector(".timer-stop .fa-trash").addEventListener("click", function(){
  clearInterval(timer)
  document.querySelector(".inputs").style.marginTop = "0";
  document.querySelector(".buttons").style.display = "grid";
  play.style.display = "block"
  stop.style.display = "none"
  allInputs.forEach(function(input){
    input.innerText = "00";
})
})
var timer;
var sec;
var min;
var hr;
function startTimer() {
  // Get user input for timer duration
    sec = document.getElementById("sec");
    min = document.getElementById("min");
    hr = document.getElementById("hr");

  timer = setInterval(function () {

    if (sec.innerText == 0) {
      sec.innerText = 59;
      if (min.innerText == 0) {

        if (hr.innerText == 0) {
          hr.innerText = 0;
          min.innerText = 0;
        } else {
          min.innerText = 59;
          hr.innerText--;
        }
      }
      else {
        min.innerText--;
      }
    }
    else {
      sec.innerText--;
    }

    if (min.innerText == 0 && hr.innerText == 0 && sec.innerText == 0) {
      clearInterval(timer)
      play.style.display = "block"
      document.querySelector(".timer-stop-icon").style.display = "none"
      console.log("Time's Up")
    }

    if (sec.innerText < 10) {
      sec.innerText = `0${parseInt(sec.innerText)}`;
    }
    if (min.innerText < 10) {
      min.innerText = `0${parseInt(min.innerText)}`;
    }
    if (hr.innerText < 10) {
      hr.innerText = `0${parseInt(hr.innerText)}`;
    }
  }, 1000);
}
document.querySelector(".one-add").addEventListener("click", function () {
    if (min.innerText < 9) {
      min.innerText = `0${parseInt(min.innerText) + 1}`;
    }
    else if (min.innerText >= 59) {
      hr.innerText++;
      min.innerText = 0;
    }
    else {
      min.innerText++
    }
  })


  // Stopwatch Js Start
  let stp_milliseconds = 0;
      let stp_seconds = 0;
      let stp_timer;

      function startStopwatch() {
        document.querySelector(".stopwatch-play").style.display = "none"
        document.querySelector(".stopwatch-stop").style.display = "block"
        document.querySelector("#range").classList.add("range-add")
        stp_timer = setInterval(() => {
          stp_milliseconds += 10;
          if (stp_milliseconds === 100) {
            stp_milliseconds = 0;
            stp_seconds++;
          }
          document.getElementById("stopwatch").innerText = `${stp_seconds
            .toString()
            .padStart(2, "0")} : ${stp_milliseconds.toString().padStart(2, "0")}`;
        }, 100);
      }

      function stopTimer() {
        document.querySelector(".stopwatch-stop").style.display = "none"
        document.querySelector(".stopwatch-play").style.display = "block"
        clearInterval(stp_timer);
        document.querySelector("#range").classList.add("range-add")
      }

      function reset(){
        stopTimer()
        stp_milliseconds = 0;
        stp_seconds = 0;
        document.getElementById("stopwatch").innerText =  `${stp_seconds
            .toString()
            .padStart(2, "0")} : ${stp_milliseconds.toString().padStart(2, "0")}`;
            document.querySelector("#range").classList.add("range-add")
      }

      document.querySelector("#range").addEventListener("input", function(){
        document.querySelector("#stopwatch").style.fontSize = `${this.value}px`;
        console.log(this.value)
      })
      document.querySelector(".fa-maximize").addEventListener("click", function(){
        document.querySelector("#range").classList.toggle("range-add")
      })

      document.querySelector(".stopwatch-back").addEventListener("click", function () {
        home_data.style.display = "none";
      add_icon.style.display = "none";
      stopwatch.style.display = "block";
        document.querySelector(".stopwatch-container").style.display = "none";
    })
