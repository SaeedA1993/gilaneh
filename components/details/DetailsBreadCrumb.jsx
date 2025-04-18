import React from 'react'

const DetailsBreadCrumb = ({title,categoryId,subCat}) => {
  return (
    <div className='mb-6 flex items-center gap-2 flex-wrap text-sm'>
        <p>محصولات ما</p>
        <p>/</p>
        <p>{categoryId ===1 ?'چای':'برنج'}</p>
        <p>/</p>
        <p>{subCat}</p>
        <p>/</p>
        <p className='text-error-600 font-semibold'>{title}</p>
    </div>
  )
}

export default DetailsBreadCrumb