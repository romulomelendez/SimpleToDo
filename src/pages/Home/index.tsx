export const Home: React.FC = () => (

  <div className="w-screen bg-slate-400">
    <div className="flex-col gap-2 h-screen p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center justify-start">
      <input
        type="text"
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
        placeholder="Create Tasks here!"
      />
      <input
        type="text"
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
        placeholder="Author"
      />

      <button
        type="button"
        className="bg-purple-900 w-auto p-2 rounded-md shadow-md text-white"
      >
        Create
      </button>
    </div>
  </div>

)