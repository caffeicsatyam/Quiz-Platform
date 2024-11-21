document.addEventListener('DOMContentLoaded', function () {
    let time = 600; // 10 minutes in seconds
    const timerElement = document.getElementById("Timer");
  
    function startTimer() {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
      if (time > 0) {
        time--;
      } else {
        clearInterval(timerInterval);
        alert("Time is up! The quiz has ended.");
        // Optionally, you could trigger form submission or disable the quiz
      }
    }
  
    const timerInterval = setInterval(startTimer, 1000);
  });
  