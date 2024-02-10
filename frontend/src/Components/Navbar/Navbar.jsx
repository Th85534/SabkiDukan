import React, { useContext, useRef, useState } from 'react' 
import './Navbar.css'

import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/breadcrum_arrow.png';
import cart from '../Assets/cart_icon.png'

// import axios from 'axios';
// const translate = new Translate();

const Navbar = () => {

    const[menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    const inputRef = useRef();
    
    
    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };
    
    // const handleVoiceInput = () => {
    //     const recognition = new window.webkitSpeechRecognition();
    //     recognition.lang = 'en-US';
    
    //     recognition.onresult = function(event) {
    //       const speechToText = event.results[0][0].transcript.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").trim();
    //       if (speechToText.trim() !== '') {
    //         inputRef.current.value = speechToText;
    //         window.location.href = `/search?q=${encodeURIComponent(speechToText)}`;
    //       }
    //     };
    
    //     recognition.start();
    // };
    
    const translateText = async (text) => {
        const userId = '0cd737b2d27c49fb95ba75a49d003a65';
        const ulcaApiKey = '0372c290f0-5e86-4253-ae40-efb99a73a116';
        const inferenceApiKey = 'lWAWK0vv2ql5gJqSSd5T8YTH24-CWMlvuoNJw0Itu2ZbgyAcxWzU6SHkv2d8GiXU';

        try {
            const response = await axios.post('https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/translation/translate', {
                text: text,
                source_language: "eng",
                target_language: "ben",
            }, {
                headers: {
                    "user-id": userId,
                    "ulca-api-key": ulcaApiKey,
                    "inference-api-key": inferenceApiKey,
                },
            });
            return response.data.translatedText;
        } catch (error) {
            console.error('Error translating text:', error);
            throw error;
        }
    };

    const handleVoiceInput = async () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';

        recognition.onresult = async function(event) {
            const speechToText = event.results[0][0].transcript.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").trim();
            if (speechToText.trim() !== '') {
                try {
                    const translatedText = await translateText(speechToText);
                    inputRef.current.value = translatedText;
                    window.location.href = `/search?q=${encodeURIComponent(translatedText)}`;
                } catch (error) {
                    console.error('Error translating text:', error);
                }
            }
        };

        recognition.start();
    };


    const handleSearch = (event) => {
        event.preventDefault();
        const query = inputRef.current.value.trim(); 
        if (query !== "") {
          window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    };

    return (
        <div  className='navbar'>
            <div className='nav-logo'>
                <img  src={logo} alt="logo" id="img"/>
                <p>SabkiDukan</p>
            </div>
            <div className="nav-search">
                <form className='search'  onSubmit={handleSearch}>
                    <button className='mic' onClick={handleVoiceInput}>🎤</button>
                    <input
                        className='search-box'
                        type="text"
                        placeholder="    Search here..."
                        ref={inputRef} 
                    />
                    <button className='submit' type="submit">Search</button>
                </form>
            </div>
            <div className='dropdown'>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />
            </div>
            <ul ref={menuRef} className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop" ? <hr/> :<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{ textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{ textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{ textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("others")}}><Link style={{ textDecoration: 'none'}} to='/others'>Others</Link>{menu==="others"?<hr/>:<></>}</li>
            </ul>
            
            <div className="nav-login-cart">
                <div className='login'>
                <Link to='/login'><button >Login</button></Link>
                </div>
                <div className='cart'>
                <Link to='/cart'><img src={cart} alt="" id="img1"/></Link>
                </div>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar;