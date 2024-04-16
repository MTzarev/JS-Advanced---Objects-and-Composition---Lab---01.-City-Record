function cityRecord(name, population, treasury){
let city={
    name: name,
    population: population,
    treasury: treasury
}
city.country = `Bulgaria`;
delete city.name;
delete city.population;
delete city.treasury;
city.town = name;
city.population = population; 
city.treasury = treasury;
    return city
}
console.log(cityRecord('Tortuga',
7000,
15000
));