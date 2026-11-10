"use client";

// 섹션 이동 메뉴. variant="side": 메인(히어로 지나고 CONTACT 전까지 표시), variant="sub": 상세페이지(히어로 지나고 푸터 전까지 표시)
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

export default function SectionNav({ variant, title, label, items }: { variant: "side" | "sub"; title: string; label: string; items: Item[] }) {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState<string | null>(variant === "sub" ? items[0].href : null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const hero = document.querySelector<HTMLElement>(variant === "side" ? ".hero" : ".sub-hero");
      const h = hero?.offsetHeight ?? 0;
      if (variant === "side") {
        const contact = document.getElementById("contact");
        setShow(y > h - 200 && (!contact || y + innerHeight * 0.6 < contact.offsetTop));
      } else {
        const ft = document.querySelector("footer");
        setShow(y > h - 200 && (!ft || ft.getBoundingClientRect().top > innerHeight * 0.65));
      }
      let cur: string | null = variant === "sub" ? items[0].href : null;
      items.forEach((it) => {
        const sec = document.querySelector<HTMLElement>(it.href);
        const offset = variant === "side" ? innerHeight * 0.4 : 200;
        if (sec && sec.offsetTop - offset <= y) cur = it.href;
      });
      setCurrent(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant, items]);

  // 모바일 가로 칩 메뉴: 현재 칩이 화면 밖이면 가로로 스크롤해 보이게
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const nav = navRef.current;
    const on = nav?.querySelector<HTMLElement>("a.on");
    if (nav && on && nav.scrollWidth > nav.clientWidth) nav.scrollTo({ left: on.offsetLeft - 16, behavior: "smooth" });
  }, [current]);

  return (
    <nav ref={navRef} className={`${variant === "side" ? "side-nav" : "sub-nav"}${show ? " show" : ""}`} id={variant === "side" ? "side" : "subnav"} aria-label={label}>
      <p>{title}</p>
      {items.map((it) => (
        <a key={it.href} href={it.href} className={current === it.href ? "on" : undefined}>{it.label}</a>
      ))}
    </nav>
  );
}
