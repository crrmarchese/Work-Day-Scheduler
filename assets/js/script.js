
// Get current month, date and day and set the date format
const currentMonth = (dayjs().format("MMMM"));
const dayOfWeek = (dayjs().format("dddd"));
const dayOfMonth = (dayjs().format("D"));
const timeOfDay = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
// Loop through hours in day to get an array from 9-17
let computerTimeOfDay = [];
 // Get current hour from computer
let currentHourNow = parseInt((dayjs().get('hour')));
//Set variables for tables structure
const rowItem$ = $("<div class='row time-block'>");
const colItem$ = $("<div class='col-12 table-responsive'>");
const renderTable$ = $("<table class='table'>");
const renderTableBody$ = $("<tbody>");
const tableTr$ = $("<tr class='tr-row'>");
// const textAreaInput = $("<textarea class='description'>");
const storageKey = "myCalendar";


// Array of hours in day 9-17
for (let i = 9; i <= 17; i++) {
    computerTimeOfDay.push(i);    
}

// Append the <div.row> to <div.container>
$(".container").append(rowItem$);

// Append the <div.col> to <div.row>
$(rowItem$).append(colItem$);

// Append <table> inside <div.col>
$(colItem$).append(renderTable$);



// Return the current day, month and day
$("#currentDay").text(dayOfWeek + ", "+ currentMonth + " " + dayOfMonth);

let output = "";
for(let i = 0; i < timeOfDay.length; i++) {
    // output html elements
    // console.log(timeOfDay[i]);
    output = timeOfDay[i]; // 9AM, 10AM etc
    

    // console.log(output);

    // Append <tr> inside of <tbody>
    $(renderTableBody$).append(tableTr$);

    // Return the time inside first <td>
    const timeTd$ = $("<td class='hour time-of-day'>").text(output).attr("data-time", computerTimeOfDay[i]); // 9-17

    // Create <textarea> inside second <td>
    const textareaTd$ = $("<td class='description-details'>").html("<textarea class='description'>");

    // Add save button inside of third <td>
    const saveBtnTd$ = $("<td class='saveBtn'>").html("<i class='fas fa-save fa-2x'>");

    // Append the 3 <td>s inside a <tr>
    $(tableTr$).append(timeTd$, textareaTd$, saveBtnTd$);
   

}
 // Append the <tbody> inside <table>
 $(renderTable$).append(renderTableBody$);
 getCurrentHour();

 // Get current hour from computer
 function getCurrentHour() {
   
        // Get data-time attribute which is computerTimeOfDay
        let timeDataAttr = parseInt($("td.hour").attr("data-time")); 
    //    console.log(timeDataAttr);
        // Compare if data-time attribute matches the current hour set by computer
        /* Return appropriate class depending if the hour is before, current or after
         current hour */
        if(timeDataAttr === currentHourNow) {
            $(".description-details").addClass("present");
        }
        if(timeDataAttr < currentHourNow) {
            $(".description-details").addClass("past");
        }
        if (timeDataAttr > currentHourNow){
            $(".description-details").addClass("future");
        }
    
 }
//  getCurrentHour();

// Local Storage
function saveToLocalStorage() {
    // Gets local storage
    const getStorage = function() {
        return JSON.parse(localStorage.getItem(storageKey));
    }

    // Sets local storage
    const setStorage = function(value) {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }
    $(".saveBtn").on("click", function(e) {
        console.log("I have been clicked!");
        
        const payload = {
            dayDetails: $("textarea").val().trim(),
            timeDetails: $(this).parent()

        }
        console.log($(this).parent());
        setStorage(payload);
    });
}

saveToLocalStorage();
