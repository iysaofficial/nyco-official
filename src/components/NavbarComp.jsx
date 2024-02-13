import '../assets/css/Navbar.css'

const NavbarComp = () =>{
    return(
        <>
        <header>
        <nav>
            <div className='logo'><img src="./assets/images/logo/NYCO.png" alt="" /></div>
            <label htmlFor="btn" className='icon'>
                <span className='fa fa-bars'></span>
            </label>
            <input type="checkbox" id='btn'/>
            <ul>
                <li><a href="/">Utama</a></li>
                {/* Dropdown 1 */}
                {/* <li>
                    <label htmlFor="btn-1" className='show'>Features +</label>
                    <a href="#">Features</a>
                    <input type="checkbox" id='btn-1'/>
                    <ul>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Elements</a></li>
                        <li><a href="#">Icons</a></li>
                    </ul>
                </li> */}

                {/* Dropdown 2 */}
                {/* <li>
                    <label htmlFor="btn-2" className='show'>Services +</label>
                    <a href="#">Services</a>
                    <input type="checkbox" id='btn-2'/>
                    <ul>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">App Design</a></li>
                        <li>
                            <label htmlFor="btn-3" className='show'>More</label>
                            <a href="#">More
                                <span className='fa fa-plus'></span>
                            </a>
                            <input type="checkbox" id='btn-3'/>
                            <ul>
                                <li><a href="#">Submenu-1</a></li>
                                <li><a href="#">Submenu-2</a></li>
                                <li><a href="#">Submenu-3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li> */}
                <li><a href="#about">Tentang</a></li>
                {/* <li><a href="#" target='_blank'>Buku Panduan</a></li> */}
                {/* <li>
                    <label htmlFor="btn-1" className='show'>Galeri</label>
                    <a href="#">Galeri</a>
                    <input type="checkbox" id='btn-1'/>
                    <ul>
                        <li><a href="" target='_blank'>2023</a></li>
                    </ul>
                </li> */}
                <li><a href="#category">Kategori</a></li>  
                <li><a href="#contact">Kontak</a></li>
            </ul>
        </nav>
        </header>
        </>
    )
}

export default NavbarComp