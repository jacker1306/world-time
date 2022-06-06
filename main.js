const jackTime = document.querySelector('.jack-time')
const jackDate = document.querySelector('.jack-date')
const huyTime = document.querySelector('.huy-time')
const huyDate = document.querySelector('.huy-date')
const duyenTime = document.querySelector('.duyen-time')
const duyenDate = document.querySelector('.duyen-date')
const tienTime = document.querySelector('.tien-time')
const tienDate = document.querySelector('.tien-date')
const meoTime = document.querySelector('.meo-time')
const meoDate = document.querySelector('.meo-date')

function convertTZ(date, tzString) {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

setInterval(() => {
  fetch("http://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh")
    .then((res) => res.json())
    .then((data) => {
      var time = new Date(data.datetime)
      const hour = time.getHours()
      const minute = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
      const sec = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
      jackTime.innerHTML = hour + ' : ' + minute + ' : ' + sec
      jackDate.innerText = new Date(time).toDateString()
      //Huy
      var time2 = convertTZ(time, 'Asia/Tokyo')
      const hour2 = time2.getHours()
      huyTime.innerHTML = hour2 + ' : ' + minute + ' : ' + sec
      huyDate.innerText = new Date(time2).toDateString()
      //Duyên
      var time3 = convertTZ(time, 'Europe/Berlin')
      const hour3 = time3.getHours()
      duyenTime.innerHTML = hour3 + ' : ' + minute + ' : ' + sec
      duyenDate.innerText = new Date(time3).toDateString()
      //Tiên
      var time4 = convertTZ(time, 'Pacific/Auckland')
      const hour4 = time4.getHours()
      tienTime.innerHTML = hour4 + ' : ' + minute + ' : ' + sec
      tienDate.innerText = new Date(time4).toDateString()
      //Mèo
      var time5 = convertTZ(time, 'Australia/Melbourne')
      const hour5 = time5.getHours()
      meoTime.innerHTML = hour5 + ' : ' + minute + ' : ' + sec
      meoDate.innerText = new Date(time5).toDateString()
    })
    .catch((err) => console.log(err))
}, 1000)
