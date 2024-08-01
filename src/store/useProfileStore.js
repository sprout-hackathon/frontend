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
    workDuration: "",
    hospitalId: 0,
  
    // Actions to update the state
    setId: (id) => set({ id }),
    setPassword: (password) => set({ password }),
    setNickname: (nickname) => set({ nickname }),
    setNationCode: (nationCode) => set({ nationCode }),
    setLanguageCode: (languageCode) => set({ languageCode }),
    setProficiency: (proficiency) => set({ proficiency }),
    setHasCertification: (hasCertification) => set({ hasCertification }),
    setCertificationCode: (certificationCode) => set({ certificationCode }),
    setWorkDuration: (workDuration) => set({ workDuration }),
    setHospitalId: (hospitalId) => set({hospitalId}),

  }));


export default useProfileStore;