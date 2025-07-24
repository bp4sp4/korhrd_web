import Link from "next/link";

export default function RecruitSection() {
  return (
    <>
      <div className="w-full">
        <section className="main__recruit w-full flex-col md:flex-row items-stretch h-auto md:h-[400px] hidden md:flex">
          <div
            className="flex-1 h-[300px] md:h-full flex flex-col justify-center bg-[#aeb2a3]"
            style={{
              backgroundImage: "url('/images/business/metting.png')",
              backgroundSize: "cover",
            }}
          >
            <div className="w-[1180px] mx-auto flex text-left">
              <div className="w-full relative">
                <h2 className="text-[40px] font-semibold mb-4 text-white">
                  한평생 에듀바이저스와
                  <br />
                  함께하실 분을 찾습니다.
                </h2>
                <p className="text-white text-[20px] mb-8">
                  판매 실적이 아닌, 고객만족 중심의 파격적인 보상을 드립니다.
                  <br />
                  오직 고객 만족에만 집중할 수 있는 업무 환경과 최고의
                  복리후생을 제공합니다.
                </p>
              </div>
              <div className="w-[1000px] mx-auto relative">
                <div className="absolute left-[49px] bottom-[35px] ">
                  <Link
                    className="bg-[#2B7FFF] text-white w-[373px] h-[86px] flex items-center justify-center rounded-[20px] text-[20px] font-semibold hover:bg-blue-700 transition text-center"
                    href="https://www.eduvisor.kr/recruit"
                    target="_blank"
                  >
                    채용중인 공고 보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="block md:hidden w-full h-[100vh] relative ">
          <img
            src="/images/business/main__banner002__mobile.png"
            alt="채용 미팅 모바일"
            className="w-full h-full object-cover"
          />

          <div className="absolute mt-10 inset-0 flex flex-col max-w-[300px] mx-auto">
            <h2 className="text-[30px] font-bold mb-3 text-white ">
              한평생 에듀바이저스와
              <br />
              함께하실 분을 찾습니다.
            </h2>
            <p className="text-white text-[15px] mt-[29px] ">
              판매 실적이 아닌, 고객만족 중심의
              <br />
              파격적인 보상을 드립니다.
              <br />
              <br />
              오직 고객 만족에만 집중할 수 있는
              <br />
              업무 환경과 최고의 복리후생을 제공합니다.
            </p>
            <Link
              href="https://www.eduvisor.kr/recruit"
              target="_blank"
              className="bg-[#2B7FFF] text-white rounded-[12px] w-[300px] h-[50px] mt-[37px] font-semibold shadow-md transition text-center text-[20px] flex items-center justify-center"
            >
              채용중인 공고 보기
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
