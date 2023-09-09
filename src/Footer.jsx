import React from 'react';

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div>Copyright© {year}</div>
    ) 
}
export default Footer;