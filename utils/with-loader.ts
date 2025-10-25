import { useLoaderStore } from "@/stores/loader-store";

export async function withLoader<T>(fn: () => Promise<T>, message?: string) {
  const { show, hide } = useLoaderStore.getState();
  try {
    show(message);
    return await fn();
  } finally {
    hide();
  }
}
