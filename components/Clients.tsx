/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { InfiniteMovingCards } from './ui/infiniteMovingCards'
import { companies, testimonials } from '@/data'
import Image from 'next/image';

const Clients = () => {
  return (
    <div
        className=" py-20" id="testimonials">
        <h1 className="heading">
            Kind words from
            <span className="text-purple"> Satisfied Clients</span>
        </h1>
        <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards 
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10">
            {companies.map(({id, img, name, nameImg }) => (
                // eslint-disable-next-line react/jsx-no-comment-textnodes
                <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
                    // eslint-disable-next-line @next/next/no-img-element, @next/next/no-img-element
                    <img 
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                    />
                     <img 
                        src={nameImg}
                        alt={name}
                        className="md:w-24 w-20"
                    />
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Clients