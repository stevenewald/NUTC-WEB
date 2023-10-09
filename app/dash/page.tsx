export default function Example() {
  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">Contest ended</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">NUTC has completed</h1>
          <p className="mt-6 text-base leading-7 text-gray-100">You'll receive results within the next week.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://nu-fintech.web.app"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go to the NUTC main site
            </a>
            <a href="mailto:nuft@u.northwestern.edu" className="text-sm font-semibold text-gray-100">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

