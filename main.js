const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')


setInterval(function(){
  
  let time = new Date()
  
  let hr = time.getHours() * 30
  let min = time.getMinutes()
  let secs = time.getSeconds()
  
  hours.style.transform = `rotate(${hr + (min/12)}deg)`
  minutes.style.transform = `rotate(${min * 6}deg)`
  seconds.style.transform = `rotate(${secs * 6}deg)`
  
},1)

