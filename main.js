// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Lördag", new Date("2026-01-24")],
  ["Söndag", new Date("2026-01-25")],
  ["Lördag", new Date("2026-01-31")],
  ["Söndag", new Date("2026-02-01")],
  ["Lördag", new Date("2026-02-07")],
  ["Söndag", new Date("2026-02-08")],
  ["Lördag", new Date("2026-02-14")],
  ["Söndag", new Date("2026-02-15")],
  ["Lördag", new Date("2026-02-21")],
  ["Lördag", new Date("2026-01-18")],
  ["Söndag", new Date("2026-02-22")],
  ["Lördag", new Date("2026-02-28")],
  ["Söndag", new Date("2026-03-01")],
  ["Lördag", new Date("2026-03-07")],
  ["Söndag", new Date("2026-03-08")],
  ["Lördag", new Date("2026-03-14")],
  ["Söndag", new Date("2026-03-15")],
  ["Lördag", new Date("2026-03-21")],
  ["Söndag", new Date("2026-03-22")],
  ["Lördag", new Date("2026-03-28")],
  ["Söndag", new Date("2026-03-29")],
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
