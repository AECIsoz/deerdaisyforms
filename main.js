// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Lördag", new Date("2026-10-03")],
  ["Söndag", new Date("2026-10-04")],
  ["Måndag", new Date("2026-10-05")],
  ["Söndag", new Date("2026-10-11")],
  ["Lördag", new Date("2026-10-17")],
  ["Lördag", new Date("2026-10-24")],
  ["Lördag", new Date("2026-10-31")],
  ["Söndag", new Date("2026-11-08")],
  ["Lördag", new Date("2026-11-21")],
  ["Lördag", new Date("2026-11-28")],
  ["Söndag", new Date("2026-11-29")],
  ["Lördag", new Date("2026-12-05")],
  ["Söndag", new Date("2026-12-06")],
  ["Lördag", new Date("2026-12-12")],
  ["Söndag", new Date("2026-12-13")],
  ["Tisdag", new Date("2026-12-29")],
  ["Onsdag", new Date("2026-12-30")],
];
console.log(teaDates);
let breakfastDates = [
  ["Lördag", new Date("2026-10-10")],
  ["Söndag", new Date("2026-10-18")],
  ["Söndag", new Date("2026-10-25")],
  ["Lördag", new Date("2026-11-07")],
  ["Söndag", new Date("2026-11-22")],
];

if (
  window.location.href === "https://deerdaisyforms.netlify.app/afternoontea"
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
      as;
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
