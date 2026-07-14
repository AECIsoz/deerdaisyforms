// set current date
const today = new Date();
console.log(today);

// set dates when tea is served
let teaDates = [
  ["Lördag", new Date("2026-05-30")],
  ["Söndag", new Date("2026-05-31")],
  ["Fredag", new Date("2026-06-12")],
  ["Lördag", new Date("2026-06-13")],
  ["Söndag", new Date("2026-06-14")],
  ["Fredag", new Date("2026-06-19")],
  ["Lördag", new Date("2026-06-20")],
  ["Söndag", new Date("2026-06-21")],
  ["Fredag", new Date("2026-06-26")],
  ["Lördag", new Date("2026-06-27")],
  ["Söndag", new Date("2026-06-28")],
  ["Fredag", new Date("2026-07-03")],
  ["Lördag", new Date("2026-07-04")],
  ["Söndag", new Date("2026-07-05")],
  ["Fredag", new Date("2026-07-10")],
  ["Söndag", new Date("2026-07-12")],
  ["Fredag", new Date("2026-07-17")],
  ["Lördag", new Date("2026-07-18")],
  ["Fredag", new Date("2026-07-24")],
  ["Lördag", new Date("2026-07-25")],
  ["Söndag", new Date("2026-07-26")],
  ["Fredag", new Date("2026-07-31")],
  ["Lördag", new Date("2026-08-01")],
  ["Söndag", new Date("2026-08-02")],
  ["Fredag", new Date("2026-08-07")],
  ["Lördag", new Date("2026-08-08")],
  ["Söndag", new Date("2026-08-09")],
  ["Fredag", new Date("2026-08-14")],
  ["Lördag", new Date("2026-08-15")],
  ["Söndag", new Date("2026-08-16")],
];
console.log(teaDates);
let breakfastDates = [
  ["Lördag", new Date("2026-05-30")],
  ["Söndag", new Date("2026-05-31")],
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
