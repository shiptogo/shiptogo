// script.js
function trackPackage() {
    const trackingNumber = document.getElementById('trackingNumber').value;
    const statusDiv = document.getElementById('status');

    if (trackingNumber === "") {
        statusDiv.innerHTML = "<p>Veuillez entrer un numéro de suivi.</p>";
        return;
    }

    // Exemple de réponse simulée pour un numéro de suivi
    // En pratique, cela pourrait être une requête AJAX vers votre serveur ou une API tierce
    const trackingData = {
        "12345": {
            status: "En transit",
            lastStep: "Aéroport de Lomé, Togo",
            nextStep: "En cours de livraison",
            estimatedDelivery: "7 décembre 2024"
        },
        "67890": {
            status: "En attente de passage en douane",
            lastStep: "Arrivé en Chine",
            nextStep: "Passage en douane",
            estimatedDelivery: "12 décembre 2024"
        }
    };

    const package = trackingData[trackingNumber];
    
    if (package) {
        statusDiv.innerHTML = `
            <p>Statut actuel : ${package.status}</p>
            <p>Dernière étape : ${package.lastStep}</p>
            <p>Prochaine étape : ${package.nextStep}</p>
            <p>Livraison estimée : ${package.estimatedDelivery}</p>
        `;
    } else {
        statusDiv.innerHTML = "<p>Numéro de suivi non trouvé. Vérifiez votre saisie.</p>";
    }
}
