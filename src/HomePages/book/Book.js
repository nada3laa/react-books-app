import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { books } from '../../data/books'
import Rating from '../../Components/SlideBooks/Rating';
import { useContext } from 'react';
import cartContext from '../../context/cartContext';


 const Book = ()=> {

  const {addToCart} = useContext(cartContext)
  


  const {id} = useParams();
  const book = books.find(b => b.id === parseInt(id));

 const[qty,setQty] =  useState(1)

  return (
    <div className='book wow fadeInUp '>
      <div className='book-content '>
        <img src={`/books/${book.image}`} alt={book.title} className='book-content-img'/>
        <div className='book-content-info'>
        <h1 className='book-totle'>{book.title}</h1>
        <div className='book-author'>
          By <span>{book.author}</span> (Author)
        </div>
        <Rating rating={book.rating} reviews={book.reviews}/>
        <div className='book-add-to-cart'>
          <input min="1" max="100" type='number' className='book-add-to-cart-input' value={qty} onChange={event => setQty(event.target.value)}/>
          <button onClick={() => addToCart({...book, quantity: qty})} className='book-add-to-cart-btn'>
            <i  className='bi bi-cart-plus'></i>
              Add To Cart
          </button>
        </div>
        </div>
      </div>
      <p className='book-description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vero aliquam quisquam reiciendis a corrupti consequuntur. Ea ad odio facere ullam sapiente odit asperiores inventore nihil hic sunt! Eveniet ut nisi odio nihil nam nobis id laboriosam sapiente iure quas, provident, autem assumenda beatae cumque eos aliquid nemo illum minus harum corporis sit.
         </p>
        <div className='book-icons'>
          <div className='book-icon'>
            <small>Print Length</small>
            <i className='bi bi-file-earmark-break'></i>
            <b>{book.printLength} Pages</b>
            </div>

            <div className='book-icon'>
            <small>Languages </small>
            <i className='bi bi-globe'></i>
            <b>{book.language}</b>
            </div>

            <div className='book-icon'>
            <small>Publiaction date </small>
            <i className='bi bi-calendar3'></i>
            <b>{book.PublicationDate}</b>
            </div>

          </div>


        </div>
     
        
    
  )
}
export default Book