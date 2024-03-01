import { InfoPlants } from "./InfoPlants"

export function SectionInfo () {
    const imgAloeVera = '/plants/aloe-vera-2.jpg'
    const imgSansevieria = '/plants/sansevieria-1.jpg'
    const imgPotos = '/plants/poto.jpg'
    const imgFilodendro = '/plants/filodendro-1.jpg'
    const imgOrquidea = '/plants/orquidea-1.jpg'
    const imgMonstera = '/plants/monstera-1.jpg'
    const imgLavanda = '/plants/lavanda-1.jpg'
    const imgGeranio = '/plants/geranio.jpg'
    const imgPetunia = '/plants/petunia-1.jpg'
    const imgRosas = '/plants/rosas.jpg'
    const imgHiedra = '/plants/hiedra.jpg'
    const imgJazmin = '/plants/jazmin.jpg'
    
    return (
        <>
        <h1 id="plants" className="font-bold mt-10 md:mt-20 text-center text-2xl">Conocé diferentes tipos de plantas y sus cuidados</h1>
        <header className="mt-10 md:mt-5 md:px-20">
        <h1 className="font-bold text-2xl mb-5 px-5 md:px-0">Plantas de interior</h1>
        </header>
        <section className="flex md:flex-row flex-col md:mb-5 mb-0 md:px-10 justify-center mx-auto items-center align-center">
        <InfoPlants img={imgAloeVera} namePlant={'Aloe Vera'} description={'Planta suculenta con hojas gruesas y carnosas.'} infoCare={'Requiere cuidados básicos: poca agua, luz solar indirecta y suelo bien drenado.'} infoBenefits={'Beneficios: Propiedades medicinales (cicatrizante, antiinflamatoria, digestiva), uso cosmético.'}/>
        <InfoPlants img={imgSansevieria} namePlant={'Sansevieria'} description={'Planta de interior resistente con hojas largas y erguidas.'} infoCare={'Requiere cuidados básicos: poca agua, poca luz y suelo bien drenado.'} infoBenefits={'Beneficios: Purifica el aire, elimina toxinas.'}/>
        <InfoPlants img={imgPotos} namePlant={'Potos'} description={'Planta trepadora de rápido crecimiento.'} infoCare={'Requiere cuidados básicos: riego moderado, luz indirecta y soporte para trepar.'} infoBenefits={'Beneficios: Purifica el aire, fácil de cuidar.'}/>
        </section>
        <section className="flex md:flex-row flex-col mb-10 md:mb-16 md:px-10 justify-center mx-auto items-center align-center">
        <InfoPlants img={imgFilodendro} namePlant={'Filodendro'} description={'Género de plantas tropicales con gran variedad de especies.'} infoCare={'Requieren cuidados moderados: riego regular, luz indirecta y humedad ambiental.'} infoBenefits={'Beneficios: Plantas de interior ornamentales, algunas purifican el aire.'}/>
        <InfoPlants img={imgOrquidea} namePlant={'Orquídea'} description={'Familia de plantas con gran diversidad de formas y colores.'} infoCare={'Requieren cuidados específicos: riego según la especie, luz indirecta, humedad ambiental y sustrato adecuado.'} infoBenefits={'Beneficios: Plantas exóticas y elegantes, algunas tienen propiedades medicinales.'}/>
        <InfoPlants img={imgMonstera} namePlant={'Monstera deliciosa'} description={'Planta trepadora de hojas grandes y con característicos agujeros.'} infoCare={'Requiere cuidados moderados: riego regular, luz indirecta, tutor para trepar y humedad ambiental.'} infoBenefits={'Beneficios: Planta de interior ornamental, purifica el aire.'}/>
        </section>

        <header className="mt-5 md:px-20">
        <h1 className="font-bold text-2xl mb-5 px-5 md:px-0">Plantas de exterior</h1>
        </header>
        <section className="flex md:flex-row flex-col md:mb-5 mb-0 md:px-10 justify-center mx-auto items-center align-center">
        <InfoPlants img={imgLavanda} namePlant={'Lavanda'} description={'Arbusto aromático con flores de color lila o blanco.'} infoCare={'Requiere cuidados básicos: riego moderado, sol directo y suelo bien drenado.'} infoBenefits={'Beneficios: Propiedades medicinales (relajante, antiinflamatoria), uso aromático.'}/>
        <InfoPlants img={imgGeranio} namePlant={'Geranio'} description={'Género de plantas con flores de colores variados.'} infoCare={'Requiere cuidados básicos: riego moderado, sol directo y suelo bien drenado.'} infoBenefits={'Beneficios: Purifica el aire, elimina toxinas.'}/>
        <InfoPlants img={imgPetunia} namePlant={'Petunia'} description={'Planta de floración abundante con flores de colores variados.'} infoCare={'Requiere cuidados moderados: riego regular, sol directo y suelo rico en nutrientes.'} infoBenefits={'Beneficios: Plantas de exterior ornamentales, atraen colibríes.'}/>
        </section>
        <section className="flex md:flex-row flex-col mb-10 md:px-10 justify-center mx-auto items-center align-center">
        <InfoPlants img={imgRosas} namePlant={'Rosas'} description={'Género de plantas con flores de gran variedad de colores y aromas.'} infoCare={'Requiere cuidados específicos: riego regular, sol directo, poda y control de plagas.'} infoBenefits={'Beneficios: Plantas ornamentales, símbolo de amor, algunas tienen propiedades medicinales.'}/>
        <InfoPlants img={imgHiedra} namePlant={'Hiedra'} description={'Planta trepadora de hojas verdes o variegadas.'} infoCare={'Requiere cuidados básicos: riego moderado, sombra parcial o total y suelo rico en materia orgánica.'} infoBenefits={'Beneficios: Cubre muros y rejas, purifica el aire.'}/>
        <InfoPlants img={imgJazmin} namePlant={'Jazmín'} description={'Arbusto trepador con flores blancas y fragantes.'} infoCare={'Requiere cuidados moderados: riego regular, sol directo o sombra parcial y suelo bien drenado.'} infoBenefits={'Beneficios: Propiedades medicinales (relajante, afrodisíaco), uso aromático.'}/>
        </section>
        </>
    )
}