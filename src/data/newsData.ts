export interface NewsItem {
  id: string;
  title: string;
  date: string;
  link: string;
  thumbnail: string;
  source?: string;
  content?: string; // 뉴스 내용 요약
  rssUrl?: string; // RSS 피드 URL
}

export const newsData: NewsItem[] = [
  {
    id: "1",
    title:
      "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범… 커리어 설계 중심 서비스 강화",
    date: "2025.07.22",
    link: "https://www.ksilbo.co.kr/news/articleView.html?idxno=1032547",
    thumbnail: "/images/main/news1.jpg",
    source: "경상일보",
    content:
      "한평생교육이 교육컨설팅 전문 브랜드 '에듀바이저스'를 공식 출범시켰다. 이번 출범으로 커리어 설계 중심의 교육 서비스를 강화할 예정이다.",
    rssUrl: "https://www.ksilbo.co.kr/rss/rss.xml",
  },
  {
    id: "2",
    title: "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범",
    date: "2024.07.21",
    link: "https://www.nbntv.co.kr/news/articleView.html?idxno=4005015",
    thumbnail: "/images/main/news2.jpg",
    source: "내외경제TV",
    content:
      "한평생교육이 교육컨설팅 전문 브랜드 '에듀바이저스'를 출범시켜 교육 시장에서의 입지를 강화했다.",
    rssUrl: "https://www.nbntv.co.kr/rss/rss.xml",
  },
  {
    id: "3",
    title: "한평생교육, 교육컨설팅 전문 브랜드 '에듀바이저스' 출범",
    date: "2024.07.17",
    link: "http://www.kdpress.co.kr/news/articleView.html?idxno=139430",
    thumbnail: "/images/main/news4.png",
    source: "데일리경제",
    content:
      "한평생교육이 교육컨설팅 전문 브랜드 '에듀바이저스'를 공식 출범시켜 교육 서비스 영역을 확장했다.",
    rssUrl: "http://www.kdpress.co.kr/rss/rss.xml",
  },
  {
    id: "4",
    title: "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 공식 출범",
    date: "2024.07.18",
    link: "https://www.gokorea.kr/news/articleView.html?idxno=833065",
    thumbnail: "/images/main/news3.jpg",
    source: "공감신문",
    content:
      "한평생교육이 교육컨설팅 브랜드 '에듀바이저스'를 공식 출범시켜 교육 시장에서의 경쟁력을 강화했다.",
    rssUrl: "https://www.gokorea.kr/rss/rss.xml",
  },
  {
    id: "5",
    title:
      "한평생교육, 교육컨설팅 브랜드 '에듀바이저스' 출범… 커리어 설계 중심 서비스 강화",
    date: "2024.07.16",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287540055868",
    thumbnail: "/images/main/news5.jpg",
    source: "시민일보",
    content:
      "한평생교육이 교육컨설팅 브랜드 '에듀바이저스'를 출범시켜 커리어 설계 중심의 교육 서비스를 강화할 예정이다.",
    rssUrl: "https://www.siminilbo.co.kr/rss/rss.xml",
  },
  {
    id: "6",
    title:
      "한평생교육, '에듀바이저스' 공식 출범… 교육서비스에 커리어 컨설팅 접목",
    date: "2024.07.23",
    link: "https://www.siminilbo.co.kr/news/newsview.php?ncode=1160287540055868",
    thumbnail: "/images/main/news6.jpg",
    source: "시민일보",
    content:
      "한평생교육이 '에듀바이저스'를 공식 출범시켜 교육 서비스에 커리어 컨설팅을 접목한 새로운 서비스를 제공한다.",
    rssUrl: "https://www.siminilbo.co.kr/rss/rss.xml",
  },
];

// 메인 페이지에서 보여줄 뉴스 개수 (최신 4개)
export const getMainPageNews = (count: number = 4) => {
  return newsData.slice(0, count);
};

// 날짜별 정렬 (최신순)
export const getSortedNews = () => {
  return [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
