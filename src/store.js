import { create } from 'zustand';

const useStore = create((set) => ({
    color: 'blue',
    setColor: (newColor) => set({ color: newColor }),
}));


export default useStore;
