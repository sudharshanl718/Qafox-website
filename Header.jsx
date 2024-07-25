import React from 'react'
var display1=0;
const demo1 = () => {
    if(display1===1){
        document.getElementById("dd1").style.display="block";
        display1=0;
    } else {
        document.getElementById("dd1").style.display="none";
        display1=1;
    }
}
const demo2 = () => {
    if(display1===1){
        document.getElementById("dd2").style.display="block";
        display1=0;
    } else {
        document.getElementById("dd2").style.display="none";
        display1=1;
    }
}

export const Header = () => {
  return (
    <div className='header'>
        <div className='hd1'>
            <div className='hd1-1'>
                <button onClick={demo1}><b>€</b> Currency ▼</button>
                <div id='dd1'>
                    <a href='#'>€Euro</a>
                    <a href='#'>€Pound Sterling</a>
                    <a href='#'>$US Dollar</a>
                </div>
            </div>
            <div className='hd1-2'>
                <label><b>🕻</b> 0123456789</label>
            </div>
            <div className='hd1-3'>
                <button onClick={demo2}><b>👤</b>My Account ▼</button>
                <div id='dd2'>
                    <a href='#'>Register</a>
                    <a href='#'>Login</a>
                </div>
            </div>
            <div className='hd1-4'>
                <label><b>❤︎</b> Wish List (0)</label>
            </div>
            <div className='hd1-5'>
                <label><b>🛒</b> Shoping Cart</label>
            </div>
            <div className='hd1-6'>
                <label><b>↪</b> Checkout</label>
            </div>
        </div>
        <div className='hd2'>
            <div className='hd2-1'>
                <a href='#'>Qafox.com</a>
            </div>
            <div className='hd2-2'>
                <input type='search' placeholder='Search'></input>
                <div><ion-icon name="search-outline"></ion-icon></div>
            </div>
            <div className='hd2-3'>
                <button>🛒0 item(s)-0.00€</button>
            </div>
        </div>
        <div className='hd3'>
            <ul className='ul1'>
                <li>Desktops
                    <ul className='ul2'>
                        <li>PC (0)</li>
                        <li>Mac (1)</li>
                        <li>Show AllDesktops</li>
                    </ul>
                </li>
                <li>Laptops & Notebooks
                    <ul className='ul3'>
                        <li>Macs (0)</li>
                        <li>Windows (0)</li>
                        <li>Show AllLaptops & Notebooks</li>
                    </ul>
                </li>
                <li>Components
                    <ul className='ul4'>
                        <li>Mice and Trackballs (0)</li>
                        <li>Monitors (2)</li>
                        <li>Printers (0)</li>
                        <li>Scanners (0)</li>
                        <li>Web Cameras (0)</li>
                        <li>Show AllComponents</li>
                    </ul>
                </li>
                <li>Tablets</li>
                <li>Software</li>
                <li>Phones & PDAs</li>
                <li>Cameras</li>
                <li>MP3 Players
                    <div className='hd3-1'>
                    <ul className='ul5'>
                        <li>test 11 (0)</li>
                        <li>test 12 (0)</li>
                        <li>test 15 (0)</li>
                        <li>test 16 (0)</li>
                        <li>test 17 (0)</li>
                    </ul>
                    <ul className='ul6'>
                        <li>test 18 (0)</li>
                        <li>test 19 (0)</li>
                        <li>test 20 (0)</li>
                        <li>test 21 (0)</li>
                        <li>test 22 (0)</li>
                    </ul>
                    <ul className='ul7'>
                        <li>test 23 (0)</li>
                        <li>test 24 (0)</li>
                        <li>test 4 (0)</li>
                        <li>test 5 (0)</li>
                        <li>test 6 (0)</li>
                    </ul>
                    <ul className='ul8'>
                        <li>test 7 (0)</li>
                        <li>test 8 (0)</li>
                        <li>test 9 (0)</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>Show AllMP3 Players</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
