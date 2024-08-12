import "./styles/normalize.css";
import "./styles/style.css";

let searchButton = document.querySelector(".button-search");
let input = document.querySelector("input");
let gifBox = document.querySelector(".gif-box");

searchButton.addEventListener("click", () => {
    if (input.value != "") {
        fetch(
            "https://api.giphy.com/v1/gifs/translate?api_key=EXMtPLlyzjz1o5j46TL5QVHnh6YUC376&s=" +
                input.value,
            { mode: "cors" }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                gifBox.innerHTML = "";
                let giphy = document.createElement("img");
                giphy.src = response.data.images.original.url;
                gifBox.appendChild(giphy);
            });

        input.value = "";
    }
});
