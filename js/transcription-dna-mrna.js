document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#backmain").addEventListener("click", () => {
        window.location.href = "/DNA-biology-tool";
    });

    function convertToMRNA(input) {
        return input.replace(/T/gi, (match) => match === "T" ? "U" : "u");
    }

    function convertToDRNA(input) {
        return input.replace(/U/gi, (match) => match === "U" ? "T" : "t");
    }

    const dnainput = document.querySelector("#DNA input.line");
    const mrnainput = document.querySelector("#M-RNA input.line");

    // DNA -> mRNA
    dnainput.addEventListener("input", () => {
        const val = dnainput.value;

        if (/^[ATGCatgc]*$/.test(val)) {
            dnainput.style.color = "white";
            mrnainput.value = convertToMRNA(val);
        } else {
            dnainput.style.color = "red";
        }
    });

    // mRNA -> DNA
    mrnainput.addEventListener("input", () => {
        const val = mrnainput.value;

        if (/^[AUGCaugc]*$/.test(val)) {
            mrnainput.style.color = "white";
            dnainput.value = convertToDRNA(val);
        } else {
            mrnainput.style.color = "red";
        }
    });
});

