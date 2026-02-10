import React, { useEffect, useState } from 'react'
import './Telecom.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Telecom() {
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

  const opticalFiberTools = products.filter(
    (item) => item.category === 'Optical Fiber Tools'
  )

  return (
    <section className="telecom-section">
      <div className="container">
        <h2 className="page-title">Optical Fiber Tools</h2>

        {loading && <p className="status-text">Loading products...</p>}

        {!loading && opticalFiberTools.length === 0 && (
          <p className="status-text">No products found</p>
        )}

        <div className="product-grid">
          {opticalFiberTools.map((item) => (
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

export default Telecom
