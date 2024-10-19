import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useStore = create(
  persist(
    devtools((set) => ({
      users: [], 
      addUser: (values) =>
        set((state) => {
          
          const newEmail = values.email.trim().toLowerCase();
          const newTel = values.tel.trim();

          // Check if the user with the same email or phone number already exists
          const existingUser = state.users.some(
            (user) =>
              user.email.trim().toLowerCase() === newEmail ||
              user.tel.trim() === newTel
          );

          if (existingUser) {
            alert("User Already exists");
            return state; // Return current state without any changes
            // it will give u what u have push now .
          }

          // If user doesn't exist, add the new user to the array
          return {
            users: [...state.users, values], // Append new user
          };
        }),
      resetForm: () =>
        set({
          users: [], // Clear all users (optional)
        }),
    })),
    {
      name: "user-storage",
      getStorage: () => localStorage, // Persist users in localStorage
    }
  )
);

export default useStore;
