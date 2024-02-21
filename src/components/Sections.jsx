export function Sections() {
    return (
        <>
            <h1 className="font-bold mt-10 text-center text-2xl">En esta página encontrarás:</h1>
            <section className='sections flex md:flex-row flex-col items-center align-center justify-between py-5 md:py-10 md:px-28'>
                <a className='card-benefits w-96 h-72 text-end text-white font-bold text-xl p-5 rounded-2xl drop-shadow-2xl hover:scale-105 m-2 md:m-0'><span className="text-3xl">Beneficios</span></a>
                <a className='card-types w-96 h-72 text-end text-white font-bold text-xl p-5 rounded-3xl drop-shadow-2xl hover:scale-105 m-2 md:m-0'><span className="text-3xl">Información</span></a>
                <a className='card-tips w-96 h-72 text-end text-white font-bold text-xl p-5 rounded-3xl drop-shadow-2xl hover:scale-105 m-2 md:m-0'><span className="text-3xl">Consejos</span></a>
            </section>
        </>
    )
}