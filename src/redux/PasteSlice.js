import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  pastes: JSON.parse(localStorage.getItem("pastes")) || [], // Ensure it's an array
};

export const PasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;


      // Create a new array (avoid direct mutation)
      const updatedPastes = [...state.pastes, paste];

      // Update local storage
      localStorage.setItem("pastes", JSON.stringify(updatedPastes));

      // Update Redux state
      state.pastes = updatedPastes;

      toast.success("Paste created successfully");
    },

    updateToPastes: (state, action) => {
      const { id, newData } = action.payload;
      state.pastes = state.pastes.map(paste =>
        paste.id === id ? { ...paste, ...newData } : paste
      );

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste updated successfully");
    },

    resetAllPastes: (state) => {
      state.pastes = [];
      localStorage.removeItem("pastes");
      toast.success("All pastes reset successfully");
    },

    removeFromPastes: (state, action) => {
      const id = action.payload;
      state.pastes = state.pastes.filter(paste => paste.id !== id);

      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast.success("Paste removed successfully");
    },
  },
});

// Export Actions
export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = PasteSlice.actions;

// Export Reducer
export default PasteSlice.reducer;
