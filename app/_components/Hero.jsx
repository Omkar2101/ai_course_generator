import React from "react";

function Hero() {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Create Courses Effortlessly.
              <strong className="font-extrabold text-green-600 sm:block">
                Powered by AI
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Leverage cutting-edge AI to build and launch your courses faster than
              ever. 
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-black px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              {/* <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
