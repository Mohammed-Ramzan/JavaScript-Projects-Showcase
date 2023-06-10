let text = document.getElementById("textarea");
text.addEventListener("input", function (){
  let all = this.value;
  document.getElementById("char").innerHTML= all.length;
  
  all = all.trim();
  let words = all.split(" ");
  let fil = words.filter(function(sub){
    return sub != "";
  })
  document.getElementById("words").innerHTML = fil.length;
});