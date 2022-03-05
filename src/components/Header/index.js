import React from 'react';
const Header = () => {
    return (
        <header className='header'>
            <nav className="local-nav">
                <div className="local-nav-link">
                    <a to="#" className='product-name'>SEO MYOUNG SEOK</a>
                    <a to="#">git</a>
                    <a to="#">노션</a>
                    <a to="#">도커</a>
                </div>
            </nav>
            <nav className="global-nav">
                <div className="global-nav-link">
                    <a to="#" className='global-nav-item'>About ME</a>
                    <a to="#" className='global-nav-item'>SKILLS</a>
                    <a to="#" className='global-nav-item'>CERTIFICATION</a>
                    <a to="#" className='global-nav-item'>Career</a>
                </div>
            </nav>
        </header>
    );
};

export default Header;