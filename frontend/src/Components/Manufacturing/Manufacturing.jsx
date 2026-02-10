import React, { useEffect, useState } from 'react'
import './Manufacturing.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Manufacturing() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE || ''}/api/allProduct`
        )
        setProducts(res.data?.data || [])
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  const passiveProducts = products.filter(
    (item) => item.category === 'Passive Product'
  )

  return (
    <section className="manufacturing-section">
      <div className="container">
        <h2 className="page-title">Passive Products</h2>

        {loading && <p className="status-text">Loading products...</p>}

        {!loading && passiveProducts.length === 0 && (
          <p className="status-text">No passive products found</p>
        )}

        <div className="product-grid">
          {passiveProducts.map((item) => (
            <Link
              to={`singleProduct/${item._id}`}
              className="product-card"
              key={item._id}
            >
              <div className="image-box">
                <img
                  src={item.img}
                  alt={item.name}
                  onError={(e) => {
                    e.target.src =
                      'https://via.placeholder.com/300x220?text=No+Image'
                  }}
                />
              </div>
              <div className="product-info">
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Manufacturing
