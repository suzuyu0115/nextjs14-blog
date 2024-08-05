import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ArticleList = () => {
  return (
    <div>
      <article className='shadow my-4 flex flex-col'>
        <Link href='#' className='hover:opacity-75'>
          <Image
            src='/sample.png'
            alt=''
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
            Next.jsの勉強中
          </Link>
          <p className='text-sm pb-3 text-slate-900'>published on 2024/8/5</p>
          <a href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus voluptatem iste soluta suscipit delectus id voluptatum tempora culpa, consequatur quo tempore excepturi commodi doloribus amet, mollitia recusandae est deserunt.
          </a>
          <Link href='#' className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
      <article className='shadow my-4 flex flex-col'>
        <Link href='#' className='hover:opacity-75'>
          <Image
            src='/sample.png'
            alt=''
            width={1280}
            height={300}
          />
        </Link>
        <div className='bg-white flex flex-col justify-start p-6'>
          <Link href="#" className='text-blue-700 pb-4 font-bold'>
            Technology
          </Link>
          <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
            Next.jsの勉強中
          </Link>
          <p className='text-sm pb-3 text-slate-900'>published on 2024/8/5</p>
          <a href="#" className='text-slate-900 pb-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus voluptatem iste soluta suscipit delectus id voluptatum tempora culpa, consequatur quo tempore excepturi commodi doloribus amet, mollitia recusandae est deserunt.
          </a>
          <Link href='#' className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
