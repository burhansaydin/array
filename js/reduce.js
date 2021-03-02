const { companies, ages } = require("./arraylist")
    // Sirketlerin toplam geliri
const totalRevenue = companies.reduce((total, com) => {
    return total + com.revenue;
}, 0);
console.log(`Toplam Gelir: ${totalRevenue}`)
    // Tum yaslar toplami
const totalAges = ages.reduce((total, age) => {
    return total + age;
}, 0)
console.log(`Yaslar Toplami: ${totalAges}`)