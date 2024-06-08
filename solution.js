function attachEventsListeners() {

    const daysBtn = document.getElementById('daysBtn');
    daysBtn.addEventListener('click', convertDays);
    const hoursBtn = document.getElementById('hoursBtn');
    hoursBtn.addEventListener('click', convertHours);
    const minutesBtn = document.getElementById('minutesBtn');
    minutesBtn.addEventListener('click', convertMinutes);

    function convertDays() {
        let days = document.getElementById('days').value;
        let hours = days * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertHours() {
        let hours = document.getElementById('hours').value;
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;
        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertMinutes() {
        let minutes = document.getElementById('minutes').value;
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        document.getElementById('hours').value = hours;
        document.getElementById('days').value = days;
        document.getElementById('seconds').value = seconds;
    }
    
}