
// Get current month, date and day and set the date format
const currentMonth = (dayjs().format("MMMM"));
const dayOfWeek = (dayjs().format("dddd"));
const dayOfMonth = (dayjs().format("D"));
const timeOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];



// Return the current day, month and day
$("#currentDay").text(dayOfWeek + ", "+ currentMonth + " " + dayOfMonth);

var output = "";
for(var i = 0; i < timeOfDay.length; i++) {
    // output html elements
    // console.log(timeOfDay[i]);
    output = timeOfDay[i];

    // console.log(output);

    var listItem = $("<p>").text(output);
$(".container").append(listItem);
  
}





