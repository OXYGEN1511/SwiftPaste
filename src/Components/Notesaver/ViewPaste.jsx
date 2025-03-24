import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {

  const {id} = useParams();
  const Allpaste = useSelector((state)=>state.paste.pastes)
  const paste = Allpaste.filter((p)=>p._id=== id)[0];

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
    {/* Input & Button */}
    <div className="flex flex-row items-center gap-4 w-full max-w-3xl">
      <input
        type="text"
        className="p-3 rounded-xl bg-gray-800 text-white w-2/3 outline-none border border-gray-700 focus:ring-2 focus:ring-green-400"
        placeholder="Enter title here"
        value={paste.title}
        onChange={(e) => setTitle(e.target.value)}
        disabled
      />

      {/* <button onClick={createPaste} className="px-5 py-3 rounded-xl bg-green-500 text-gray-900 font-semibold hover:bg-green-600 transition duration-200">
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button> */}
    </div>

    {/* Textarea */}
    <div className="w-full max-w-3xl mt-4">
      <textarea
        value={paste.content}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Content here"
        rows={12}
        disabled
        className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-green-400 resize-none"
      />
    </div>
  </div>

  )
}

export default ViewPaste
