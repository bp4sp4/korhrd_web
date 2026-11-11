// 비즈니스 제안 폼 → 한평생오피스 Supabase의 business_proposals 테이블에 저장
// 필요한 환경변수(서버 전용): SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (오피스와 같은 Supabase 프로젝트)
const TYPES = ["교육 제휴", "기업교육", "마케팅·광고", "기타"];

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const line = (v: unknown, max: number) => str(v, max).replace(/\s+/g, " ");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return Response.json({ error: "잘못된 요청입니다." }, { status: 400 });

  const company = line(body.company, 100);
  const contact_name = line(body.name, 50);
  const phone = line(body.tel, 30);
  const email = line(body.email, 100);
  const type = line(body.type, 30);
  const message = str(body.message, 5000);

  if (!company || !contact_name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || body.agree !== true) {
    return Response.json({ error: "필수 항목을 확인해주세요." }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    console.error("[contact] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY 미설정");
    return Response.json({ error: "접수 설정이 되어 있지 않습니다." }, { status: 500 });
  }

  const res = await fetch(`${url}/rest/v1/business_proposals`, {
    method: "POST",
    headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json", Prefer: "return=minimal" },
    body: JSON.stringify({
      company,
      contact_name,
      phone: phone || null,
      email,
      proposal_type: TYPES.includes(type) ? type : null,
      message,
    }),
  }).catch((e) => {
    console.error("[contact] 저장 요청 실패", e);
    return null;
  });

  if (!res?.ok) {
    if (res) console.error("[contact] 저장 실패", res.status, await res.text());
    return Response.json({ error: "접수에 실패했습니다." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
