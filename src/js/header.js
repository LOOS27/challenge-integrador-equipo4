dropdown = () => {
    const dropdownMenu = document.querySelector("#dropdown-menu");
    if (dropdownMenu.style.display === "none") {
        dropdownMenu.style.display = "block";
      } else {
        dropdownMenu.style.display = "none";
      }
}
document.querySelector("#dropdown-toggle").addEventListener("click", dropdown);