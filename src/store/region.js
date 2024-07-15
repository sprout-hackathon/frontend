import { create } from 'zustand';

const useRegionStore = create((set) => ({
  region: '전체',
  setRegion: (region) => set({ region: region }),
}));

export default useRegionStore;
