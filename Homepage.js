import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, filterByCategory, sortAsc, sortDsc ,getAllProducts,addToCart } from '../Redux/ProductsSlice'
import { search } from '../Redux/ProductsSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

 import './Homepage.css'
const HomePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userName = useSelector(state=>state.login.userName)
    let items = useSelector(state=>state.products.temp)
    let load = useSelector(state=>state.products.status)
    const [searchTxt,setSearchTxt] = useState('')
    useEffect(()=>{
        dispatch(fetchProducts())
        dispatch(getAllProducts())
    },[])
    // console.log(items)
    const handleSearch = () => {
        let txt = searchTxt.toLowerCase()
        dispatch(search(txt))
        console.log(txt)
    }
  
    const handleLogout =()=>{
        navigate('/')
        // toast.error("logged out")
    }
    const handleCart = () => {
        navigate('/homePage/Cart')
    }
    const handleAddtoCart = (item) => {
        console.log(item)
        dispatch(addToCart(item))
    }
  return (
   <>
   <div className='home-main'>
    <div className='header'>
    <div className='welcome'><p>Welcome {userName}</p></div>
    <div>
   <input type='text' placeholder='search for products here' onChange={e=>setSearchTxt(e.target.value)} />
   <button  onClick={handleSearch} className='search-btn'>Search</button>
   </div>
   <div>
     <button onClick={handleCart} className='cart'>Cart</button>
   
   </div>
   </div>
   <div className='sortContainer'>
    <p>Sort by price:</p>
    <button onClick={()=>dispatch(sortAsc())}>Low to High</button>
    <button onClick={()=>dispatch(sortDsc())}>High to Low</button>
    </div>
    <p>Sort by category:</p>
    <div className='productsCategory'>
        <button className='sortbtn'onClick={()=>dispatch(getAllProducts())} >Get all products</button>
        <button className='sortbtn'onClick={()=>dispatch(filterByCategory(`men's clothing`))}>Mens Clothing</button>
        <button className='sortbtn'onClick={()=> dispatch(filterByCategory(`jewelery`))}>Jewellery</button>
        <button className='sortbtn'onClick={()=>dispatch(filterByCategory('electronics'))}>Electronics</button>
        <button className='sortbtn'onClick={()=>dispatch(filterByCategory(`women's clothing`))}>Womens Clothing</button>
    </div>
   <div className='product-container'>
    {
        items?.map((item)=>{
            return <div className='product-card' key={item.id}>
                <p className='title'>{item.title}</p>
                <img src={item.image} />
                <div>
                    {/* <span className='desc'>
                    {item.description}</span> */}
                    <br>
                    </br>
                    <span className='price'>
                    $ {item.price}
                    </span>
                    {/* <button className='cartbtn'>Add to cart</button> */}

                    
                      <span className='cart-btn' onClick={()=>handleAddtoCart(item)}><button>Add to Cart</button></span> 
                       
                      
                    </div>
                  
                    
                </div>
                
        })
        
     
    }
   </div>
   <button onClick={handleLogout} className='logout-btn'>Logout</button>
   </div>
   </>
  )
}
export default HomePage