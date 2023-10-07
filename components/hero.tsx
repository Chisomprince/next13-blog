export default function Hero() {
  return (
    <section className="bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://source.unsplash.com/random/480x360?1')] bg-cover repeat-0 text-white">
      <div className="container mx-auto flex flex-col items-center px-4 py-24 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leadi sm:text-5xl">
          Quisquam necessita vel
          <span className="text-white">laborum doloribus</span>delectus
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p>
        {/* <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-600 text-gray-50">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">
            Learn more
          </button>
        </div> */}
      </div>
    </section>
  );
}
