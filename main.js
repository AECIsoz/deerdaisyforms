// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Saturday", new Date("2026-01-17")],
  ["Sunday", new Date("2026-02-01")],
  ["Saturday", new Date("2026-02-07")],
  ["Sunday", new Date("2026-02-08")],
  ["Saturday", new Date("2026-02-14")],
  ["Sunday", new Date("2026-02-15")],
];

// array to hold all future dates
let datesToCome = [];

for (let i = 0; i < teaDates.length; i++) {
  if (teaDates[i][1] > today) {
    datesToCome.push(teaDates[i]);
  } else {
    console.log(teaDates[i][1] + " is in the past");
  }
}
console.log(datesToCome);
let dateToFormat;
let datesToPublish = [];

for (let i = 0; i < datesToCome.length; i++) {
  dateToFormat = datesToCome[i][1];
  console.log(dateToFormat);
  let correctFormat = dateToFormat.toLocaleDateString();
  console.log(correctFormat);
  datesToCome[i][1] = correctFormat;
}

let selectedDates = document.getElementById("datum");
let option = document.createElement("option");

console.log(selectedDates);

for (let i = 0; i < datesToCome.length; i++) {
  let option = document.createElement("option");
  option.text = datesToCome[i][0] + " " + datesToCome[i][1];
  selectedDates.add(option);
}
