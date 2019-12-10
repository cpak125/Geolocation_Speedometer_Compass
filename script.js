const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) => {
    // console.log(data)
    let speedMph = data.coords.speed / 1.609
    console.log(speedMph)
    speed.textContent = Math.round(speedMph * 100) / 100
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.error(err)
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN')
})