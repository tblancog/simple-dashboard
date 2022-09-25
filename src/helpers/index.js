/**
 * It takes a string, converts it to a number, and then formats it with commas
 * @param str - The string to be formatted.
 */
export const formatThousand = (str) => Number(str).toLocaleString();

/**
 * It takes a number of seconds and returns a string of hours and minutes
 * @param num - The number of seconds to convert to HH:MM
 * @returns the number of hours and minutes in a given number of seconds.
 */
export const toHHMM = (num) => {
  const hrs = Math.floor(num / 3600);
  const mins = Math.floor((num % 3600) / 60);
  let strHours = "";
  let strMin = "";
  if (hrs > 0) {
    strHours += `${hrs} hours`;
  }
  if (mins > 0) {
    strMin += `${mins} min`;
  }
  return `${strHours} ${strMin}`;
};

/**
 * Return a random string of 16 characters, starting at the 3rd character.
 */
export const uniqueId = () => Math.random().toString(16).slice(2);

/**
 * It downloads a CSV file from the API and then calls the handler function
 * @param handler - This is a function that will be called when the download is complete.
 */
export const downloadCsv = (handler) => {
  // if (window) {
  //   window.location.href = `${process.env.REACT_APP_API_BASE_URL}/report?fileType=csv`;
  // }
  window.location.assign(
    `${process.env.REACT_APP_API_BASE_URL}/report?fileType=csv`
  );
  handler(true);
};
