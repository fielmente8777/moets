import Image from 'next/image'
import React from 'react'

const Banner = () => {
    return (
        <div className='pl-5 lg:pl-28 flex lg:flex-row flex-col justify-between items-center gap-10 lg:gap-20 py-10 '>

            <div className='w-full lg:w-[45%] flex flex-col justify-center gap-5  border-2 border-red-900'>
                <div className='flex flex-col gap-1'>
                    <p className='text-lg font-semibold text-[#5A150F]'>From Tandoors to Timeless Taste:</p>
                    <h1 className='text-5xl font-semibold text-[#5A150F]'>THE MOETS LEGACY LIVES ON</h1>
                </div>

                <p className='text-[#534E4D]'>In the 1960s, inspired by the success of Bahar-E-Kebab, a renowned ITC restaurant, Mr. P.P. Bindra decided to bring authentic barbecue to Delhi. His dream led to the creation of MOETS in Defence Colony, where age-old recipes and a team of skilled chefs set the foundation for a culinary icon.
                </p>
                <p className='font-semibold text-[#534E4D]'> "We started with one mission: to bring people together over great food." — Mr. P.P. Bindra </p>
            </div>
            <div className='w-full relative h-[30rem] lg:w-[55%] border-2 border-red-900'>
                <Image
                    src="/banner.png"
                    alt="Luxury Hotel Room"
                    fill
                    className="object-cover h-full"
                    priority
                />
            </div>
        </div>
    )
}

export default Banner