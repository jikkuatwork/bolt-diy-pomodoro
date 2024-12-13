import { useState, useEffect } from 'react'
import Timer from './components/Timer'
import Controls from './components/Controls'

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60)
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)

  useEffect(() => {
    let interval = null
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsBreak(!isBreak)
      setTimeLeft(isBreak ? 25 * 60 : 5 * 60)
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, timeLeft, isBreak])

  const toggleTimer = () => {
    setIsRunning(!isRunning)
  }

  const resetTimer = () => {
    setIsRunning(false)
    setTimeLeft(25 * 60)
    setIsBreak(false)
  }

  return (
    <div className="app">
			<div>Controls</div>
      <h1>Pomodoro Timer</h1>
      <Timer timeLeft={timeLeft} isBreak={isBreak} />
      <Controls 
        isRunning={isRunning} 
        onToggle={toggleTimer} 
        onReset={resetTimer} 
      />
    </div>
  )
}

export default App
