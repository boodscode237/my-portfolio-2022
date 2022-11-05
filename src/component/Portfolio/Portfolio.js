import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {Portfolio_data.map(({image, category, title, description, link}, index) => {
              return <Card key={index} image={image} category={category} title={title} description={description} link={link}/>
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
