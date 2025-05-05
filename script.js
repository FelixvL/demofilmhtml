let a = 4;
let b = 15;

document.getElementById("logBtn").addEventListener("click", function () {
    console.log("Knop 'Log naar console' geklikt");
    console.table([{ naam: "Sofie" }, { naam: "Tom" }]);
    console.warn("Waarschuwing");
    console.error("Foutmelding");
});

document.getElementById("storageBtn").addEventListener("click", function () {
    const data = { thema: "licht", taal: "nl" };
    localStorage.setItem("instellingen", JSON.stringify(data));
    document.getElementById("output").textContent = "Instellingen opgeslagen in localStorage.";
});

document.getElementById("errorBtn").addEventListener("click", function () {
    console.log("Een fout wordt nu bewust gegenereerd.");
    nietBestaandeFunctie(); // Dit veroorzaakt een ReferenceError
});

document.getElementById("slowBtn").addEventListener("click", function () {
    const start = performance.now();
    for (let i = 0; i < 1e7; i++) {
        Math.sqrt(i);
    }
    const eind = performance.now();
    document.getElementById("output").textContent = `Trage bewerking duurde ${Math.round(eind - start)} ms.`;
});

document.getElementById("fetchBtn").addEventListener("click", async function () {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        document.getElementById("output").textContent = `Gebruiker: ${data[0].name}`;
    } catch (e) {
        console.error("Fout bij ophalen van data", e);
    }
});

window.onload = function () {
    //const debugData = { geladen: true, waarde: 123 };
    //debugger; // Open Sources-tab voor inspectie
    //console.log("Pagina geladen", debugData);
};
