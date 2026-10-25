import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
import { TrafficLight } from './01-traffic-light/TrafficLight'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp /> */}
    <TrafficLight />
  </StrictMode>,
)
