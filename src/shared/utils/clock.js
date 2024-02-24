export function updateClock() {
  const now = new Date()

  const hour = now.getHours()
  const minute = now.getMinutes()
  const second = now.getSeconds()

  const hourHand = document.querySelector('.hour-hand')
  const minuteHand = document.querySelector('.minute-hand')
  const secondHand = document.querySelector('.second-hand')

  // Поворачиваем стрелки
  hourHand.style.transform = `rotate(${(hour % 12) * 30 + (minute / 60) * 30}deg) translate(-50%, -100%)`
  minuteHand.style.transform = `rotate(${minute * 6}deg) translate(-50%, -100%)`
  secondHand.style.transform = `rotate(${second * 6}deg) translate(-50%, -100%)`
}

// Обновляем время каждую секунду
// setInterval(updateClock, 1000)

// Запускаем функцию в первый раз, чтобы часы обновились сразу после загрузки страницы
