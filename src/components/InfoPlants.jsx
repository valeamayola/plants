export function InfoPlants({ img, namePlant, description, infoCare, infoBenefits }) {
    return (
        <div className="card card-compact w-80 md:w-96 bg-base-100 drop-shadow-2xl my-2 md:mx-5 mx-0">
            <figure><img className="w-full h-60" src={img} /></figure>
            <div className="card-body">
                <h1 className="text-xl font-bold">{namePlant}</h1>
                <p className="text-lg font-medium">{description}</p>
                <div className="collapse bg-base-200">
                    <input type="checkbox" />
                    <div className="collapse-title text-lg font-bold">
                        Ver cuidados y beneficios
                    </div>
                    <div className="collapse-content">
                        <p className="text-lg font-medium">{infoCare}</p>
                        <p className="text-lg font-medium">{infoBenefits}</p>
                    </div>
                </div>
            </div>
        </div>)
}