// This is the function that will be called when the user clicks the convert button
function convert() {
  // Get the value that the user entered in the input field
  var inputValue = document.getElementById("inputValue").value;

  // Get the conversion type that the user selected in the dropdown
  var conversionType = document.getElementById("conversionType").value;

  // Create a variable to hold the result
  var result;

  // Check which conversion type was selected and calculate the result accordingly
  if (conversionType == "kmToMiles") {
    result = inputValue * 0.62137;
  } else if (conversionType == "milesToKm") {
    result = inputValue * 1.60934;
  }

  // Display the result
  document.getElementById("result").innerHTML = result;
}
