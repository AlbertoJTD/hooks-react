import { useState, useEffect } from "react";

export const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
  default: 'bg-gray-500'
}

type TrafficLightColor = 'red' | 'yellow' | 'green';
// type TrafficLightColor = keyof typeof colors;

export function useTrafficLight() {
  const [light, setLight] = useState<TrafficLightColor>('red');
  const [countdown, setCountdown] = useState(5)

  // countdown effect
  useEffect(() => {
    console.log({countdown});
    if (countdown === 0) return;

    const intervalId = setInterval(() => {
      console.log('setInterval llamado');
      setCountdown((prev) => prev - 1)
    }, 1000);

    return () => {
      console.log('Cleanup effect');
      clearInterval(intervalId);
    }
  }, [countdown]);

  // change traffic light
  useEffect(() => {
    if (countdown > 0) return;

    setCountdown(5);

    if (light === 'red') {
      setLight('green')
    } else if (light === 'yellow') {
      setLight('red')
    } else {
      setLight('yellow')
    }
    return
  }, [countdown, light]);

  return {
    // props
    light,
    countdown,
    colors,

    // computed
    percentage: (countdown / 5) * 100,
  }
}