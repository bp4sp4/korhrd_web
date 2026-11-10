// 비즈니스 제안 폼(SiteChrome의 dialog)을 어디서든 여는 신호
export const OPEN_CONTACT = "open-contact";
export function openContact() {
  window.dispatchEvent(new Event(OPEN_CONTACT));
}
