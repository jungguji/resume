import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java와 Spring Boot, AWS 환경에서 대규모 트래픽을 안정적으로 처리하는 시스템을 설계하고 구현하는 7년차 백엔드 개발자입니다. 저는 기술을 통해 비즈니스 문제를 해결하고, 점진적인 개선으로 시스템의 가치를 높이는 과정에서 가장 큰 성취를 느낍니다.',
    '<br />',
    '<br />',
    '실제로 동시성 이슈로 인한 데이터 불일치 문제를 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">Redis 분산 락</a>으로 해결한 경험이 있습니다. 또한, 트래픽 부하 상황에서 심각한 성능 저하를 겪던 시스템을 현실적 제약에 맞게 순차적으로 개선하여 최종적으로 <strong style="font-weight: bold;">SQS를 도입한 완전한 비동기 구조</strong>로 전환하여 비즈니스 연속성을 해치지 않으며 시스템을 개선한 경험이 있습니다.',
    '<br />',
    '이러한 경험은 다양한 채널의 고객 데이터를 수집, 통합하며 데이터의 정합성과 실시간 처리가 무엇보다 중요한 <strong style="font-weight: bold;">`디파이너리`의 고객 데이터 플랫폼(CDP)</strong> 개발에 필수적인 역량이라고 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">"유효한" 테스트 코드</strong>가 서비스의 품질을 결정한다는 믿음 아래, <a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer"> Fixture Monkey</a>와 같은 새로운 도구를 적극적으로 도입하여 개발 효율을 높이는 과정을 즐깁니다. 저의 문제 해결 능력과 경험들을 바탕으로 <strong style="font-weight: bold;">`디파이너리`의 기술적 챌린지</strong>를 해결하고, 팀의 성장에 기여하는 동료가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
