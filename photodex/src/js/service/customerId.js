document.addEventListener("DOMContentLoaded", () => {
    const loginButton = document.querySelector(".btn-primary");

    loginButton.addEventListener("click", (e) => {
        const customerIdInput = document.getElementById("customerId").value;

        if (!customerIdInput) {
            alertify.error("informe o ID de usuário.");
            e.preventDefault(); // nao entra sem id
            return;
        }

        localStorage.setItem("customerId", customerIdInput); //localstorage
    });
});