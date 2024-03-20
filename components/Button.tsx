"use client"
// The Above msg is to indecate Next That this Particular Componen is Client Comp as Comp are Server omp as default

export const Button = () => {
  return (
    <div>
      <button
        onClick={function () {
          console.log("client side ")
        }}
        type="button"
        className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Sign in
      </button>
    </div>
  )
}
