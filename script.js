function countdown() {
    const now = new Date().getTime();
    const targetDate = new Date("March 6, 2024 11:30:00").getTime();
    const difference = targetDate - now;
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
  
  }
  
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  
  setInterval(countdown, 1000);
  
  
  countdown();
  