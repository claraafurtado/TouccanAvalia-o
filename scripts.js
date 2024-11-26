function setRating(rating) {
    const stars = document.querySelectorAll(".star");
    stars.forEach((star, index) => {
        star.classList.toggle("selected", index < rating);
    });
}

function saveComment() {
    alert("Comentário enviado com sucesso!");
}

function openReportModal() {
    document.getElementById("report-modal").style.display = "flex";
}

function sendReport() {
    const reportText = document.getElementById("report-text").value.trim();
    if (reportText) {
        alert("Denúncia enviada com sucesso!");
        document.getElementById("report-modal").style.display = "none";
        document.getElementById("report-text").value = "";
    } else {
        alert("Por favor, preencha a descrição da denúncia.");
    }
}
