
const _desc = document.querySelector(".desc");

document.querySelectorAll(".card").forEach(e => {
    e.addEventListener("click", showDescription);
})
document.getElementById("back").addEventListener("click",showDescription);

function showDescription(e) {
    _desc.classList.toggle("desc-show");
    document.querySelector(".container").classList.toggle("container-hide");
}