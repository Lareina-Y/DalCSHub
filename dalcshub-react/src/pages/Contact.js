import React from 'react'
import MailImg from '../assets/images/mail-img.png'
import { Page, PageTitle} from "../components"
import Typography from '@mui/material/Typography'

export function Contact() {
  return (
    <div>
      
      <div class='contactus'>

        <PageTitle title={'Contact DalCSHub'} link={'/contact'}/>
            <Typography>
            <p>Have a Question? We are here to help!</p>
            </Typography>
      
        <div class='contactbox'>
            <div class='contact1'>
              <label>Name: </label>
              <input type='text' size={30}></input>
              <br></br>
              <br></br>
              <textarea rows={10} cols={45}>Enter your quries here...</textarea>
              <br></br>
              <button id="contact-btn" type='submit'>Submit</button>
            </div>

            <div class="contact2">
              <img src={MailImg} alt='mail-icon' height={94} width={94}></img>
              <h4>By Email</h4>
              <p>We are just one step-away. Send us all yours question by just emailing us and we will be happy to serve you.</p>
              <button id="contact-btn2" href="mailto:contactdalcshub@dal.ca">Email</button>
            </div>
        </div>

      </div>

    </div>
  )
}

export default Contact