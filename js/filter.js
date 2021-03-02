const { companies, ages } = require("./arraylist");
const companies_m = companies.filter(company => {
    return company.start <= 2000 && company.start >= 1990
})
console.log(`Kurulus yili 1900 ve 2000 arasinda olan sirketlerin bilgileri: ${companies_m}`)

const canDrive = ages.filter(age => age >= 18)
console.log(`Listede araba surmeye yasi tutan kisi sayisi ${canDrive.length}`)