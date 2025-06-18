import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
// import { devtools } from "zustand/middleware";
import { persist, createJSONStorage } from "zustand/middleware";

type User = {
  name: string;
  isAccess: boolean;
};

interface UserState {
  user: {
    name: string;
    isAccess: boolean;
  };
  token: string;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  getToken: () => string;
  clearToken: () => void;
}

const useUserStore = create<UserState>()(
  immer(
    // 持久化存储
    persist(
      (set, get) => ({
        user: {
          name: "",
          isAccess: false,
        },
        token: "",
        setUser: (user) =>
          set((state) => {
            state.user = {
              name: user.name,
              isAccess: user.isAccess,
            };
          }),
        setToken: (token) =>
          set((state) => {
            state.token = token;
          }),
        getToken: () => get().token,
        clearToken: () => set({ token: "" }),
      }),
      {
        name: "userStore", // 仓库名称唯一
        storage:createJSONStorage(() => localStorage), // 使用 localStorage 存储
        partialize: (state) => ({
          user: state.user,
          token: state.token,
        }), // 只存储 user 和 token
      }
    )
    // 开启开发工具
    // devtools(
    //   (set, get) => ({
    //     user: {
    //       name: "",
    //       isAccess: false,
    //     },
    //     token: "",
    //     setUser: (user) =>
    //       set((state) => {
    //         state.user = {
    //           name: user.name,
    //           isAccess: user.isAccess,
    //         }
    //       }),
    //     setToken: (token) =>
    //       set((state) => {
    //         state.token = token;
    //       }),
    //     getToken: () => get().token,
    //     clearToken: () => set({ token: "" }),
    //   }),
    //   {
    //     name:'userStore', // 仓库名称唯一
    //     enabled: true
    //   }
    // )
  )
);

export default useUserStore;

