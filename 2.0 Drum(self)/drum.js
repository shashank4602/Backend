var n = document.querySelectorAll("button").length;
for (let i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", handleClick); //function name
}
console.log(n);

async function handleClick(event) {
    // alert("Clicked");
    var audio = new Audio("/backend/drum(self)/drum.mp3");
    await audio.play();
    alert(event.target.innerText + " is pressed");//which alphabet is clicked
    setTimeout(function () {
        alert("Time passes");
    }, 1000);

}
document.addEventListener("keypress", onclick);
function onclick(event) {
    alert(event.key + " Key is pressed");
}