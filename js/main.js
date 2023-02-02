const bodyEl = document.querySelector("body");
bodyEl.addEventListener("mousemove", (event) => {
    console.log("moved", event.offsetX, event.offsetY);
    const xPosition = event.offsetX;
    const yPosition = event.offsetY;
    const newSpanEl = document.createElement("span");
    newSpanEl.style.left = xPosition + "px";
    newSpanEl.style.top = yPosition + "px";

    //change size
    const size = Math.random() * 100;
    newSpanEl.style.width = size + "px";
    newSpanEl.style.height = size + "px";
    bodyEl.appendChild(newSpanEl);

    //remove this heart after a few seconds & change color
    setTimeout(() => {
        newSpanEl.remove();
    }, 3000);
});
