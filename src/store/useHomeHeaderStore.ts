import createStore from 'zustand';

type HeaderCategoryVariant = 'default' | 'fullCategory';

type HomeHeaderStore = {
  activeHeaderId: number;
  setActiveHeaderId: (id: number) => void;
  headerCategoryVariant: HeaderCategoryVariant;
  setHeaderCategoryVariant: (variant: HeaderCategoryVariant) => void;
}

const topCategoryID = 100270;

const useHomeHeaderStore = createStore<HomeHeaderStore>((set) => ({
  activeHeaderId: topCategoryID,
  setActiveHeaderId: (id) => set({ activeHeaderId: id }),
  headerCategoryVariant: 'default',
  setHeaderCategoryVariant: (variant) => set({ headerCategoryVariant: variant }),
}));

export default useHomeHeaderStore;
