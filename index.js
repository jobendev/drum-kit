//Detecting Button clicked
var numOfdrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfdrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var selectedDrums = this.textContent;

        keyPressedMusic(selectedDrums);
        animation(selectedDrums);
    
})
}
//Detecting keyboard press
document.addEventListener("keydown" , function (test) {
    keyPressedMusic(test.key);

    animation(test.key);
});


//Function to play sound when keyboard is pressed
function keyPressedMusic(key) {
    switch (key) {
        case "w":
            var w = new Audio("sounds/tom-1.mp3")
            w.play();
            
            break;
        case "a":
            var a = new Audio("sounds/tom-2.mp3")
            a.play();
            break;
        case "s":
            var s = new Audio("sounds/tom-3.mp3")
            s.play();
            break;
        case "d":
            var d = new Audio("sounds/tom-4.mp3")
            d.play();
            break;
        case "j":
            var j = new Audio("sounds/snare.mp3")
            j.play();
            break;
        case "k":
            var k = new Audio("sounds/crash.mp3")
            k.play();
            break;
        case "l":
            var l = new Audio("sounds/kick-bass.mp3")
            l.play();
            break;
    
        default: console.log(selectedDrums);
            
    }
};
//Adds some sort of animation 
function animation(currentKey) {
    var pressedButton = document.querySelector("."+currentKey);
    pressedButton.classList.add("pressed");
    setTimeout(function () {
        pressedButton.classList.remove("pressed");
    }, 100);
}
