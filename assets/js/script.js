
// Get current month, date and day and set the date format
const currentMonth = (dayjs().format("MMMM"));
const dayOfWeek = (dayjs().format("dddd"));
const dayOfMonth = (dayjs().format("D"));
const timeOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
const computerTimeOfDay = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const rowItem = $("<div class='row time-block'>");
const colItem = $("<div class='col-12 table-responsive'>");
const renderTable = $("<table class='table'>");
const renderTableBody = $("<tbody>");
const tableTr = $("<tr class='tr-row'>");
// const textAreaInput = $("<textarea class='description'>");


// Append the <div.row> to <div.container>
$(".container").append(rowItem);

// Append the <div.col> to <div.row>
$(rowItem).append(colItem);

// Append <table> inside <div.col>
$(colItem).append(renderTable);



// Return the current day, month and day
$("#currentDay").text(dayOfWeek + ", "+ currentMonth + " " + dayOfMonth);

let output = "";
for(let i = 0; i < timeOfDay.length; i++) {
    // output html elements
    // console.log(timeOfDay[i]);
    output = timeOfDay[i];
    

    // console.log(output);

    // Append <tr> inside of <tbody>
    $(renderTableBody).append(tableTr);

    // Return the time inside first <td>
    const timeTd = $("<td class='hour time-of-day'>").text(output);

    // Create <textarea> inside second <td>
    const textareaTd = $("<td>").html("<textarea class='description'>");

    // Add save button inside of third <td>
    const saveBtnTd = $("<td class='saveBtn'>").html("<i class='fas fa-save fa-2x'>");

    // Append the 3 <td>s inside a <tr>
    $(tableTr).append(timeTd, textareaTd, saveBtnTd);
    
 
}
 // Append the <tbody> inside <table>
 $(renderTable).append(renderTableBody);

 // Add classes

 function calendarTime() {

 }
