document.addEventListener("DOMContentLoaded", async () => {
    const loadingSection = document.getElementById("loading");
    const contentSection = document.getElementById("content");
    const galleryRow = document.querySelector(".gallery");
    const confirmButton = document.querySelector(".btn.btn-secondary");
    const nameSpan = document.querySelector(".customerName");
    // local-storage
    const customerId = localStorage.getItem("customerId");

    try {
        const customerResponse = await fetch(`http://localhost:3000/customer/${customerId}`);
        if (!customerResponse.ok) {
            throw new Error(`Não foi possível buscar dados do cliente: ${customerResponse.status}`);
        }
        const customerData = await customerResponse.json();
        const photosQuantity = customerData.photosQuantity;
        const customerName = customerData.name;

        nameSpan.textContent = customerName;

        const imagePromises = [];
        for (let i = 0; i < photosQuantity; i++) {
            imagePromises.push(fetch("https://picsum.photos/400?random=1"));
        }
        const imageResponses = await Promise.all(imagePromises);

        galleryRow.innerHTML = ""; // limpar elementos selecionados
        imageResponses.forEach((response, index) => {
            if (!response.ok) {
                console.error(`Falha ao buscar imagem ${index + 1}`);
                return;
            }

            const imageURL = response.url;

            const card = document.createElement("div");
            card.className = "col";
            card.innerHTML = `
                <div class="card" data-image-index="${index}">
                    <img src="${imageURL}" alt="Imagem ${index + 1}" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Imagem ${index + 1}</p>
                    </div>
                </div>
            `;
            galleryRow.appendChild(card);
        });

        // imagens selecionads
        const cards = galleryRow.querySelectorAll(".card");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                card.classList.toggle("border-success");
                card.classList.toggle("border-4");
            });
        });

        confirmButton.addEventListener("click", () => {
            const selectedImages = galleryRow.querySelectorAll(".card.border-success");

            if (selectedImages.length > 0) {
                alertify.success("As imagens foram escolhidas");
            } else {
                alertify.error("Nenhuma imagem foi selecionada!");
            }
        });

        loadingSection.classList.add("d-none");
        contentSection.classList.remove("d-none");
    } catch (error) {
        console.error("Error:", error);

        galleryRow.innerHTML = `
            <div class="col">
                <div class="alert alert-danger text-center" role="alert">
                    Ocorreu um erro ao carregar as imagens. Tente novamente mais tarde.
                </div>
            </div>
        `;

        loadingSection.classList.add("d-none");
        contentSection.classList.remove("d-none");
    }
});