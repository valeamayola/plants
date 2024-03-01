export function NavBar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
            <div className="dropdown flex md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-16 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="#benefits">Beneficios</a></li>
                        <li><a href="#plants">Plantas</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-emerald-800 font-bold text-xl">Plants.</a>
                {/* <img alt='Logo' src={imageSrc} /> */}
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 hidden md:flex">
                    <li><a href="index.html" className='font-bold'>Inicio</a></li>
                    <li><a href="#benefits" className='font-medium'>Beneficios</a></li>
                    <li><a href="#plants" className='font-medium'>Plantas</a></li>
                </ul>
            </div>
        </div>
    )
}