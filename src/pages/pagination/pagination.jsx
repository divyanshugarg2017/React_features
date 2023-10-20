import React,{useEffect,useState} from 'react'

const Pagination = () => {

    const [products,setProducts] = useState()
    const locale = navigator.language
    console.log(locale)

    const fetchProducts = async() => {
        const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
        const data= await response.json()
        setProducts(data)
        console.log(data,"this is the data")
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
  return (
    <div>Pagination</div>
  )
}

export default Pagination