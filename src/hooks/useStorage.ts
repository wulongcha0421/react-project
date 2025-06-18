import { useSyncExternalStore } from "react";

export const useStorage = (key: string, initialValue: any) => {
  const res = useSyncExternalStore(
    (onStoreChange: () => void) => {
      // 订阅浏览器API
      window.addEventListener("storage", onStoreChange);
      return () => {
        // 取消订阅浏览器API
        window.removeEventListener("storage", onStoreChange);
      };
    },
    () => {
      return JSON.parse(
        localStorage.getItem(key) || JSON.stringify(initialValue)
      );
    }
  );

  const updateStoreage = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    // 通知所有订阅者更新
    window.dispatchEvent(new StorageEvent("storage"));
  };

  return [res, updateStoreage] as const;
};
