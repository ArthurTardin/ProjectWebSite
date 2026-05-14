import Navbar from '../../components/nevbar/Nevbar'
import Footer from '../../components/footer/Footer'
import { defaultEasing } from 'framer-motion'

function Matches() {
    return (
        <>
        <Navbar />
        <main className='pt-32 min-h-screen flex items-center justify-center'>
            <h1 className='text-5x1 font-bold'>
                Campeonato
            </h1>
        </main>

        <footer />
        </>
    )
}

export default Matches