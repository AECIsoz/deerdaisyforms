// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Sunday", new Date("2026-05-17")],
  ["Saturday", new Date("2026-05-30")],
  ["Sunday", new Date("2026-05-31")],
  ["Friday", new Date("2026-06-12")],
  ["Saturday", new Date("2026-06-13")],
  ["Sunday", new Date("2026-06-14")],
  ["Friday", new Date("2026-06-19")],
  ["Saturday", new Date("2026-06-20")],
  ["Sunday", new Date("2026-06-21")],
  ["Friday", new Date("2026-06-26")],
  ["Saturday", new Date("2026-06-27")],
  ["Sunday", new Date("2026-06-28")],
  ["Friday", new Date("2026-07-03")],
  ["Saturday", new Date("2026-07-04")],
  ["Sunday", new Date("2026-07-05")],
  ["Friday", new Date("2026-07-10")],
  ["Saturday", new Date("2026-07-11")],
  ["Sunday", new Date("2026-07-12")],
  ["Friday", new Date("2026-07-17")],
  ["Saturday", new Date("2026-07-18")],
  ["Sunday", new Date("2026-07-19")],
  ["Friday", new Date("2026-07-24")],
  ["Saturday", new Date("2026-07-25")],
  ["Sunday", new Date("2026-07-26")],
  ["Friday", new Date("2026-07-31")],
  ["Saturday", new Date("2026-08-01")],
  ["Sunday", new Date("2026-08-02")],
  ["Friday", new Date("2026-08-07")],
  ["Saturday", new Date("2026-08-08")],
  ["Sunday", new Date("2026-08-09")],
  ["Friday", new Date("2026-08-14")],
  ["Saturday", new Date("2026-08-15")],
  ["Sunday", new Date("2026-08-16")],
];

let breakfastDates = [
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
