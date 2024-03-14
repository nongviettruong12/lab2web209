import { useState,useEffect} from 'react'

const Productlist = () => {

    const [products,setProduct] = useState([])
    
  useEffect(()=>{
    // console.log(`Click ${load}`); 
    fetch(`http://localhost:3000/products`)
    .then((res)=>res.json()).then((data)=>{
        setProduct(data);        
    });    
  },[])
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product:any)=>{
        return (
<div className="grid grid-cols-1 gap-4">   
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={product.image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">tên sản phẩm: {product.name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">giá tiền : {product.price}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">hãng : {product.brand}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">số lượng : {product.quantity}</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            xem sản phẩm
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

</div>

        )
    })}
    </div>
    </div>
  )
};
export default Productlist;

