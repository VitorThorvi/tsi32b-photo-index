document.addEventListener("DOMContentLoaded", async () => {
    const listGroup = document.querySelector(".list-group");

    try {
        const response = await fetch("http://localhost:3000/customer");
        if (!response.ok) {
            throw new Error(`HTTP code: ${response.status}`);
        }

        const customers = await response.json();

        listGroup.innerHTML = "";

        customers.forEach((customer) => {
            const customerItem = document.createElement("a");
            customerItem.classList.add("list-group-item", "list-group-item-action");
            customerItem.href = "#";
            customerItem.textContent = customer.name;
            listGroup.appendChild(customerItem);
        });
    } catch (error) {
        console.error("Falha ao buscar clientes:", error);
        alertify.error("Ocorreu um erro ao carregar os clientes. Tente novamente mais tarde.");
    }
});