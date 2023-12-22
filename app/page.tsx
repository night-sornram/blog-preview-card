import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen flex justify-center items-center'>
      <div className=' w-96 space-y-4 bg-white flex flex-col justify-center p-5 border shadow-[15px_15px_0px_1px_rgba(0,0,0,1)] border-black rounded-xl'>
        <Image
        src={"/images/illustration-article.svg"}
        width={336}
        height={201}
        className=' rounded-xl'
        alt='main'/>
        <div className=' text-[16px] bg-custom-100 flex justify-center items-center text-custom-400 w-20 py-1 px-3 rounded-md  font-bold'>
          Learning
        </div>
        <div className=' text-[16px]'>
          Published 21 Dec 2023
        </div>
        <div className=' text-2xl cursor-pointer font-bold text-custom-100'>
          HTML & CSS foundations 
        </div>
        <div className=' text-custom-300'>
          These languages are the backbone of every website, defining structure, content, and presentation.
        </div>
        <div className=' flex flex-row'>
          <Image
          src={"/images/image-avatar.webp"}
          width={64}
          height={65}
          className=' w-7 h-7 '
          alt='profile'/>
          <div className=' ml-3 text-sm font-bold flex justify-center items-center'>
            Greg Hooper
          </div>
        </div>
      </div>
    </div>
  )}