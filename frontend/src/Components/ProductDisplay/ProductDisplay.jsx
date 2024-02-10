import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';
import { useState } from 'react';
import star_blank from '../Assets/star_dull_icon.png';
import star_full from '../Assets/star_icon.png';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [mainImage, setMainImage] = useState(product.image);

    const [listImages, setListImages] = useState([
        product.image,
        product.image1,
        product.image,
        product.image,
    ]);

    const changeMainImage = (newImage) => {
        setListImages((prevListImages) => {
            const newListImages = [...prevListImages];
            const mainImageIndex = newListImages.indexOf(newImage);
            newListImages[mainImageIndex] = mainImage;
            return newListImages;
        });
        setMainImage(newImage);
    };

    // const handleMouseMove = (e) => {
    //     const image = e.target;
    //     const imageRect = image.getBoundingClientRect();
    //     const offsetX = e.clientX - imageRect.left;
    //     const offsetY = e.clientY - imageRect.top;
    //     const magnifySize = 150; // Adjust the magnification size as needed

    //     const percentageX = offsetX / imageRect.width * 100;
    //     const percentageY = offsetY / imageRect.height * 100;

    //     image.style.backgroundPosition = `${percentageX}% ${percentageY}%`;
    //     image.style.backgroundSize = `${magnifySize}% ${magnifySize}%`;
    // };

    // const handleMouseLeave = (e) => {
    //     const image = e.target;
    //     image.style.backgroundPosition = 'center';
    //     image.style.backgroundSize = 'cover';
    // };
  return (
    <div className='product-display'>
        <div className="product-display-left">
            <div className="product-display-img-list">
                {listImages.map((image, index) => (
                    <img key={index} src={image} alt='prod_img' onClick={() => changeMainImage(image)} />
                ))}
            </div>
            <div className="product-display-img">
                    <img className='product-display-main-img' src={mainImage} alt='' />
                </div>   
        </div>
        <div className="product-display-right">
            <h1>{product.name}</h1>
            <div className='product-display-right-star'>
                <div>
                    <img src={star_full} alt="" />
                    <img src={star_full} alt="" />
                    <img src={star_full} alt="" />
                    <img src={star_full} alt="" />
                    <img src={star_blank} alt="" />
                </div>
                <p>(122)</p>
            </div>
            <div className="product-display-right-prices">
                <div className="productdisplay-right-price-new">${ product.new_price }</div>
                <div className="productdisplay-right-price-old">${ product.old_price }</div>
            </div>
            <div className="product-display-right-description">
                Text
            </div>
            <div className="product-display-right-size">
                <h1>Select Size</h1>
                <div className="product-display-right-size-sizes">
                    <div><button className='span'>S</button></div>
                    <div><button className='span'>M</button></div>
                    <div><button className='span'>L</button></div>
                    <div><button className='span'>XL</button></div>
                    <div><button className='span'>XXL</button></div>
                </div>
            </div>
            <button className='btn' onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='product-display-right-category'><span>Category: </span>Men, T-Shirt</p>
            <p className='product-display-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay