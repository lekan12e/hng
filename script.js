document.addEventListener("DOMContentLoaded", function() {
  function updateTime() {
      const now = new Date();
      const utcTime = now.toUTCString().split(" ")[4];
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' });
      
      document.getElementById('time').textContent = utcTime;
      document.getElementById('day').textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);
});
