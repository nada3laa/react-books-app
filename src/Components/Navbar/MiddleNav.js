import { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../../context/cartContext'

export default function MiddleNav() {
  const {cartItemsLength} = useContext (cartContext);
  return (
    <div>
        {/* Start Header middle Section */}

    <div className='header-middle'>
        <Link to="/" className='header-middle-logo'>
          <b>Book</b>
          <i className="fa-solid fa-book-open logoo "></i>
        <b>Store</b>
        </Link>
        <form className="d-flex input-group w-auto ">
            <i className="fa-solid fa-magnifying-glass searchicon-edit" style={{color: "#000000;"}}></i>
            <input 
              type="search"
              className="form-control rounded-pill search-edit mr-5 search-input  "
              placeholder="Search in Our Store"
              aria-label="Search"
            />
        
          </form>
        <Link to="/Cart" className='header-middle-cart'>
         {cartItemsLength > 0 &&(
           <b className='cart-notification'>{cartItemsLength}</b>
         )}
        <i className="bi bi-cart2 cart-icon"></i>

        </Link >
    </div>

    {/* End Header Moidle Section */}
    </div>
  )
}
