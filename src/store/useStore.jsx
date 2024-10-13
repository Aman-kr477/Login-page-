import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const useStore = create(
  persist(
    devtools((set) => ({
      formData: {
        name: "",
        email: "",
        tel: "",
      },
      updateFormData: (values) =>
        set((state) => {
          if (
            state.formData.email === values.email ||
            state.formData.tel === values.tel
          ) {
            alert("User Already exist ");
            return state;
          }

          return {
            formData: { ...state.formData, ...values },
          };
        }),
      resetForm: () =>
        set({
          formData: {
            name: "",
            email: "",
            tel: "",
          },
        }),
    })),
    {
      name: "form-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useStore;
