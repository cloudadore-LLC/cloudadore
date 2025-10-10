import React from 'react'
import Header from '@/views/Header'
import Footer from '@/views/Footer'
import ContactUs from '@/views/ContactUs'
import Faq from '@/views/Faq'
import ContactForm from '@/views/ContactForm'
import HeroBg from '@/views/HeroBg'
import ContactCards from '@/views/ContactCards'



const page = () => {
  return (
    <>  
    <HeroBg/>
      <ContactCards/>
    <ContactForm/>
    <Faq/>
    <ContactUs/>
    </>
  )
}

export default page