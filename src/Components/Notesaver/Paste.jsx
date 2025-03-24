import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../../redux/PasteSlice";
import { FiEdit, FiEye, FiTrash2, FiCopy, FiShare2, FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

const Paste = () => {
  const paste = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filterData = paste.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }
  function handleShare(title, content) {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: content,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  }
  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Bar */}
      <div className="relative">
        <FiSearch className="absolute left-3 top-3 text-gray-500" />
        <input
          className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
          type="search"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Paste List */}
      <div className="mt-6 space-y-4">
        {filterData.length > 0 ? (
          filterData.map((paste) => (
            <div key={paste.id} className="p-5 bg-white shadow-md rounded-lg border border-gray-200">
              {/* Title */}
              <h2 className="text-xl font-semibold text-gray-800">{paste.title}</h2>
              <p className="text-gray-600 mt-2">{paste.content}</p>

              {/* Actions */}
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">{paste.createdAt}</span>
                <div className="flex space-x-3">
                  <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    <FiEdit className="inline-block mr-1" /> 
                    <a href={`/?pasteId=${paste?._id}`}>   Edit</a>
                  
                  </button>
                  <button className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition">
                    <FiEye className="inline-block mr-1" /> 
                    <a href={`/pastes/${paste?._id}`}>View</a>
                  </button>
                  <button
                    onClick={() => handleDelete(paste.id)}
                    className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <FiTrash2 className="inline-block mr-1" /> Delete
                  </button>
                  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition" onClick={()=>{
                    navigator.clipboard.writeText(paste?.content) 
                    toast.success("copy to Clipboard")
                  }}>
                    <FiCopy className="inline-block mr-1" /> Copy
                  </button>
                  <button className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition"  onClick={() => handleShare(paste?.title, paste?.content)} >
                    <FiShare2 className="inline-block mr-1" /> Share
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-6">No matching pastes found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
