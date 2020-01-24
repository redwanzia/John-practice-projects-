import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'


const ErrorPage = () => {
  return <Hero>
  
  <Banner title='404' subtitle='page not found'>
    <Link to='/' className='btn-primary'>Return Home</Link>  
  </Banner>
  
  </Hero>
}

export default ErrorPage
