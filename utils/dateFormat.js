// important; you'll have to make the date into a string! 
const addDate = (date) =>{
    let dateString = date.toString();
    
    const lastCharacter = dateString.charAt(dateString.length -1);
    // target the last character and then implement an if statement for the characters below
    if (lastCharacter === '1' && dateString !== '11') {
        // this gives it a "st" ending
        dateString = `${dateString}st`;
      } else if (lastCharacter === '2' && dateString !== '12') {
        // this gives it a "nd" ending
        dateString = `${dateString}nd`;
      } else if (lastCharacter=== '3' && dateString !== '13') {
        // this gives it a "rd" ending
        dateString= `${dateString}rd`;
      } else {
        // this gives it a "th" ending
        dateString= `${dateString}th`;
      }
      return dateString;
      
};

module.exports = (
    timestamp,
    { monthLength = "short", dateSuffix = true } = {}
  ) => {
    let months;
  
    if (monthLength === "short") {
      months = {
        0: "Jan",
        1: "Feb",
        2: "Mar",
        3: "Apr",
        4: "May",
        5: "Jun",
        6: "Jul",
        7: "Aug",
        8: "Sep",
        9: "Oct",
        10: "Nov",
        11: "Dec",
      };
    } else {
      months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      };
    }
    const dateObj = new Date(timestamp);
  const formattedMonth = months[dateObj.getMonth()];

  const dayOfMonth = dateSuffix
    ? addDateSuffix(dateObj.getDate())
    : dateObj.getDate();

  const year = dateObj.getFullYear();
  let hour =
    dateObj.getHours() > 12
      ? Math.floor(dateObj.getHours() - 12)
      : dateObj.getHours();

  // !!!!!!! if hour is 0 (12:00am), change it to 12
  if (hour === 0) {
    hour = 12;
  }

  const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

  // set to `am` or `pm`
  const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';

  const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;

  return formattedTimeStamp;
};