import React from 'react'
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const Team = () => {
  return (
    <>
    <div className='text-white px-10 lg:px-60 py-0 lg:py-20'>
        <h1 className='text-center py-10 text-5xl font-bold'>Our Team</h1>
        <p>We're committed to making email communication easy, and we're always looking for ways to improve our platform. Thank you for choosing our website.Our website is completely open source and also open to contributions. Check github for contributing.</p>
        <div className='flex lg:flex-row flex-col justify-around py-20 pb-5 items-center'>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src="https://avatars.githubusercontent.com/u/25835195?v=4" alt="" className='rounded-[50%] h-[200px]'/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Anurag Deo</h2></a>
                <h3 className='text-center pb-4'>Leader</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href=""><SiLinkedin size={30}/></a>
                    <a href=""><SiGithub size={30}/></a>
                </div>
            </div>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src="https://avatars.githubusercontent.com/u/25835195?v=4" alt="" className='rounded-[50%] h-[200px]'/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Anurag Deo</h2></a>
                <h3 className='text-center pb-4'>Leader</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href=""><SiLinkedin size={30}/></a>
                    <a href=""><SiGithub size={30}/></a>
                </div>
            </div>
            <div className='w-48 pb-10'>
                <a href="https://linktr.ee/anuragdeo" ><img src="https://avatars.githubusercontent.com/u/25835195?v=4" alt="" className='rounded-[50%] h-[200px]'/></a>
                <a href="https://linktr.ee/anuragdeo" ><h2 className='transition ease-in-out text-center text-2xl font-bold hover:text-[20px] py-2 pt-4'>Anurag Deo</h2></a>
                <h3 className='text-center pb-4'>Leader</h3>
                <div className='flex flex-row justify-evenly'>
                    <a href=""><SiLinkedin size={30}/></a>
                    <a href=""><SiGithub size={30}/></a>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Team