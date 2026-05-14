import { link } from 'react-router-dom'

function Navbar() {
    return (
        <header className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur-md fixed to top-0 left-0 z-50">
            
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                <h1 className="text-2x1 font-bold">
                    Rugby Ref
                </h1>

                <nav className="flex gap-8 text-sm font-semibold">

                    <link to="/"  className="hover:text-green-400 transition">
                    
                        Home
                    </link>
                       
                    <link to="/referees"  className="hover:text-green-400 transition">
                        Árbitros
                    </link>

                    <link to="/matches" className="hover:text-green-400 transition">
                        Campeonatos
                    </link>

                    <link to="/courses" className="hover:text-green-400 transition">
                        Cursos
                    </link>

                    <link to="/rankings" className="hover:text-green-400 transition">
                        Rankings
                    </link>

                </nav>
            </div>
        </header>
    )
}

export default Navbar