import { useState } from 'react'

export function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>Hello First App Vite + React!</p>
      <p>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is: {count}
        </button>
      </p>
    </>
  )
}
