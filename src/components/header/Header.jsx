import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/" className='logo-a'>
                    <div className='logo-text'>
                        <h1 className='text-center'>AVUKAT</h1>
                        <h1>Muhammed Emin ORUÇ</h1>
                    </div>

                    {/* Dikey Çizgi */}
                    <div className="vertical-line"></div>
                    <div className='logo-text'>
                        <h2>ORUÇ</h2>
                        <h3>Hukuk ve Danışmanlık</h3>
                    </div>
                </a>
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="/ana-sayfa">ANA SAYFA</a></li>
                    <li><a href="/hakkimda">HAKKIMDA</a></li>
                    <li><a href="/hizmetlerimiz">HİZMETLERİMİZ</a></li>
                    <li><a href="/blog">BLOG</a></li>
                    <li><a href="/iletisim">İLETİŞİM</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
