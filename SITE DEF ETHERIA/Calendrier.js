// Simuler des données d'événements
const eventsData = [
    { title: "Événement 1", date: "01/02/2024", description: "Description de l'événement 1" },
    { title: "Événement 2", date: "03/02/2024", description: "Description de l'événement 2" },
    { title: "Événement 3", date: "05/02/2024", description: "Description de l'événement 3" }
];

// Fonction pour afficher les événements dans la section
function displayEvents() {
    const eventList = document.querySelector('.event-list');

    eventsData.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date :</strong> ${event.date}</p>
            <p><strong>Description :</strong> ${event.description}</p>
        `;
        eventList.appendChild(eventCard);
    });
}

// Appeler la fonction pour afficher les événements lors du chargement de la page
document.addEventListener('DOMContentLoaded', displayEvents);