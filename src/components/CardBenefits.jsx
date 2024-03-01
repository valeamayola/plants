export function CardBenefits({ name, description, svg }) {
    return (
        <div className="card card-compact m-2 w-80 md:w-96 bg-transparent border-emerald-700 border-4 shadow-xl mx-5">
            <div className="card-body p-5">
                <h1 className="card-title font-bold text-xl">{name}</h1>
                <p className="text-base">{description}</p>
            </div>
        </div>
    )
}