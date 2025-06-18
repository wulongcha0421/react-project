import { useSyncExternalStore } from 'react'

export const useHistory = () => {
  const url = useSyncExternalStore(
    (onHistoryChange:() => void) => {
      window.addEventListener('popstate', onHistoryChange);
      window.addEventListener('hashchange', onHistoryChange);
      return () => {
        window.removeEventListener('popstate', onHistoryChange);
        window.removeEventListener('hashchange', onHistoryChange);
      };
    },
    () => {
      return window.location.href;
    }
  )

  const push = (url:string) => {
    window.history.pushState({}, '', url);
    // 通知所有订阅者更新
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  const replace = (url:string) => {
    window.history.replaceState({}, '', url); 
    // 通知所有订阅者更新
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  return [url, push, replace] as const;
}