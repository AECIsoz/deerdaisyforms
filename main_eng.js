// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Sunday", new Date("2026-04-19")],
  ["Saturday", new Date("2026-04-25")],
  ["Sunday", new Date("2026-04-26")],
  ["Saturday", new Date("2026-05-02")],
  ["Sunday", new Date("2026-05-03")],
  ["Saturday", new Date("2026-05-09")],
  ["Sunday", new Date("2026-05-10")],
  ["Sunday", new Date("2026-05-17")],
  ["Saturday", new Date("2026-05-30")],
  ["Sunday", new Date("2026-05-31")],
];

let breakfastDates = [
  ["Sunday", new Date("2026-04-19")],
  ["Saturday", new Date("2026-04-25")],
  ["Sunday", new Date("2026-04-26")],
  ["Saturday", new Date("2026-05-02")],
  ["Sunday", new Date("2026-05-03")],
  ["Saturday", new Date("2026-05-09")],
  ["Sunday", new Date("2026-05-10")],
  ["Sunday", new Date("2026-05-17")],
  ["Saturday", new Date("2026-05-30")],
  ["Sunday", new Date("2026-05-31")],
];

if (
  window.location.href === "https://deerdaisyforms.netlify.app/afternoontea_eng"
) {
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
} else if (
  window.location.href === "https://deerdaisyforms.netlify.app/breakfast_eng"
) {
  // push future dates to new array
  let datesToCome = [];

  for (let i = 0; i < breakfastDates.length; i++) {
    if (breakfastDates[i][1] > today) {
      datesToCome.push(breakfastDates[i]);
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
}
