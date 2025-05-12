import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,
  list: [
    {
      content: '(2025. 01. 09) 동시성 제어를 위한 Redisson tryLock 메서드의 작동 원리',
      href:
        'https://jungguji.github.io/2025/01/09/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%A0%9C%EC%96%B4%EB%A5%BC-%EC%9C%84%ED%95%9C-Redisson-tryLock-%EB%A9%94%EC%84%9C%EB%93%9C%EC%9D%98-%EC%9E%91%EB%8F%99-%EC%9B%90%EB%A6%AC',
    },
    {
      content: '(2024. 12. 24) 동시성 이슈와 Redis( Redisson )를 이용한 해결방법',
      href:
        'https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/',
    },
    {
      content: '(2024. 11. 19) 테스트 코드 작성을 더 쉽게 (with. Fixture Monkey)',
      href:
        'https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/',
    },
    {
      content: '(2022. 08. 07) Nexus를 이용한 모듈화',
      href:
        'https://jungguji.github.io/2022/08/07/Nexus%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A8%EB%93%88%ED%99%94/',
    },
  ],
};

export default article;
