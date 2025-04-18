import React from 'react'
import footerData from '@/utils/footerData';
import SingleFooterLink from './SingleFooterLink';

const FooterLinks = () => {
  return (
    <>
      <div className="mb-5 py-5 px-0 xs:w-[400px] md:w-[300px] md:mb-5 md:ml-5 md:p-0">
        <ul className="grid grid-cols-2 gap-2 list-none ">
          {footerData.map((item) => (
            <SingleFooterLink item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
    
  )
}

export default FooterLinks