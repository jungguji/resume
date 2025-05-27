import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '백엔드 개발자로서 사용자 증가 및 트래픽 증대에 따른 **시스템 안정성 확보 및 성능 최적화** 경험에 강점이 있습니다.',
    '<br />',
    'AI 챗봇 서비스의 응답 속도를 **수분에서 수초 이내로 개선**하고, 푸시 알림 시스템 발송 시간을 **90% 이상 단축**하는 등 실질적인 성능 개선을 이끌었습니다.',
    '<br />',
    '**Redis 분산 락을 활용한 동시성 제어**(<a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">관련 아티클</a>), **AWS SQS 기반 비동기 아키텍처 전환**, **JPA Entity 모듈화** 등 확장성과 유지보수성을 고려한 시스템 설계를 주도했습니다.',
    '<br />',
    '**테스트 코드 작성과 코드 품질 개선**에 꾸준히 관심을 가지고, **Fixture Monkey**와 같은 도구를 활용하여 테스트 효율성을 높이는 방법을 탐구하고 공유합니다 (<a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer">관련 아티클</a>).',
    '<br />',
    '문서화와 지식 공유를 중요하게 생각하며, **기술 블로그 운영** 및 팀 내 공유를 통해 함께 성장하는 것을 즐깁니다.',
    '<br />',
    '<br />',
    "이러한 경험을 바탕으로, 프리윌린의 <strong style='font-weight: bold;'>`매쓰플랫`</strong> 서비스가 더 많은 사용자에게 안정적이고 빠른 경험을 제공할 수 있도록, <strong style='font-weight: bold;'>응답성 높고 확장 가능한 인프라 구축</strong>에 핵심적인 역할을 할 수 있습니다.",
    "<br />",
    "특히 <strong style='font-weight: bold;'>스타트업 환경</strong>에서 기획부터 유관부서와 긴밀히 협업하며 <strong style='font-weight: bold;'>고객 가치에 집중</strong>해 빠르게 제품을 만들었던 경험은, 프리윌린이 변화하는 교육 시장의 요구에 민첩하게 대응하고 '교육을 더 스마트하게' 만드는 데 기여할 것입니다.",
    "<br />",
    "<br />",
    "<br />",
    "<br />",
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
