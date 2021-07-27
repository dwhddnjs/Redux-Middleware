const sleep = (n) => new Promise((res) => setTimeout(res, n));

// {id, title, body}

const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어",
    body: "리덕스 미들웨어를 배우기 쉬움",
  },
  {
    id: 2,
    title: "자바스크립트 기반",
    body: "대충 자바스크립트 써봐라",
  },
  {
    id: 3,
    title: "리액트 친구",
    body: "리덕스는 리액트의 친구이자 사촌에 가까움",
  },
  {
    id: 4,
    title: "모빅스",
    body: "리덕스의 라이벌 모빅스",
  },
  {
    id: 5,
    title: "그래프큐엘",
    body: "새로운 스택",
  },
  {
    id: 6,
    title: "뷰",
    body: "리액트보단 쉬운 친구",
  },
  {
    id: 7,
    title: "sql",
    body: "데이터 베이스 친구",
  },
  {
    id: 8,
    title: "nextjs",
    body: "자바스크립트 프레임 워크",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async () => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
