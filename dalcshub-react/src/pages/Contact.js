import React from 'react'
import MailImg from '../assets/images/mail-img.png'
import CallImg from '../assets/images/phone-img.png'

export function Contact() {
  return (
    <div>
      
      <div class='contactus'>
        <p>Have a Question? We are here to help!!! </p>
        <h2>Contact DalCSHub</h2>

        <div class='contactbox'>
            <div class='contact1'>
              <img src={CallImg} alt='call-icon' height={75} width={75}></img>
              <h4>By Phone</h4>
              <p>North America Toll Free:</p>
              <p>1-877-XXX-XXXX</p>
            </div>

            <div class="contact2">
              <img src={MailImg} alt='mail-icon' height={94} width={94}></img>
              <h4>By Email</h4>
              <p>We are just one step-away. Send us all yours question by just emailing us and we will be happy to serve you</p>
              <button type='submit' href='contactdalcshub@dal.ca'>Email</button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Contact