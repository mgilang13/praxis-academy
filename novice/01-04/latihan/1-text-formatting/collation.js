const names = ["Gilang", "Muhammad", "Khoiri", "Nur"];
const indoPhonebook = new Intl.Collator("id");

console.log(names.sort(indoPhonebook.compare).join(", "));
