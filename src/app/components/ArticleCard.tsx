import React from 'react';
import { Article } from '../../types';
import Link from 'next/link';
import Image from 'next/image';

type ArticleCardProps = {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='shadow my-4 flex flex-col' key={article.id}>
      <Link href={`articles/${article.id}`} className='hover:opacity-75'>
        <Image
          src='/sample.png'
          alt=''
          width={1280}
          height={300}
        />
      </Link>
      <div className='bg-white flex flex-col justify-start p-6'>
        <Link href={`articles/${article.id}`} className='text-blue-700 pb-4 font-bold'>
          Technology
        </Link>
        <Link href={`articles/${article.id}`} className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'>
          {article.title}
        </Link>
        <p className='text-sm pb-3 text-slate-900'>published on {new Date(article.createdAt).toLocaleDateString()}</p>
        <a href={`articles/${article.id}`} className='text-slate-900 pb-6'>
          {article.content.length > 70
            ? article.content.substring(0, 70) + "..."
            : article.content}
        </a>
        <Link href={`articles/${article.id}`} className='text-pink-800 hover:text-black'>続きを読む</Link>
      </div>
    </article>
  )
}

export default ArticleCard
