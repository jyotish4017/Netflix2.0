import { InformationCircleIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../constants/movie'
import { Movie } from '../typings'
import { FaPlay } from 'react-icons/fa'

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals} : Props) {
    const [movie, setMovie] = useState<Movie | null>(null)
    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
      }, [netflixOriginals])
  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[72vh] lg:justify-end lg:py-12">
        {/* with layout fill,, we need absolute/relative in parent */}
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          layout="fill"
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          objectFit="cover"
        />
        </div>

        <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
            {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
            {movie?.overview}
        </p>
        <div className="flex space-x-3">
            <button className="bannerButton bg-white text-black">
              <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
              Play
            </button>

            <button
            className="bannerButton bg-[gray]/70"
            //   onClick={() => {
            //     setCurrentMovie(movie)
            //     setShowModal(true)
            //   }}
            >
            <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
            </button>
      </div>


    </div>
  )
}

export default Banner

//to use text-shadow
// npm i --save-dev tailwindcss-textshadow
// require('tailwindcss-textshadow')