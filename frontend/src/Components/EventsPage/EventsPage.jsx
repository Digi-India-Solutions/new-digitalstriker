import React, { useState } from 'react'
import './EventsPage.css'

import e1 from './image1.jpeg'
import e2 from './image2.jpeg'
import e3 from './image3.jpeg'
import e4 from './image4.jpeg'
import e5 from './image5.jpeg'
import e6 from './image6.jpeg'
// import e7 from './image7.jpeg'
// import e8 from './image8.jpeg'

function EventsPage() {

  const [activeLocation, setActiveLocation] = useState("All India")

  const data = [
    { id: 1, img: e1, location: "All India" },
    { id: 2, img: e2, location: "All India" },
    { id: 3, img: e3, location: "All India" },
    { id: 4, img: e4, location: "All India" },
    { id: 5, img: e5, location: "All India" },
    { id: 6, img: e6, location: "All India" },
    // { id: 7, img: e7, location: "All India" },
    // { id: 8, img: e8, location: "All India" },
  ]

  const locations = ["All India"]

  const filteredData =
    activeLocation === "All India"
      ? data
      : data.filter(item => item.location === activeLocation)

  return (
    <section className='event-section'>
      <div className="container">
        <div className="bg"></div>

        <div className="event-main-container">

          <div className="heading">
            <span>Events</span>
          </div>

          {/* 🔘 Filter Buttons */}
          <div className="filter-buttons">
            {locations.map((loc, index) => (
              <button
                key={index}
                className={activeLocation === loc ? "active" : ""}
                onClick={() => setActiveLocation(loc)}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* 🖼 Images */}
          <div className="main-container">
            {
              filteredData.map((item) => (
                <div className="col" key={item.id}>
                  <img src={item.img} alt="All India Event" />
                </div>
              ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}

export default EventsPage
