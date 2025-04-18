import React from 'react'
import Image from 'next/image'

const SidebarLogo = () => {
  return (
    <>
    <Image
          className="mx-auto mb-5 rounded-xl overflow-hidden"
          src="/images/shoplogo.png"
          width={200}
          height={150}
          alt="logo of tea cup"
        />
        <h2 className="text-center text-xl text-primary-800">
          فروشگاه گیلانه
        </h2>
    </>
  )
}

export default SidebarLogo