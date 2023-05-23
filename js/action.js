

makebold("bold-button", "italic-button", "underline-button", "align-right-button", "align-left-button", "align-center-button", "align-justified-button", "color-box","number-box")

document.getElementById("writing").addEventListener("click",function(){
    let getTextBox = document.querySelector(".containerr");
    let buttomNone = document.getElementById("writing");
   getTextBox.classList.add("active")
    buttomNone.style.display ="none";

})