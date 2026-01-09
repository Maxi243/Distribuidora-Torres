const btnProductos = document.getElementById("btnProductos");
    const menu = document.querySelector(".dropdown-menu");

    btnProductos.addEventListener("click", (e) => {
        e.preventDefault(); // evita que recargue
        menu.classList.toggle("open");
    });