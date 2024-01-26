import React from "react";
import './Header.css';
import smallRight from '../assets/icons/small-right.png';  //Criei uma variável smallRight para armazenar o caminho desta imagem
import smallLeft from '../assets/icons/small-left.png';
import search from '../assets/icons/search.png'

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src= {smallLeft} alt="" />
                </button>
                <button className="arrow-right">
                    <img src= {smallRight} alt="" />
                </button>
            </div>
            <div className="header__search">
                <img src= {search} alt="" />
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
                    placeholder="O que você quer ouvir?" value="" />
            </div>
            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    )
};

export default Header;//Exportando pois o Header estava sendo declarado mas não estava sendo lido, default pois é única, só tem 1 Header