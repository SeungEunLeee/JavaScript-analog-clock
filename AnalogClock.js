const hourHand = document.createElement('div');
const minuteHand = document.createElement('div');
const secondHand = document.createElement('div');
const container = document.querySelector('.analog-clock')

// 초침, 분침, 시침 요소 추가
hourHand.classList.add('hand', 'hour');
minuteHand.classList.add('hand', 'minute');
secondHand.classList.add('hand', 'second');

container.append(hourHand, minuteHand, secondHand)

//시계 눈금선 추가
for (let i = 1; i <= 12; i ++) {
  const timeNum = document.createElement('div');
  timeNum.classList.add('time', `time${i}`);
  timeNum.textContent = '|';
  container.append(timeNum);
}

// 시계 동작
const setTime = () => {
  const date = new Date();
  const hours = date.getHours() % 12;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hourDeg = (hours * 30) + (minutes * 0.5);
  const minuteDeg = (minutes * 6) + (seconds * 0.1);
  const secondDeg = seconds * 6;

  hourHand.style.setProperty('--deg', hourDeg)
  minuteHand.style.setProperty('--deg', minuteDeg)
  secondHand.style.setProperty('--deg', secondDeg)
};
setInterval(setTime, 1000);



export default AnalogClock;
