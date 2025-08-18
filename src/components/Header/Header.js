import React, { useState, useEffect } from "react";
import "./Header.css";

function Header({ theme, toggleTheme }) {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    const toggleMenu = () => setOpen(o => !o);
    const closeMenu = () => setOpen(false);

    // Cerrar al hacer click fuera
    useEffect(() => {
        if (!open) return;
        const handleClick = (e) => {
            if (!e.target.closest('.site-nav') && !e.target.closest('.site-nav-toggle')) closeMenu();
        };
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, [open]);

    // Cerrar con Escape
    useEffect(() => {
        const handleKey = (e) => { if (e.key === 'Escape') closeMenu(); };
        document.addEventListener('keydown', handleKey);
        return () => document.removeEventListener('keydown', handleKey);
    }, []);

    // Bloquear scroll cuando abierto (solo móvil)
    useEffect(() => {
        document.body.classList.toggle('no-scroll', open);
        return () => document.body.classList.remove('no-scroll');
    }, [open]);

    // Cerrar si pasa a desktop
    useEffect(() => {
        const mq = window.matchMedia('(min-width:820px)');
        const handle = () => { if (mq.matches) closeMenu(); };
        mq.addEventListener('change', handle);
        return () => mq.removeEventListener('change', handle);
    }, []);

    // Auto ocultar header al hacer scroll (solo cuando menú cerrado)
    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;
        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const y = window.scrollY;
                    const goingDown = y > lastY;
                    const delta = Math.abs(y - lastY);
                    if (!open) {
                        if (goingDown && y > 80 && delta > 10) setHidden(true);
                        else if (!goingDown && delta > 10) setHidden(false);
                    }
                    lastY = y;
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [open]);

    return (
        <header className={`site-header ${hidden ? 'is-hidden' : ''}`}> {/* header */}
            <div className="logo">
                <img src="img/luis-granda-dev-1.png" alt="Logo Luis Granda" style={{ borderRadius: '12px' }} />
            </div>
            <div className="header-actions"> {/* solo hamburguesa ahora */}
                <button
                    type="button"
                    className={`site-nav-toggle ${open ? 'is-open' : ''}`}
                    aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
                    aria-controls="primary-navigation"
                    aria-expanded={open}
                    onClick={toggleMenu}
                >
                    <span className="hamburger" />
                </button>
            </div>
            <nav
                id="primary-navigation"
                className={`site-nav ${open ? 'open' : ''}`}
                aria-label="Navegación principal"
            >
                <ul className="site-nav__list">
                    <li className="site-nav__item"><a onClick={closeMenu} href="#home" className="site-nav__link">Home</a></li>
                    <li className="site-nav__item"><a onClick={closeMenu} href="#services" className="site-nav__link">My Services</a></li>
                    <li className="site-nav__item"><a onClick={closeMenu} href="#about" className="site-nav__link">About me</a></li>
                    <li className="site-nav__item"><a onClick={closeMenu} href="#work" className="site-nav__link">My Projects</a></li>
                    <li className="site-nav__item theme-item">
                        <button type="button" onClick={toggleTheme} className="site-nav__theme-btn" aria-label="Cambiar tema">
                            {theme === 'dark' ? '🌙' : '🌞'}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
