document.getElementById('texto').innerText = "O INVERNO ESTÁ CHEGANDO"

document.querySelector('#btTroca').addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
})