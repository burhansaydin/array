const { companies, ages } = require("./arraylist");
// company lisesindeki her bir sirketin yasi
const lifeOfCompanies = companies.map(company => `${company.name} Yasi: ${2021-company.start}`)
console.log(lifeOfCompanies)

// age dizisindeki yaslara gore dogum yillari
const birthdays = ages.map(age => 2021 - age)
console.log(birthdays)