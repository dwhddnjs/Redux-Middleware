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
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostById = async () => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
