// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Söndag", new Date("2026-05-17")],
  ["Lördag", new Date("2026-05-30")],
  ["Söndag", new Date("2026-05-31")],
  ["Lördag", new Date("2026-06-13")],
  ["Söndag", new Date("2026-06-14")],
  ["Lördag", new Date("2026-06-20")],
  ["Söndag", new Date("2026-06-21")],
  ["Lördag", new Date("2026-06-27")],
  ["Söndag", new Date("2026-06-28")],
  ["Lördag", new Date("2026-07-04")],
  ["Söndag", new Date("2026-07-05")],
  ["Lördag", new Date("2026-07-11")],
  ["Söndag", new Date("2026-07-12")],
  ["Lördag", new Date("2026-07-18")],
  ["Söndag", new Date("2026-07-19")],
  ["Lördag", new Date("2026-07-25")],
  ["Söndag", new Date("2026-07-26")],
  ["Lördag", new Date("2026-08-01")],
  ["Söndag", new Date("2026-08-02")],
  ["Lördag", new Date("2026-08-08")],
  ["Söndag", new Date("2026-08-09")],
];
console.log(teaDates);
let breakfastDates = [
  ["Lördag", new Date("2026-05-30")],
  ["Söndag", new Date("2026-05-31")],
];

if (
  window.location.href === "https://deerdaisyforms.netlify.app/afternoontea" ||
  window.location.href === "https://deerdaisyforms.netlify.app/takeaway"
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
  window.location.href === "https://deerdaisyforms.netlify.app/breakfast"
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
