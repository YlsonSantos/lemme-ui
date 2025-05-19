import Image from 'next/image';
import Link from 'next/link';
import '../../public/styles/Header.css';
import '../../public/styles/global.css';
import logoCicclo from '../../public/images/cicclologo.svg';

const Header = () => {
    return (
        <section id="Header">
            <header className="header">

                <button className="button-header button-exit">Sair</button>

                <div className="logo">
                    <Image src={logoCicclo} alt="Logo" width={500} height={40} />
                </div>

                <Link href="/layout-page">
                    <button className="button-header button-publish">Publicar</button>
                </Link>
            </header>
        </section>
    );
};

export default Header;