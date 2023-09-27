import Menu from "./Menu"

const Header = () => {
  return (
    <header className="p-4 font-urbanist">
        <nav className="flex justify-between items-center gap-0.5">
          <div className="flex items-baseline gap-0.5">
            <h1 className="text-2xl md:text-3xl text-gray-400 font-semibold">
              abdul-raziq
            </h1>
            <span className="w-1 h-1 md:w-2 md:h-2 rounded-full bg-orange-600"></span>
          </div>
          <Menu />
        </nav>
      </header>
  )
}

export default Header
