import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"
import { useForm } from "react-hook-form";
import {SocialIcon} from "react-social-icons";

const Contact = () => {


  const { register, handleSubmit } = useForm();

  const onSubmit = formData => {
    window.location.href = `mailto:boodscode@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.fullname}. ${formData.message} (${formData.email})})`
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACT</h4>
            <h1>Contact With Me</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={'https://t4.ftcdn.net/jpg/03/90/11/51/360_F_390115184_pC62LQRe5VlME5w1I1XgUxm6TeKMlQ7Q.jpg'}
                       height={90}
                       alt='contact us image' />
                </div>
                <div className='details'>
                  <h1>Brice Donald</h1>
                  <p>Software Developer</p>
                  <p>I am available for freelance work. Connect with me via and call in to my account.</p> <br />
                  <p>Phone: +79935216739</p>
                  <p>Email: boodscode@gmail.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <SocialIcon url={'https://github.com/boodscode237'}/>
                    </button>
                    <button className='btn_shadow'>
                      <SocialIcon url={'https://www.linkedin.com/in/brice-abodo-7995061b0'}/>
                    </button>
                    <button className='btn_shadow'>
                      <SocialIcon url={'https://t.me/repeat_afterme_15'}/>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>YOUR NAME</span>
                    <input {...register('fullname')} type='text' name='fullname'/>
                  </div>
                  <div className='input row'>
                    <span>PHONE NUMBER </span>
                    <input {...register('number')} type='number' name='phone'/>
                  </div>
                </div>
                <div className='input'>
                  <span>EMAIL </span>
                  <input type='email' {...register('email')} name='email'/>
                </div>
                <div className='input'>
                  <span>SUBJECT </span>
                  <input {...register('subject')} type='text' name='subject'/>
                </div>
                <div className='input'>
                  <span>YOUR MESSAGE </span>
                  <textarea {...register('message')} cols='30' rows='10' name='message'></textarea>
                </div>
                <button className='btn_shadow'>
                  SEND MESSAGE <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
