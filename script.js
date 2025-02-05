// Function to get cookie value by name
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [key, value] = cookies[i].split("=");
        if (key === name) return decodeURIComponent(value);
    }
    return "N/A"; // Default value if cookie not found
}

// Display last visited page and timestamp
document.addEventListener("DOMContentLoaded", function () {
    let lastPage = getCookie("last_page");
    let lastVisit = getCookie("last_visit");
    document.getElementById("activity").innerHTML = 
        `Last Visited Page: <strong>${lastPage}</strong> <br> 
         Last Visit Time: <strong>${lastVisit}</strong>`;
});
