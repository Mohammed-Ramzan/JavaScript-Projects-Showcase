const keysCheckBox = document.querySelector(".keys-checkbox");
 const pianoKeys = document.querySelectorAll(".piano-keys .key");
 const volumeSlider = document.querySelector(".volume-slider input");
let allKeys = [];
 let audio = new Audio("tunes/a.wav");  // by default, audio src is "a" tune
 const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; //passing audio src based on key pressed
    audio.play();  //playing audio
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked key element
    clickedKey.classList.add("active"); //adding active class to the clicked key element
    setTimeout(()=>{  // removing active class after 150 ms from clicked key element
        clickedKey.classList.remove("active");
    }, 150)
 }
 pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) // adding data-key value to allKeys array
    //calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));

 });

 const handleVolume = (e) => {
    audio.volume = e.target.value; //passing the range slider value as an audio volume
 }

 const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
 }

 const pressedKey = (e) => {
    //if the pressed key is in the all Keys array, only call the playTune function
    if(allKeys.includes(e.key)){
    playTune(e.key);
    }
 }
 keysCheckBox.addEventListener("click", showHideKeys);
 document.addEventListener("keydown", pressedKey);
 document.addEventListener("input", handleVolume);
