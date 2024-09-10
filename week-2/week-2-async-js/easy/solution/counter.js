let i = 0;
const intervalId = setInterval(() => {
    const result = counter(9);
    if (result === 0) {
        clearInterval(intervalId); // Stop the loop
    }
    console.log(result);
    
}, 1000);

function counter(number) {
  if (i < number) {
    i++;
    return i;
  }
  return 0; // Return 0 when the counter is complete
}
