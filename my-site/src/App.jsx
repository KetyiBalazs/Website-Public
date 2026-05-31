import { Route, Routes } from 'react-router-dom'
import ThemeToggle from './components/ThemeToggle'
import EssayPage from './pages/EssayPage'
import EssaysPage from './pages/EssaysPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/essays" element={<EssaysPage />} />
        <Route path="/essays/:slug" element={<EssayPage />} />
      </Routes>
    </>
  )
}

export default App
