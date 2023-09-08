import React from 'react';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div>Copyrights {year}</div>
    ) 
}
export default Footer;