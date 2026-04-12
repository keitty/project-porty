function Hero() {
  return (
    <section className="p-16 flex flex-col items-center dark:bg-gray-800">
      <h1 className="font-bold text-3xl md:text-5xl lg:text-7xl dark:text-white">Hi, I'm Keitty</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-500 dark:text-gray-300 mt-2">Front-End Developer & Solution Engineer</p>
      <button className="mt-6 bg-lime-500 text-white px-6 py-3 rounded-full font-bold hover:bg-lime-600 dark:bg-lime-600 dark:hover:bg-lime-700">
        View My Work
      </button>
    </section>
  )
}

export default Hero