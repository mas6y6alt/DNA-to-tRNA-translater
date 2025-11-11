document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#transcription-dna-to-mrna").addEventListener("click",() => {
        window.location.href = "transcription.html"
    });

    document.querySelector("#comp-dna").addEventListener("click",() => {
        window.location.href = "complementary.html"
    })
});
