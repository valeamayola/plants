import { CardBenefits } from "./CardBenefits"

export function Benefits() {
    return (
        <>
            <h1 id="benefits" className="mt-10 font-bold text-center text-2xl mb-10 px-2">Beneficios de las plantas para tu salud, bienestar y hogar</h1>
            <section className="flex md:flex-row flex-col items-center align-center justify-center md:m-5">
                <CardBenefits name={'Purifican el aire'} description={'Las plantas eliminan toxinas del aire y aumentan la humedad, lo que puede mejorar tu salud respiratoria.'}></CardBenefits>
                <CardBenefits name={'Reducen el estrés'} description={'Estar rodeado de plantas puede ayudar a reducir el estrés, la ansiedad, la fatiga y otros malestares.'}></CardBenefits>
                <CardBenefits name={'Aumentan la productividad'} description={'Mejoran la concentración y la memoria, lo que puede ayudarte a ser más productivo en el trabajo o en el estudio.'}></CardBenefits>
            </section>
            <section className="flex md:flex-row flex-col items-center align-center justify-center mx-5 md:my-2">
                <CardBenefits name={'Mejoran el estado de ánimo'} description={'Las plantas son grandes aliadas para ayudarte a mejorar tu estado de ánimo y reducir la depresión.'}></CardBenefits>
                <CardBenefits name={'Decoran el hogar'} description={'Las plantas añaden color y vida a tu hogar, creando un ambiente más agradable y acogedor.'}></CardBenefits>
                <CardBenefits name={'Crean un ambiente más natural'} description={'Las plantas te conectan con la naturaleza y te ayudan a sentirte más relajado y tranquilo.'}></CardBenefits>
            </section>
        </>
    )
}