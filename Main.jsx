import React from 'react'

// var value=0;
// const left = () => {
//     if(value===1){
//         document.getElementById("md1-1").style.background=url("https://tutorialsninja.com/demo/image/cache/catalog/demo/banners/MacBookAir-1140x380.jpg");
//         value=0;
//     } else {
//         document.getElementById("md1-1").style.background=url("https://tutorialsninja.com/demo/image/cache/catalog/demo/banners/iPhone6-1140x380.jpg");
//         value=1;
//     }
// }
// const right = () => {
//     if(value===1){
//         document.getElementById("md1-1").style.background=url("https://tutorialsninja.com/demo/image/cache/catalog/demo/banners/MacBookAir-1140x380.jpg");
//         value=0;
//     } else {
//         document.getElementById("md1-1").style.background=url("https://tutorialsninja.com/demo/image/cache/catalog/demo/banners/iPhone6-1140x380.jpg");
//         value=1;
//     }
// }

export const Main = () => {
  return (
    <div className='main'>
        <div className='md1'>
            <div id='md1-1'>
                <span><button className='left' /*onClick={left}*/><ion-icon name="caret-back-outline"></ion-icon></button></span>
                <span><button className='right' /*onClick={right}*/><ion-icon name="caret-forward-outline"></ion-icon></button></span>
            </div>
        </div>
        <h2>Featured</h2>
        <div className='md2'>
            <div className='md2-1'>
                <img src='https://tutorialsninja.com/demo/image/cache/catalog/demo/macbook_1-200x200.jpg' alt='macbook'></img>
                <h3>MacBook</h3>
                <p className='p1'>Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..</p>
                <p className='p2'>472.33€</p>
                <p className='p3'>Ex Tax:392.30€</p>
                <div className='md2-1-1'>
                    <p>🛒ADD TO CART</p>
                    <p>❤︎</p>
                    <p>🔁</p>
                </div>
            </div>
            <div className='md2-1'>
                <img src='https://tutorialsninja.com/demo/image/cache/catalog/demo/iphone_1-200x200.jpg' alt='iphone'></img>
                <h3>iPhone</h3>
                <p className='p1'>iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..</p>
                <p className='p2'>96.66€</p>
                <p className='p3'>Ex Tax:79.24€</p>
                <div className='md2-1-1'>
                    <p>🛒ADD TO CART</p>
                    <p>❤︎</p>
                    <p>🔁</p>
                </div>
            </div>
            <div className='md2-1'>
                <img src='https://tutorialsninja.com/demo/image/cache/catalog/demo/apple_cinema_30-200x200.jpg' alt='apple-cinema'></img>
                <h3>Apple Cinema 30"</h3>
                <p className='p1'>The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..</p>
                <p className='p2'>86.31€ <del>95.72€</del></p>
                <p className='p3'>Ex Tax:70.61€</p>
                <div className='md2-1-1'>
                    <p>🛒ADD TO CART</p>
                    <p>❤︎</p>
                    <p>🔁</p>
                </div>
            </div>
            <div className='md2-1'>
                <img src='https://tutorialsninja.com/demo/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg' alt='canon'></img>
                <h3>Canon EOS 5D</h3>
                <p className='p1'>Canon's press material for the EOS 5D states that it 'defines (a) new D-SLR category', while we'r..</p>
                <p className='p2'>76.89€ <del>95.72€</del></p>
                <p className='p3'>Ex Tax:62.77€</p>
                <div className='md2-1-1'>
                    <p>🛒ADD TO CART</p>
                    <p>❤︎</p>
                    <p>🔁</p>
                </div>
            </div>
        </div>
        <div className='md3'>

        </div>
    </div>
  )
}
