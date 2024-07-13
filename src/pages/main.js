import React from 'react';
import '../css/main.scss';
import Burger from './header_burger';

function Main() {

    return (
        <div>
            <Burger />
            <div className="main">
                {/* Ваш контент здесь */}
            </div>
        </div>
    );
};

export default Main;