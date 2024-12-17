import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { ScrollToTop } from "./components/ui/scroll-to-top"

function App() {
  return (
    <div className="w-full h-full pb-10 bg-stone-100">
    <Header />
    <Outlet />
    <ScrollToTop />
    </div>
  )
}

export default App
