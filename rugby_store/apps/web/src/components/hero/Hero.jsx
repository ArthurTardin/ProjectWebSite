import { motion } from 'framer-motion'

function Hero() {
   return (
    <section className='h=screen flex intems-center justify-center relative overplow-hidden'>

        <div className='absolute inset-0 bg-black'></div>

        <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative z-10 text-center px-6'>

            <h1 className='text-7x1 font-black mb-6'>
                O futuro da
                <span className='text-green-400'> Arbitragem</span>

            </h1>

            <p className='text-zinc-300 text-x1 max-w-2x1 mx-auto mb-8'>
                Tecnologia, desempenho e gestão esportiva.
            </p>
        </motion.div>
    </section>
   )
}

export default Hero