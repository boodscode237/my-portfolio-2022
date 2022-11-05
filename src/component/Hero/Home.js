import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD :)</h3>
            <h1>
              Hi, I’m <span>Brice Дональд</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Student.", " Developer.", " Software Developer.", " Coffeemaker.", " Guy searching for experience.", " Guy searching that speak 5 languages."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I use various languages to code: </p>
            <span className="language">
              languages = []
            </span>
            <p>
              <Typewriter words={[".append('Javascript')", ".append('Python')", ".append('C#')", ".append('ReactJS')",
                ".append('NodeJS')", ]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
            </p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <SocialIcon url={'https://github.com/boodscode237'}/>
                  </button>
                  <button className='btn_shadow'>
                    <SocialIcon url={'https://twitter.com/LiubliuYa'}/>
                  </button>
                  <button className='btn_shadow'>
                    <SocialIcon url={'https://www.linkedin.com/in/brice-abodo-7995061b0'}/>
                  </button>
                  <button className='btn_shadow'>
                    <SocialIcon url={'https://t.me/repeat_afterme_15'}/>
                  </button>
                  <button className='btn_shadow'>
                    <SocialIcon url={'https://www.facebook.com/don.bri.965'}/>
                  </button>

                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
