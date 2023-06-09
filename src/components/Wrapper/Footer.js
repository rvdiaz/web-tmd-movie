import React from 'react'
import { data } from '../../data/defaultData'

export const Footer = () => {
  const {footerLinks}=data;
  return (
    <div className='footer'>
      {footerLinks.map((item,index)=>(
        <a 
          href={item.link}
          key={index}
          className='footerLink'
        >{item.title}</a>
      ))}
    </div>
  )
}
