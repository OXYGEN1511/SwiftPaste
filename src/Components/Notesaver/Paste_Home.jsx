import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes,updateToPastes } from '../../redux/PasteSlice';

const Paste_Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();

  const Allpaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = Allpaste.find((p) => p._id === pasteId);
      console.log("Fetched Paste:", paste); // Debugging step

      if (paste) {
        setTitle(paste.title);
        setValue(paste.content);
      }
    }
  }, [pasteId, Allpaste]); // Add `Allpaste` as a dependency

  function createPaste(){
    const paste  = {
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),createdAt:new Date().toISOString(),
    }
  
    // const [content, setContent] = useState('');
    if(pasteId){
        // update
        dispatch(updateToPastes(paste));
    }else{
      //  create
      dispatch(addToPastes(paste));
    }

    // Afte creation or updation
    setTitle('');
    setValue('');
    setSearchParams({});
    // setContent('');
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 min-h-screen text-white">
    {/* Input & Button */}
    <div className="flex flex-row items-center gap-4 w-full max-w-3xl">
      <input
        type="text"
        className="p-3 rounded-xl bg-gray-800 text-white w-2/3 outline-none border border-gray-700 focus:ring-2 focus:ring-green-400"
        placeholder="Enter title here"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button onClick={createPaste} className="px-5 py-3 rounded-xl bg-green-500 text-gray-900 font-semibold hover:bg-green-600 transition duration-200">
        {pasteId ? "Update My Paste" : "Create My Paste"}
      </button>
    </div>

    {/* Textarea */}
    <div className="w-full max-w-3xl mt-4">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Content here"
        rows={12}
        className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-700 outline-none focus:ring-2 focus:ring-green-400 resize-none"
      />
    </div>
  </div>
  )
}

export default Paste_Home
