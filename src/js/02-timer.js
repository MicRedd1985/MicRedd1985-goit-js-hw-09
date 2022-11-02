import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const btnStart = document.querySelector ('button[data-start]')
const dataDays = document.querySelector ('span[data-days]')
const dataHours = document.querySelector ('span[data-hours]')
const dataMinutes = document.querySelector ('span[data-minutes]')
const dataSeconds = document.querySelector ('span[data-seconds]')

function addLeadingZero(value){
    return value.toString().padStart(2,'0');
  }
  let ms = 0
  let btnActive = false


function convertMs(ms) {
    let data
    // Number of milliseconds per unit of time (from Zad#2 DZ#9)
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
  
    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
  
    return data = { days, hours, minutes, seconds };
  }

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let nowDate = new Date()
        if (selectedDates[0] < nowDate) {
          return alert("Please choose a date in the future")
        }
        btnStart.addEventListener('click', onClickStart)
      }
      }
      const fltpckr = flatpickr("#datetime-picker", options)

      function onClickStart() {
        if (btnActive) {
              return;
        }
        btnActive = true;
        console.log('start')
        timerID = setInterval(() => {
          let nowDate = new Date()
          ms = fltpckr.selectedDates[0] - nowDate;
          if (ms <= 0) {
          return  stopTimer() }
      
          const timeElements = convertMs(ms)
          console.log('countdown ->', timeElements)
          console.log(timeElements.days)
          dataDays.textContent = timeElements.days
          dataHours.textContent = timeElements.hours
          dataMinutes.textContent = timeElements.minutes
          dataSeconds.textContent = timeElements.seconds
        }, 1000)
      }
  

    

      
