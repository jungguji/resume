import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '대규모 트래픽 환경에서 비즈니스 요구사항을 안정적인 시스템으로 구현하는 데 강점이 있습니다. 50만 사용자의 서비스 응답 속도를 수분 이내에서 수초로 단축하고, 19만 건의 푸시 알림을 90% 더 빠르게 발송하는 등 실질적인 성능 개선을 이끌었습니다.',
    '<br />',
    '<br />',
    'Redis 분산 락을 이용한 동시성 제어(<a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">관련 아티클</a>), AWS SQS 기반 비동기 아키텍처 전환 경험은 피크 타임에 트래픽이 집중되고 실시간 데이터 정합성이 중요한 <strong style="font-weight: bold;">`나우웨이팅` </strong> 과 같은 서비스의 안정성을 확보하는 데 기여할 수 있습니다. 또한 JPA 기반 도메인 모델링과 모듈화 경험을 바탕으로, 유지보수성과 관리 용이성이 높은 시스템을 구축하는 데 주도적인 역할을 하고 싶습니다.',
    '<br />',
    '<br />',
    '특히 중요한 비즈니스 로직의 테스트 코드 작성과 코드 품질 개선을 안정적인 서비스 운영의 핵심이라 생각합니다. Fixture Monkey와 같은 도구를 활용해 테스트 효율성을 높이는 방법을 탐구하고, 그 경험을 기술 블로그(<a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer">관련 아티클</a>)와 팀 내에 공유하며 함께 성장하는 과정에서 보람을 느낍니다. 이러한 경험을 바탕으로 동료들에게 긍정적인 자극을 주며 함께 발전하는 개발자가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
