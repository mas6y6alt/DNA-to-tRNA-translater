document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#backmain").addEventListener("click", () => {
        window.location.href = "/DNA-biology-tool";
    });

    function convertToMRNA(input) {
        return input.replace(/T/g, "U");
    }

    function convertToDRNA(input) {
        return input.replace(/U/g, "T");
    }

    const dnainput = document.querySelector("#DNA input.line");
    const mrnainput = document.querySelector("#M-RNA input.line");

    // DNA -> mRNA
    dnainput.addEventListener("input", () => {
        const val = dnainput.value;

        if (/^[ATGC]*$/.test(val)) {
            dnainput.style.color = "white";
            mrnainput.value = convertToMRNA(val);
        } else {
            dnainput.style.color = "red";
        }
    });

    // mRNA -> DNA
    mrnainput.addEventListener("input", () => {
        const val = mrnainput.value;

        if (/^[AUGC]*$/.test(val)) {
            mrnainput.style.color = "white";
            dnainput.value = convertToDRNA(val);
        } else {
            mrnainput.style.color = "red";
        }
    });
});

