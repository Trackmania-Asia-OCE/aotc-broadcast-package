import { create } from 'zustand';

export interface CommentaryBoothStore {
  casterLeftCountry: string;
  setCasterLeftCountry: (value: string) => void;
  casterLeftName: string;
  setCasterLeftName: (value: string) => void;
  casterLeftHandle: string;
  setCasterLeftHandle: (value: string) => void;
  casterRightCountry: string;
  setCasterRightCountry: (value: string) => void;
  casterRightName: string;
  setCasterRightName: (value: string) => void;
  casterRightHandle: string;
  setCasterRightHandle: (value: string) => void;
}

export const useCommentaryBoothStore = create<CommentaryBoothStore>(set => ({
  casterLeftCountry: '',
  setCasterLeftCountry: (value: string) => set(() => ({ casterLeftCountry: value })),
  casterLeftName: '',
  setCasterLeftName: (value: string) => set(() => ({ casterLeftName: value })),
  casterLeftHandle: '',
  setCasterLeftHandle: (value: string) => set(() => ({ casterLeftHandle: value })),
  casterRightCountry: '',
  setCasterRightCountry: (value: string) => set(() => ({ casterRightCountry: value })),
  casterRightName: '',
  setCasterRightName: (value: string) => set(() => ({ casterRightName: value })),
  casterRightHandle: '',
  setCasterRightHandle: (value: string) => set(() => ({ casterRightHandle: value })),
}));
