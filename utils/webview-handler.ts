import { useModalStore } from "@/stores/modal-store";

export function isInAppBrowser() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /(Line\/|FBAN|FBAV|Instagram|Twitter|TikTok|WhatsApp)/i.test(ua);
}

export function openInSystemBrowser() {
  const url = `https://${location.host}${location.pathname}${location.search}`;
  const ua = navigator.userAgent || "";
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  if (isAndroid) {
    const intent =
      `intent://${location.host}${location.pathname}${location.search}` +
      `#Intent;scheme=https;package=com.android.chrome;` +
      `S.browser_fallback_url=${encodeURIComponent(url)};end`;
    location.href = intent;
    return;
  }

  useModalStore.getState().open({
    type: "info",
    title: "เปิดใน Safari / Chrome เพื่อเข้าสู่ระบบด้วย Google",
    description:
      "คุณกำลังใช้งานผ่านเบราว์เซอร์ภายในแอป ซึ่ง Google ไม่อนุญาตให้ลงชื่อเข้าใช้เพื่อความปลอดภัย\n" +
      "คุณสามารถสร้างบัญชีของแอพเพื่อใช้งาน หรือ คุณสามารถเปิดใช้งานผ่าน Safari / Chrome ได้",
    onConfirm: async () => {
      try {
        await navigator.clipboard?.writeText(url);
      } catch {}
    },
    onClose: () => {},
  });
}
