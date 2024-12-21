let lists = document.getElementsByClassName("list");
let rightbox = document.getElementById("right");
let leftbox = document.getElementById("left"); // Define leftbox

// Add dragstart event listeners to each list item
for (let list of lists) {
    list.addEventListener("dragstart", function(event) {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
}

// Allow the right box to accept dragged items
rightbox.addEventListener("dragover", function(event) {
    event.preventDefault(); 
});

rightbox.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    rightbox.appendChild(draggedElement); 
});

// Allow the left box to accept dragged items back
leftbox.addEventListener("dragover", function(event) {
    event.preventDefault(); 
});

leftbox.addEventListener("drop", function(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);
    leftbox.appendChild(draggedElement); 
});
