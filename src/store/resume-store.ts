// store/resumeStore.ts
import { create } from "zustand";
import axios from "axios";
import { api } from "../api/api";

type Resume = {
    _id: string;
    userId: string;
    title: string;
    templateKey: string;
    data: any; // you can type this more strictly later
};

type ResumeState = {
    resumes: Resume[];
    loading: boolean;
    error: string | null;
    fetchResumes: (userId: string) => Promise<void>;
    addResume: (resume: Resume) => void;
    updateResume: (id: string, updatedResume: Resume) => void;
    deleteResume: (id: string) => void;
};

export const useResumeStore = create<ResumeState>((set, get) => ({
    resumes: [],
    loading: false,
    error: null,

    fetchResumes: async (userId: string) => {
        // ✅ prevent refetch if already loaded

        set({ loading: true, error: null });
        try {
            const res: any = await api.get(`/resumes/${userId}`);
            set({ resumes: res.data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },

    addResume: (resume) =>
        set((state) => ({
            resumes: [...state.resumes, resume],
        })),

    updateResume: (id, updatedResume) =>
        set((state) => ({
            resumes: state.resumes.map((r) => (r._id === id ? updatedResume : r)),
        })),

    deleteResume: (id) =>
        set((state) => ({
            resumes: state.resumes.filter((r) => r._id !== id),
        })),
}));


