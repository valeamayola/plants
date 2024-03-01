export function Sections() {
    return (
        <>
            <h1 className="font-bold mt-10 text-center text-2xl">En esta página encontrarás:</h1>
            <section className='sections flex md:flex-row flex-col items-center align-center justify-between py-5 md:py-10 md:px-28'>
                <a className='card-benefits w-72 md:w-96 h-52 md:h-72 text-end text-white font-bold p-5 rounded-2xl drop-shadow-2xl hover:scale-105 m-2 md:m-0 text-2xl md:text-3xl'>Beneficios</a>
                <a className='card-types w-72 md:w-96 h-52 md:h-72 text-end text-white font-bold p-5 rounded-3xl drop-shadow-2xl hover:scale-105 m-2 md:m-0 text-2xl md:text-3xl'>Información</a>
                <a className='card-tips w-72 md:w-96 h-52 md:h-72 text-end text-white font-bold p-5 rounded-3xl drop-shadow-2xl hover:scale-105 m-2 md:m-0 text-2xl md:text-3xl'>Consejos</a>
            </section>
        </>
    )
}