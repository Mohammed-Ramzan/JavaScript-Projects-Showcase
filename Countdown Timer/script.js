let doc = document.getElementById("cont");
let end = "01 June 2024 12:05 AM";
let input = document.getElementsByTagName("input");
function all() {
    let date = new Date(end);
    let newDate = new Date();
    let deff = (date - newDate) / 1000;
    if (deff < 0) return;
    input[0].value = Math.floor(deff / 86400);
    input[1].value = Math.floor(deff / 3600 % 24);
    input[2].value = Math.floor(deff / 60 % 60);
    input[3].value = Math.floor(deff) % 60;
}
setInterval("all()", 1000);
