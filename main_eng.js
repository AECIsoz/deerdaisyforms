// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Saturday", new Date("2026-10-03")],
  ["Sunday", new Date("2026-10-04")],
  ["Sunday", new Date("2026-10-11")],
  ["Saturday", new Date("2026-10-17")],
  ["Saturday", new Date("2026-10-24")],
  ["Sunday", new Date("2026-11-01")],
  ["Sunday", new Date("2026-11-08")],
  ["Saturday", new Date("2026-11-21")],
];

let breakfastDates = [
  ["Saturday", new Date("2026-10-10")],
  ["Sunday", new Date("2026-10-18")],
  ["Sunday", new Date("2026-10-25")],
  ["Saturday", new Date("2026-10-31")],
  ["Saturday", new Date("2026-11-07")],
  ["Sunday", new Date("2026-11-22")],
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
