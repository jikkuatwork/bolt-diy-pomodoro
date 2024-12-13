function Timer({ timeLeft, isBreak }) {
  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60

  return (
    <div className="timer">
      <h2>{isBreak ? 'Break Time' : 'Work Time'}</h2>
      <div className="time-display">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
    </div>
  )
}

export default Timer
