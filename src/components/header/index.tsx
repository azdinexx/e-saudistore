import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <header className='p-3 text-lg flex justify-between items-center'>
      <ul className='flex gap-6' dir='rtl'>
        <li>الرئيسية</li>
        <li>اتصل بنا</li>
        <li>احدث الاخبار</li>
      </ul>
      <div className='h-16 w-48 relative'>
        <Image
          src='/logo.png'
          alt='ecommerce saudi arabia store logo'
          fill
          objectFit='cover'
          quality={100}
        />
      </div>
    </header>
  );
}

export default Header;
