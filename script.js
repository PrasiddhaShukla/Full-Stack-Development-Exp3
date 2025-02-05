// Change text using innerHTML
function changeText() {
    document.getElementById("title").innerHTML = "Text Changed using JavaScript!";
}

// Change CSS properties
function changeStyle() {
    document.getElementById("title").style.color = "red";
}

// Change image source
function changeImage() {
    let img = document.getElementById("image");
    img.src = (img.src.includes("chelsea.jpg")) ? "stadium.jpg" : "chelsea.jpg";
}

// Add a text node to a parent node
function addText() {
    let newText = document.createTextNode("New text added using JavaScript!");
    document.getElementById("textContainer").appendChild(newText);
}

// Delete a node
function deleteNode() {
    let node = document.getElementById("deleteMe");
    if (node) {
        node.parentNode.removeChild(node);
    }
}

/* jQuery Operations */
$(document).ready(function() {
    // Change button text using jQuery
    $("#changeBtnText").click(function() {
        $(this).text("Text Changed!");
    });

    // Set background-image using jQuery CSS property
    $("body").css("background-image", "url('purple.png')");

    // Access form data using jQuery
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        $("#output").text("Hello, " + name + "!");
    });

    // Add attribute using jQuery
    $("#addAttrBtn").click(function() {
        $("#image").attr("alt", "Updated Image");
        alert("Image attribute 'alt' updated!");
    });
});
