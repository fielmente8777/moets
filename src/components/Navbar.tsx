import React from 'react'
import { Facebook, Insta, Logo, X } from "../icons/Logo"
import { NavLink } from '@/data/NavLink'
import Link from 'next/link'
const Navbar = () => {


    return (
        <div className='bg-[#EFE7DA] px-5'>
            <div className='flex max-w-[1224px] mx-auto justify-between items-center'>
                <div className=' py-4 text-black relative font-mono'>
                    <Logo />
                </div>

                <div className='flex gap-10 items-center rounded-full'>
                    {NavLink.map((nav) => (
                        <Link className='flex gap-10 text-[#5A150F]' href={nav.link} key={nav.id}>
                            {nav.name}
                        </Link>
                    ))}

                    <div className='flex gap-8 text-[#5A150F]' >
                        <Insta />
                        <X />
                        <Facebook />
                    </div>


                </div>


            </div>
        </div>


    )
}

export default Navbar