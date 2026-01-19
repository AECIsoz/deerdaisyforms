// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Saturday", new Date("2026-01-24")],
  ["Sunday", new Date("2026-01-25")],
  ["Saturday", new Date("2026-01-31")],
  ["Sunday", new Date("2026-02-01")],
  ["Saturday", new Date("2026-02-07")],
  ["Sunday", new Date("2026-02-08")],
  ["Saturday", new Date("2026-02-14")],
  ["Sunday", new Date("2026-02-15")],
  ["Saturday", new Date("2026-02-21")],
  ["Saturday", new Date("2026-01-18")],
  ["Sunday", new Date("2026-02-22")],
  ["Saturday", new Date("2026-02-28")],
  ["Sunday", new Date("2026-03-01")],
];

// push future dates to new array
let datesToCome = [];

for (let i = 0; i < teaDates.length; i++) {
  if (teaDates[i][1] > today) {
    datesToCome.push(teaDates[i]);
  }
}

let dateToFormat;
let datesToPublish = [];

for (let i = 0; i < datesToCome.length; i++) {
  dateToFormat = datesToCome[i][1];
  let correctFormat = dateToFormat.toLocaleDateString();
  datesToCome[i][1] = correctFormat;
}

let selectedDates = document.getElementById("datum");
let option = document.createElement("option");

for (let i = 0; i < datesToCome.length; i++) {
  let option = document.createElement("option");
  option.text = datesToCome[i][0] + " " + datesToCome[i][1];
  selectedDates.add(option);
}
