//Part 1: JS Dates

/* 
    ⦾ Create a function calculateDateDifference that takes two date strings in the format YYYY-MM-DD HH:MM:SS and returns the difference between them in days, hours, and minutes.
    ⦾ Use the Date object to parse the dates and calculate the difference.
    ⦾ Log the result to the console in the format: X days, Y hours, Z minutes.
*/

function calculateDateDifference(dateStr1, dateStr2) {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);

  const diffInMs = Math.abs(date2 - date1);

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));

  console.log(`${days} days, ${hours} hours, ${minutes} minutes`);
}

calculateDateDifference("2025-03-22 10:00:00", "2025-03-24 12:30:00");
