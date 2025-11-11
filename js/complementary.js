document.addEventListener("DOMContentLoaded",() => {
    document.querySelector("#backmain").addEventListener("click",() => {
        window.location.href = "/DNA-biology-tool";
    });

    const dnainput = document.querySelector("#DNA input.line");
    const dnainput2 = document.querySelector("#DNA2 input.line");

    function complementaryDNA(dna) {
        return dna.replace(/[ATGC]/gi, (base) => {
            switch (base) {
                case "A": return "T";
                case "T": return "A";
                case "G": return "C";
                case "C": return "G";
                case "a": return "t";
                case "t": return "a";
                case "g": return "c";
                case "c": return "g";
            }
        });
    }

    dnainput.addEventListener("input", (e) => {
        const val = dnainput.value;

        if (/^[ATGCatgc]*$/.test(val)) {
            dnainput.style.color = "white";
            dnainput2.value = complementaryDNA(val);
        } else {
            dnainput.style.color = "red";
        }
    })

    dnainput2.addEventListener("input", (e) => {
        const val = dnainput2.value;

        if (/^[ATGCatgc]*$/.test(val)) {
            dnainput2.style.color = "white";
            dnainput.value = complementaryDNA(val);
        } else {
            dnainput2.style.color = "red";
        }
    })

});