import React from 'react';
import './work.css';
import portfolio_1 from '../../assets/portfolio-1.png';
import portfolio_2 from '../../assets/portfolio-2.png';
import portfolio_3 from '../../assets/portfolio-3.png';
import portfolio_4 from '../../assets/portfolio-4.png';
import portfolio_5 from '../../assets/portfolio-5.png';
import portfolio_6 from '../../assets/portfolio-6.png';

function Work() {
  return (
    <section className="works">
        <h2 className="workTittle">My Portfolio</h2>
        <span className="workdesc">
        I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>
        <div className="workImgs">
            <img src={portfolio_1} alt="portfolio_1" className="workimg" />
            <img src={portfolio_2} alt="portfolio_2" className="workimg" />
            <img src={portfolio_3} alt="portfolio_3" className="workimg" />
            <img src={portfolio_4} alt="portfolio_4" className="workimg" />
            <img src={portfolio_5} alt="portfolio_5" className="workimg" />
            <img src={portfolio_6} alt="portfolio_6" className="workimg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Work