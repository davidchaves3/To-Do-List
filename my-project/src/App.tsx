import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 grid place-items-center">
      <div className="w-full max-w-xl space-y-6 p-6 rounded-2xl shadow-lg bg-white">
        <div className="flex items-center justify-center gap-6">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-16 hover:drop-shadow-[0_0_2em_#f59e0baa]" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-16 hover:drop-shadow-[0_0_2em_#60a5fbaa]" alt="React logo" />
          </a>
        </div>

        <h1 className="text-3xl font-bold tracking-tight">
          Vite + <span className="text-indigo-600">React</span> + <span className="text-emerald-600">Tailwind</span>
        </h1>

        <div className="card">
          <Button
            onClick={() => setCount((c) => c + 1)}
          >
            count is {count}
          </Button>
          <p className="text-sm text-slate-500 mt-2">
            Edit <code className="px-1 py-0.5 rounded bg-slate-100 border">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <Carousel>
          <CarouselContent>
            <CarouselItem><img src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" alt="" /></CarouselItem>
            <CarouselItem><img src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" alt="" /></CarouselItem>
            <CarouselItem><img src="https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg" alt="" /></CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
