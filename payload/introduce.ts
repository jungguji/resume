import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '대규모 트래픽 속 현재 시스템을 진단하고, 현실적인 제약 안에서 점진적으로 개선하여 실질적인 성과를 만들어낸 경험이 있습니다. 단순히 최신 기술을 적용하는 것을 넘어, <strong style="font-weight: bold;">현재 상황과 비즈니스에 맞는 최적의 해결책</strong>을 찾아가는 과정을 중요하게 생각합니다.',
    '<br />',
    '<br />',
    '실제로 AI 챗봇의 응답 속도가 수 분까지 지연되는 문제를 해결하기 위해, <strong style="font-weight: bold;">단순 병렬 처리로 즉각적인 장애를 막는 1단계 대응부터, 최종적으로 AWS SQS 기반의 비동기 아키텍처로 전환하며 단계적인 개선</strong>을 주도했습니다. 이 과정을 통해 안정적으로 레거시 시스템의 확장성과 가용성을 확보하는 성공 경험을 쌓았습니다.',
    '<br />',
    '<br />',
    '이와 더불어, 분산 서버 환경의 결제 시스템에서 <strong style="font-weight: bold;">Redis을 이용해 분산 락을 도입하여 치명적인 동시성 이슈를 해결</strong>하고, 테스트 도구를 활용한 부하 테스트를 통해 결제 데이터의 무결성을 검증하며 시스템 신뢰도를 높인 경험도 있습니다.(<a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">관련 아티클</a>)',
    '<br />',
    '<br />',
    '이처럼 <strong style="font-weight: bold;">성능 최적화와 데이터 정합성 확보</strong>라는 각기 다른 기술적 과제를 해결했던 경험은, <strong style="font-weight: bold;">`문피아`의 레거시 시스템을 개선하고 대용량 트래픽을 안정적으로 처리하며 끊임없이 성장하는 플랫폼을 만드는 데</strong> 핵심적인 역할을 할 수 있다고 확신합니다. 문서화와 지식 공유를 통해 동료와 함께 성장하는 것을 즐기며, 사용자에게 최고의 콘텐츠 경험을 선사하는 여정에 함께하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
