const { companies, ages } = require("./arraylist")
    // gelire gore siralama
const sortedCompanies = companies.sort((a, b) => {
    if (a.revenue > b.revenue) {
        return 1;
    } else {
        return -1;
    }
})
console.log(sortedCompanies)
    // buyukten kucuge yas siralamasi
const sortedAges = ages.sort((a, b) => a < b ? 1 : -1)
console.log(sortedAges)