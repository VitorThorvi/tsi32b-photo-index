document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newCustomerForm"); //elemento

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // listener

        const name = document.getElementById("customerName").value;
        const email = document.getElementById("customerEmail").value;
        const cpf = document.getElementById("customerCPF").value.replace(/[^0-9]/g, "");
        const cep = document.getElementById("customerCEP").value.replace(/[^0-9]/g, "");
        const photosQuantity = document.getElementById("customerPhotosQuantity").value;


        const customerData = {
            name,
            cpf,
            email,
            cep,
            photosQuantity
        }; // cria novo obj

        // cadastrar cliente
        try {
            const response = await fetch("http://localhost:3000/customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(customerData),
            });

            if (response.ok) {
                alertify.success("Cliente cadastrado com sucesso!"); // Success message
                form.reset(); // Clear the form fields
            } else {
                const errorData = await response.json();
                alertify.error("Erro ao cadastrar cliente: " + (errorData.message || "Erro desconhecido. Tentamos. Mas não deu"));
            }
        } catch (error) {
            console.error("Erro ao enviar os dados", error);
            alertify.error("Ocorreu um erro. Tente novamente mais tarde.");
        }
    });
});