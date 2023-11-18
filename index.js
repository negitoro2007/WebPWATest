function eventRegistration() {
    let tb = document.getElementById("textBox");
    let bt = document.getElementById("go");
    console.log(bt, tb);
    bt.addEventListener("click", () => {
        location.href = "mainContent.htm?url=" + tb.value;
        console.log("clock");
    });
}
window.onload = eventRegistration;
