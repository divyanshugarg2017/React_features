import React, { useEffect, useState } from 'react'
import "./pagination.css"

const Pagination = () => {

  const [products, setProducts] = useState()
  const [page, setPage] = useState(1)
  const [totalPages,setTotalPages] = useState(0)

  const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()
    setProducts(data)
    setTotalPages(data.total/10)
  }
  console.log(products, "these are the products")
  useEffect(() => {
    fetchProducts()
  }, [])

  const selectedPageHandler = (selectedIndex) => {
    if (selectedIndex >= 1 && selectedIndex <= products?.products.length/10 && selectedIndex !== page) {
      setPage(selectedIndex)
    }

  }

  return (
    <div>
      <div className='Products'>
        {products?.products?.slice(page * 10 - 10, page * 10).map((item, index) => {
          return (<div key={index}>
            <img className='product__image' src={item.images[0]} alt="product images" />
            <div className='product__description'>
              {item?.title}<span>{item?.price}</span>
            </div>

          </div>)
        })}
      </div>
      {products?.products.length > 0 &&
        <div className='pagination'>
          <span className={page>1 ? "":"pagination__disable"} onClick={() => { selectedPageHandler(page - 1) }}>prev</span>
          <span>{
            [...Array(products?.products.length / 10)].map((_, index) => {
              return (
                <span onClick={() => { selectedPageHandler(index + 1) }}>{index + 1}</span>
              )
            })
          }</span>
          <span className={page<products?.products.length/10 ? "":"pagination__disable"} onClick={() => { selectedPageHandler(page + 1) }}>next</span>
        </div>}
    </div>
  )
}

export default Pagination