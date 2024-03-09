let placesToVisit: string[] = [
    "Kyoto, Japan",
    "Santorini, Greece",
    "Machu Picchu, Peru",
    "Banff National Park, Canada",
    "Serengeti National Park, Tanzania"
];

console.log("Original list of places to visit:");
placesToVisit.forEach(place => {
    console.log(place);
});

placesToVisit.sort();

console.log("\nReordered list of places to visit (alphabetically):");
placesToVisit.forEach(place => {
    console.log(place);
});

