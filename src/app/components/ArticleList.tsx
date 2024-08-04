import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href='#'>
          <Image
            src='/sample.png'
            alt=''
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Next.jsの勉強中</Link>
          <p>By すずゆー, published on 2024/8/5</p>
          <a href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus voluptatem iste soluta suscipit delectus id voluptatum tempora culpa, consequatur quo tempore excepturi commodi doloribus amet, mollitia recusandae est deserunt.
          </a>
          <Link href='#'>続きを読む</Link>
        </div>
      </article>
    </div>
  )
}

export default ArticleList
