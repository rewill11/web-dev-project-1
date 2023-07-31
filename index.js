var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonINNER = this.innerHTML;
    makesound(buttonINNER);
    addani(buttonINNER);
  });
}
  document.addEventListener("keydown", function(event) {
      makesound(event.key);
      addani(event.key);
    });

    function makesound(key) {
      switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
        case "j":
          var tomcra = new Audio("sounds/crash.mp3");
          tomcra.play();
          break;
        case "k":
          var tomkick = new Audio("sounds/kick-bass.mp3");
          tomkick.play();
          break;
        case "l":
          var tomsnare = new Audio("sounds/snare.mp3");
          tomsnare.play();
          break;
        default:
          console.log(buttonINNER);
      }
    }
    function addani(currentKey){
      var activeani = document.querySelector("." + currentKey);
      activeani.classList.add("pressed");
      setTimeout(function(){
        activeani.classList.remove("pressed");
      }, 100);
    }
