var map = L.map('map').setView([46.603354, 1.888334], 6);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var parcours = [
    { coord: [43.2965, 5.3698], date: "8 mai, Marseille" },
    { coord: [45.1840, 0.7214], date: "22 mai, Périgueux" },
    { coord: [44.8378, -0.5792], date: "23 mai, Bordeaux" },
    { coord: [45.6484, 0.1569], date: "24 mai, Angoulême" },
    { coord: [46.6690, 0.3745], date: "25 mai, Futuroscope" },
    { coord: [46.8101, 1.6913], date: "27 mai, Châteauroux" },
    { coord: [47.4784, -0.5632], date: "28 mai, Angers" },
    { coord: [48.0706, -0.7703], date: "29 mai, Laval" },
    { coord: [49.1829, -0.3707], date: "30 mai, Caen" },
    { coord: [48.6361, -1.5115], date: "31 mai, Mont Saint-Michel" },
    { coord: [48.1173, -1.6778], date: "1er juin, Rennes" },
    { coord: [46.3231, -0.4588], date: "2 juin, Niort" },
    { coord: [46.4961, -1.7870], date: "4 juin, Les Sables-d'Olonne" },
    { coord: [47.2924, -2.3644], date: "5 juin, La Baule-Escoublac" },
    { coord: [47.6582, -2.7608], date: "6 juin, Vannes" },
    { coord: [48.3904, -4.4861], date: "7 juin, Brest" },
    { coord: [4.9224, -52.3134], date: "9 juin, Cayenne (Guyane)" },
    { coord: [-20.8823, 55.4504], date: "12 juin, Saint-Denis (La Réunion)" },
    { coord: [-17.5516, -149.5585], date: "13 juin, Papeete (Polynésie française)" },
    { coord: [16.2700, -61.5833], date: "15 juin, Baie-Mahault (Guadeloupe)" },
    { coord: [14.6161, -61.0588], date: "17 juin, Fort-de-France (Martinique)" },
    { coord: [43.7102, 7.2620], date: "18 juin, Nice" },
    { coord: [43.9493, 4.8055], date: "19 juin, Avignon" },
    { coord: [44.9334, 4.8924], date: "20 juin, Valence" },
    { coord: [46.1280, 3.4266], date: "21 juin, Vichy" },
    { coord: [45.4397, 4.3872], date: "22 juin, Saint-Étienne" },
    { coord: [45.9237, 6.8694], date: "23 juin, Chamonix" },
    { coord: [47.2378, 6.0241], date: "25 juin, Besançon" },
    { coord: [48.5734, 7.7521], date: "26 juin, Strasbourg" },
    { coord: [49.1193, 6.1757], date: "27 juin, Metz" },
    { coord: [48.6371, 4.9482], date: "28 juin, Saint-Dizier" },
    { coord: [49.1596, 5.3840], date: "29 juin, Verdun" },
    { coord: [49.2583, 4.0317], date: "30 juin, Reims" },
    { coord: [50.6292, 3.0573], date: "2 juillet, Lille" },
    { coord: [50.4299, 2.8319], date: "3 juillet, Lens" },
    { coord: [49.8950, 2.3026], date: "4 juillet, Amiens" },
    { coord: [49.4944, 0.1079], date: "5 juillet, Le Havre" },
    { coord: [49.0920, 1.4857], date: "6 juillet, Vernon" },
    { coord: [48.4461, 1.4893], date: "7 juillet, Chartres" },
    { coord: [47.5861, 1.3356], date: "9 juillet, Blois" },
    { coord: [47.9029, 1.9093], date: "10 juillet, Orléans" },
    { coord: [47.7982, 3.5733], date: "11 juillet, Auxerre" },
    { coord: [47.3220, 5.0415], date: "12 juillet, Dijon" },
    { coord: [48.2973, 4.0744], date: "13 juillet, Troyes" },
    { coord: [48.8566, 2.3522], date: "14-15 juillet, Paris" },
    { coord: [49.8485, 3.2877], date: "17 juillet, Saint-Quentin" },
    { coord: [49.4308, 2.0952], date: "18 juillet, Beauvais" },
    { coord: [48.9900, 2.3040], date: "19 juillet, Soisy-sous-Montmorency" },
    { coord: [48.9605, 2.8853], date: "20 juillet, Meaux" },
    { coord: [48.7904, 2.4620], date: "21 juillet, Créteil" },
    { coord: [48.6265, 2.4406], date: "22 juillet, Évry-Courcouronnes" },
    { coord: [48.8014, 2.1301], date: "23 juillet, Versailles" },
    { coord: [48.8910, 2.2060], date: "24 juillet, Nanterre" },
    { coord: [48.9515, 2.4031], date: "25 juillet, Parc Georges-Valbon (Seine-Saint-Denis)" },
    { coord: [48.8566, 2.3522], date: "26 juillet, Paris (cérémonie d'ouverture)" }
];
var parcoursCoords = parcours.map(function(p) { return p.coord; });
var polyline = L.polyline(parcoursCoords, {color: 'red'}).addTo(map);
parcours.forEach(function(p) {
    L.marker(p.coord).addTo(map).bindPopup(p.date);
});
map.fitBounds(polyline.getBounds());