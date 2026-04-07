// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Saturday", new Date("2026-02-28")],
  ["Sunday", new Date("2026-03-01")],
  ["Saturday", new Date("2026-03-07")],
  ["Saturday", new Date("2026-03-14")],
  ["Sunday", new Date("2026-03-15")],
  ["Saturday", new Date("2026-03-21")],
  ["Sunday", new Date("2026-03-22")],
  ["Saturday", new Date("2026-03-28")],
  ["Sunday", new Date("2026-03-29")],
  ["Friday", new Date("2026-04-03")],
  ["Saturday", new Date("2026-04-04")],
  ["Sunday", new Date("2026-04-05")],
  ["Monday", new Date("2026-04-06")],
  ["Saturday", new Date("2026-04-11")],
  ["Sunday", new Date("2026-04-12")],
  ["Sunday", new Date("2026-04-19")],
  ["Saturday", new Date("2026-04-25")],
  ["Sunday", new Date("2026-04-26")],
];

let breakfastDates = [
  ["Saturday", new Date("2026-04-11")],
  ["Sunday", new Date("2026-04-12")],
  ["Saturday", new Date("2026-04-18")],
  ["Sunday", new Date("2026-04-19")],
  ["Saturday", new Date("2026-04-25")],
  ["Sunday", new Date("2026-04-26")],
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
