const secondsHand = document.getElementById('seconds-hand')
const minutesHand = document.getElementById('minutes-hand')
const hoursHand = document.getElementById('hours-hand')


function setDate() {
    const now = new Date()
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const timeInterval = 6

    secondsHand.style.transform = 'rotate( '+ (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate( '+(minutes * timeInterval + seconds / 10) + 'deg)'
    hoursHand.style.transform = 'rotate( ' + (hours * timeInterval + minutes /2 ) + ' deg)'
    }

setInterval(setDate, 1000)
setDate()