const btns = document.querySelectorAll('.btn');
const colors = ["Red", "Blue", "Lime", "Yellow"];
const words = ["Blue", "Orange", "Apple", "Mango", "Earth", "Lemon", "Cat", "Dog", "Pink", "Banana", "Sky", "Yellow", "Black", "Moon", "Sea", "Tomato", "Leaf"];
const name = document.querySelector(".name");

// Function to set initial name and color
function setInitialNameAndColor() {
    const randomIndex = Math.floor(Math.random() * words.length);
    const val = words[randomIndex];
    const randomColor = Math.floor(Math.random() * colors.length);
    const arrCol = colors[randomColor];

    name.innerHTML = val;
    name.style.color = arrCol;
}

// Set initial name and color
setInitialNameAndColor();
let good = document.querySelector(".good");
let bad = document.querySelector(".bad");
let score = document.querySelector(".score");
let tap_res = document.querySelector(".tap-res");

// Add click event listeners to buttons
btns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const randomIndex = Math.floor(Math.random() * words.length);
        const val = words[randomIndex];
        const randomColor = Math.floor(Math.random() * colors.length);
        const arrCol = colors[randomColor];

        if (btn.value.toLowerCase() === name.style.color) {
            good.innerHTML++;
            tap_res.innerHTML = "Good"
            let audio = new Audio("assets/good.wav")
            audio.play()
        } else {
            let audio = new Audio("assets/error.wav")
            audio.play()
            bad.innerHTML++;
            tap_res.innerHTML = "Bad"
        }
        score.innerHTML = good.innerHTML - bad.innerHTML;
        name.innerHTML = val;
        name.style.color = arrCol;

    });
});

//When times up, It will display start button
let timer = document.querySelector('.timer');
setInterval(time, 1000)
function time() {

    if (timer.innerHTML == 0) {
        name.style.display = "none"
        let res = document.querySelector(".result").style.display = "block"
        btns.forEach((btn) => {
            btn.style.display = "none";
        })
        document.querySelector(".start").style.display = "block"
        document.querySelector(".start").addEventListener("click", function () {
            location.reload()
        })

        clearInterval(time)
    }
    else {
        timer.innerHTML--
    }

}
