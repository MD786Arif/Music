var a = document.querySelectorAll(".drum").length;
for (i = 0; i < a; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", clickHandle);
}

function clickHandle() {
  // var audio = new Audio('/sounds/tom-1.mp3');
  // audio.play();
  // this.style.color="white";

  var button_html = this.innerHTML;
  switch (button_html) {
    case "w":
      var audio = new Audio("/sounds/crash.mp3");
      audio.play();

      break;
    case "a":
      var audio = new Audio("/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("/sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("/sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("/sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("/sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("/sounds/tom-4.mp3");
      audio.play();
      break;
  }
}
