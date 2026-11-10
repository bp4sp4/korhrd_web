import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/sub.css";
import "@/styles/legal.css";

export const metadata: Metadata = {
  title: "이용약관 | 한평생그룹",
  description: "한평생그룹 이용약관",
};

/* eslint-disable @next/next/no-img-element */
export default function TermsPage() {
  return (
    <main>
      <section className="policy">
        <div className="inner">
          <h1>Terms of Service<span className="dot">.</span></h1>
          <p className="meta">시행일 2026년 11월 10일</p>
          <nav className="policy-tabs" aria-label="약관 및 정책"><Link href="/privacy">개인정보처리방침</Link><Link href="/terms" className="on">이용약관</Link></nav>
          <p className="policy-intro">한평생그룹 홈페이지 이용과 관련한 회사와 이용자의 권리와 의무를 안내합니다.</p>
          <div className="policy-body">
            <section>
              <h2>제1조 (목적)</h2>
              <p>이 약관은 (주)한평생그룹(이하 &#x27;회사&#x27;)이 운영하는 홈페이지에서 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.</p>
            </section>
            <section>
              <h2>제2조 (정의)</h2>
              <p>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ol><li>&#x27;서비스&#x27;란 회사가 홈페이지를 통해 제공하는 그룹·사업 소개, 비즈니스 제안 접수 등 모든 서비스를 말합니다.</li><li>&#x27;이용자&#x27;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li></ol>
            </section>
            <section>
              <h2>제3조 (약관의 효력)</h2>
              <p>이 약관은 홈페이지에 게시함으로써 효력이 발생하며, 이용자가 서비스를 이용하는 경우 이 약관에 동의한 것으로 봅니다.</p>
            </section>
            <section>
              <h2>제4조 (서비스의 제공)</h2>
              <ol><li>회사는 그룹 및 계열 서비스 소개, 비즈니스 제안 접수, 계열 사이트 연결 서비스를 제공합니다.</li><li>회사는 운영상·기술상 필요에 따라 서비스의 내용을 변경하거나 일시 중단할 수 있으며, 이 경우 홈페이지를 통해 알립니다.</li></ol>
            </section>
            <section>
              <h2>제5조 (계열 사이트 연결)</h2>
              <p>홈페이지에서 연결되는 계열 사이트(한평생원격교육원, 한평생직업훈련, 한평생 바로취업, 한평생 에듀바이저스 등)의 이용에는 각 사이트의 약관과 개인정보처리방침이 적용됩니다.</p>
            </section>
            <section>
              <h2>제6조 (이용자의 의무)</h2>
              <p>이용자는 비즈니스 제안 등 서비스 이용 시 정확한 정보를 입력해야 하며, 타인의 정보를 도용하거나 서비스 운영을 방해하는 행위를 해서는 안 됩니다.</p>
            </section>
            <section>
              <h2>제7조 (개인정보 보호)</h2>
              <p>회사는 이용자의 개인정보 보호를 위해 관련 법령을 준수하며, 자세한 내용은 개인정보처리방침을 통해 안내합니다.</p>
            </section>
            <section>
              <h2>제8조 (약관의 변경)</h2>
              <p>회사는 관련 법령에 따라 이 약관을 변경할 수 있으며, 변경 시 시행일 일정 기간 전에 홈페이지를 통해 공지합니다.</p>
            </section>
            <section>
              <h2>제9조 (분쟁 해결 및 준거법)</h2>
              <p>이 약관과 관련한 분쟁은 회사 소재지를 관할하는 법원을 관할 법원으로 하며, 대한민국 법률을 준거법으로 합니다.</p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
