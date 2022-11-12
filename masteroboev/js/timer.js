const timerItemRequest = document.querySelectorAll('.request__forma .timer__item div'),
	 timerItemCallback = document.querySelectorAll('.callback__forma .timer__item div');


function startTimerRequest(nameTimer) {
	function timer(nameArray) {
		let seconds = Number(nameArray[3].textContent),
			minutes = Number(nameArray[2].textContent),
			hours = Number(nameArray[1].textContent),
			days = Number(nameArray[0].textContent);
		if (days == 0 && hours == 0 && minutes == 0 && seconds == 1) {
			clearInterval(stopTimer);
			nameArray[3].textContent = 00;
		} else {
			if (seconds == 1) {
				minutes += -1;
				seconds = 60;
				if (minutes < 0) {
					minutes = 60;
					hours += -1;
					if (hours < 0) {
						hours = 24;
						days += -1;
						nameArray[0].textContent = days;
						nameArray[1].textContent = hours;
						nameArray[2].textContent = minutes;
						nameArray[3].textContent = seconds;
					} else {
						nameArray[3].textContent = seconds;
						nameArray[2].textContent = minutes;
					}
				} else {
					nameArray[3].textContent = seconds;
					nameArray[2].textContent = minutes;
				}
			} else {
				seconds = seconds - 1;
				nameArray[3].textContent = seconds;
			}
		}
	}

	let stopTimer = setInterval(timer, 1000, nameTimer);
}

startTimerRequest(timerItemRequest);
startTimerRequest(timerItemCallback);

