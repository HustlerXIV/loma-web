export function isInAppBrowser() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  return /(Line\/|FBAN|FBAV|Instagram|Twitter|TikTok|WhatsApp)/i.test(ua);
}

export function openInSystemBrowser() {
  const url = `https://${location.host}${location.pathname}${location.search}`;
  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    // Open Chrome via Android intent (falls back to the same https URL)
    const intent = `intent://${location.host}${location.pathname}${
      location.search
    }#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url=${encodeURIComponent(
      url
    )};end`;
    location.href = intent;
  } else {
    alert(
      "To continue with Google Sign-In, tap ••• and choose ‘Open in Safari’."
    );
    if (navigator.clipboard) navigator.clipboard.writeText(url);
  }
}
