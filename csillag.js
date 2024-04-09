const stars = document.querySelectorAll('.csillag i');
stars.forEach((star, index1) => {
star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
        index1 >= index2 ? star.classList.add("aktiv") : star.classList.remove("aktiv");
    } );
});
});