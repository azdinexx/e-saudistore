import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex my-16'>
      <section className='w-2/3 flex flex-col gap-4 text-xl py-20 px-10  relative before:absolute before:top-0 before:right-0 before:w-24 before:aspect-square before:border-t before:border-r after:absolute after:bottom-0 after:right-0 after:w-72 after:aspect-square after:border-b after:border-r shadow-sm'>
        <p>تجري الآن إعادة صياغة موقعنا الإلكتروني</p>
        <p className='max-w-2xl'>
          نحن متحمسون لإطلاق موقعنا الإلكتروني الجديد قريبًا! سيوفر موقعنا
          الإلكتروني الجديد تجربة تسوق أفضل وأسرع وأكثر ملاءمة لك.
        </p>
        <div className='py-10 space-y-3'>
          <p>
            فيما يلي بعض الأشياء التي يمكنك توقعها من موقعنا الإلكتروني الجديد:
          </p>

          <ul className='pr-4'>
            <li className='relative before:absolute before:top-1 before:-right-4 before:content-["•"] '>
              تصميم جديد وجذاب
            </li>
            <li className='relative before:absolute before:top-1 before:-right-4 before:content-["•"] '>
              عملية تسوق أسهل وأسرع
            </li>
            <li className='relative before:absolute before:top-1 before:-right-4 before:content-["•"] '>
              خيارات دفع أكثر
            </li>
            <li className='relative before:absolute before:top-1 before:-right-4 before:content-["•"] '>
              شحن مجاني على جميع الطلبات فوق 100 ريال سعودي
            </li>
            <li className='relative before:absolute before:top-1 before:-right-4 before:content-["•"] '>
              دعم العملاء على مدار 24 ساعة في اليوم، 7 أيام في الأسبوع
            </li>
          </ul>
        </div>
        <form action='' className='flex flex-col gap-3 max-w-lg '>
          <p className='text-green-500 text-2xl'>
            سجل بريدك الإلكتروني لتكون من أوائل الذين يعرفون عندما يتم إطلاق
            موقعنا الإلكتروني الجديد!
          </p>
          <input
            type='text'
            className='border p-2 rounded-md mt-3 bg-gray-50'
            placeholder='بريدك الإلكتروني'
          />
        </form>
      </section>
      <div className='w-1/3 h-[800px] relative  rounded-t-[250px] overflow-hidden'>
        <Image
          fill
          objectFit='cover'
          src={
            'https://images.unsplash.com/photo-1585085952480-811ff8859fa1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          }
          alt='Picture of the author'
        />
      </div>
    </main>
  );
}
