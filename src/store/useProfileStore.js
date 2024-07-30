import { create } from 'zustand';

const useProfileStore = create((set) => ({
    id: "",
    password: "",
    nickname: "",
    nationCode: "",
    languageCode: "",
    proficiency: "",
    hasCertification: true,
    certificationCode: "",
    workHistories: [
      {
        workDuration: "",
        hospitalId: 0,
      },
    ],
  
    // Actions to update the state
    setId: (id) => set({ id }),
    setPassword: (password) => set({ password }),
    setNickname: (nickname) => set({ nickname }),
    setNationCode: (nationCode) => set({ nationCode }),
    setLanguageCode: (languageCode) => set({ languageCode }),
    setProficiency: (proficiency) => set({ proficiency }),
    setHasCertification: (hasCertification) => set({ hasCertification }),
    setCertificationCode: (certificationCode) => set({ certificationCode }),
    setWorkHistories: (workHistories) => set({ workHistories }),
  
    // Add a new work history entry
    addWorkHistory: (newHistory) => set((state) => ({
      workHistories: [...state.workHistories, newHistory],
    })),
  
    // Update a specific work history entry
    updateWorkHistory: (index, updatedHistory) => set((state) => ({
      workHistories: state.workHistories.map((history, i) =>
        i === index ? updatedHistory : history
      ),
    })),
  
    // Remove a specific work history entry
    removeWorkHistory: (index) => set((state) => ({
      workHistories: state.workHistories.filter((_, i) => i !== index),
    })),
  }));


export default useProfileStore;