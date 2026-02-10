import React, { useEffect, useState } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function SinglePage() {
    const [allProduct, setAddProduct] = useState(null);
    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      })
  }, [])

    useEffect(() => {
        if (!id) {
            setAddProduct({});
            return;
        }
        setAddProduct(null);
        const fetchData = async () => {
            try {
                const apiBase = import.meta.env.VITE_API_BASE || "";
                const response = await axios.get(`${apiBase}/api/singleProduct/${id}`);
                const product = response.data?.data;
                setAddProduct(product || {});
            } catch (error) {
                console.error(error);
                setAddProduct({});
            }
        };
        fetchData();
    }, [id]);
    if (allProduct === null) {
    return (
      <section className='singlepage-section'>
        <div className="container">
          <div className="heading"><span>Product Detail</span></div>
          <div className="main-container"><p>Loading...</p></div>
        </div>
      </section>
    );
  }
  if (!allProduct._id) {
    return (
      <section className='singlepage-section'>
        <div className="container">
          <div className="heading"><span>Product Detail</span></div>
          <div className="main-container"><p>Product not found.</p></div>
        </div>
      </section>
    );
  }

  return (
    <section className='singlepage-section'>
      <div className="container">
        <div className="heading">
          <span>Product Detail</span>
        </div>
        <div className="main-container">
          <div className="img">
            <img src={allProduct.img} alt={allProduct.name} />
          </div>
          <div className="product-detail">
            <h2>{allProduct.name}</h2>
            <p>{allProduct.des}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePage
