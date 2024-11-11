document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const statusTxt = document.querySelector(".button-area span");

    form.onsubmit = function (e) {
        e.preventDefault();
        statusTxt.style.display = "block";
        statusTxt.textContent = "Mengirim Pesanmu...";

        let formData = new FormData(form);
        fetch("p.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            statusTxt.textContent = data;
            if (data.includes("Maaf") || data.includes("Email") || data.includes("gagal")) {
                statusTxt.style.color = "red";
            } else {
                statusTxt.style.color = "green";
                form.reset();
            }
            setTimeout(() => {
                statusTxt.style.display = "none";
            }, 3000);
        })
        .catch(error => {
            console.error("Error:", error);
            statusTxt.textContent = "Terjadi kesalahan. Coba lagi.";
            statusTxt.style.color = "red";
        });
    };
});
