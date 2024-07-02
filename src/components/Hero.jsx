import React from 'react'

const Hero = () => {
  return (
    <div>
        <section class="text-gray-600 body-font">
        <div class="container mx-auto ml-5 flex flex-wrap py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div class=" text-5xl lg:text-6xl xl:text-7xl md:text-5xl sm:text-4xl font-bold lg:tracking-tight xl:tracking-tighter text-black">
                    Marketing website done with Astro
                </div>
                <p class="  mt-4 leading-relaxed text-xl text-gray-400 font-semibold">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                <div class="flex justify-center">
                    <button class="inline-flex items-center bg-black text-white border-0 py-3 px-6 focus:outline-none hover:bg-white hover:text-black rounded text-lg mt-4 md:mt-0 shadow-md gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                        Download For Free
                    </button>
                    <button class="inline-flex ml-4 gap-2 items-center border-2 border-solid border-black bg-white text-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-100 hover:text-black rounded text-lg mt-4 md:mt-0 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-gray-800 hover:text-black transition-colors duration-300">
                            <path fill-rule="evenodd" d="M12 0C5.373 0 0 5.373 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.258.793-.577 0-.285-.013-1.04-.013-2.04-3.02.654-3.66-1.46-3.66-1.46-.494-1.252-1.205-1.585-1.205-1.585-.984-.67.075-.657.075-.657 1.085.076 1.654 1.114 1.654 1.114.963 1.647 2.524 1.17 3.14.894.098-.697.378-1.17.687-1.44-2.407-.274-4.94-1.203-4.94-5.356 0-1.183.42-2.147 1.114-2.903-.113-.275-.482-1.376.105-2.865 0 0 .908-.29 2.975 1.107A10.313 10.313 0 0 1 12 5.538c.987.003 1.983.132 2.918.385 2.065-1.397 2.974-1.107 2.974-1.107.59 1.489.22 2.59.107 2.865.694.756 1.113 1.72 1.113 2.903 0 4.166-2.536 5.078-4.95 5.348.39.335.74 1.002.74 2.02 0 1.459-.013 2.636-.013 2.997 0 .32.192.694.8.576C20.565 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub Repo
                    </button>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img class="object-cover object-center rounded" alt="hero" src="public\hero.webp" height="720" width="600"></img>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
