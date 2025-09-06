const val = document.querySelectorAll(".hour, .min, .sec");
const day = document.querySelector('.day');
const dateMonth = document.querySelector('.date-month');
const timePeriod = document.querySelector('.time-period');
const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true, day: '2-digit', month: '2-digit', weekday: 'short' };

setInterval(() => {
    const now = new Date();
    const dateTime = now.toLocaleTimeString('en-us', options)
    const [week, date, month, hr, min, sec, period] = dateTime.replace(/,/g, '').replace(/\/|:/g, ' ').split(' ')
    day.innerText = week;
    dateMonth.innerText = date + " / " + month;
    timePeriod.innerText = period;
    val[0].innerText = hr
    val[1].innerText = min
    val[2].innerText = sec
}, 1000)