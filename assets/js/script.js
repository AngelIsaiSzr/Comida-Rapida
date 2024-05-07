const form = document.querySelector('form');

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let order = document.getElementById("order").value;
    let address = document.getElementById("address").value;
    let references = document.getElementById("references").value;

    alert("Hola " + name + "! Gracias por tu orden!" + "\nTú pedido es: " + order + "\nSe entregara en: " + address + "\nCon referencias: " + references + "\nPedido listo 👌!");

    form.reset();
})
