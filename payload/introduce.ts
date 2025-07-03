import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    `대규모 트래픽 환경에서 시스템의 병목을 진단하고, 현실적 제약과 비즈니스 연속성을 해치지 않는 선에서 <strong style='font-weight: bold;'>점진적으로 시스템을 개선하여 안정성과 확장성을 확보</strong>하는 데 강점이 있습니다.`,
    `<br />`,
    `<br />`,
    `실제로 수 분까지 지연되던 AI 챗봇 응답 속도를 개선하기 위해, 익숙하게 다루던 병렬 처리로 즉각적인 장애를 막는 1단계 대응부터, 논블로킹 I/O 적용, 그리고 최종적으로 <strong style='font-weight: bold;'>AWS SQS 기반의 비동기 아키텍처로 전환하며 단계적인 개선을 주도</strong>했습니다. 이 경험은 실시간 상호작용이 핵심인 \`알서포트\` 솔루션들이 어떤 상황에서도 비즈니스 연속성을 해치지 않으며 안정적으로 서비스하는 것에 기여할 수 있다고 확신합니다.`,
    `<br />`,
    `<br />`,
    `또한, 분산 환경의 동시성 이슈를 <strong style='font-weight: bold;'>Redis를 활용한 분산 락으로 해결</strong>하고(<a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">관련 아티클</a>), 공통 데이터 모델(JPA Entity객체)을 <strong style='font-weight: bold;'>모듈화하여 관리</strong>(<a href="https://jungguji.github.io/2022/08/07/Nexus%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A8%EB%93%88%ED%99%94/" target="_blank" rel="noopener noreferrer">관련 아티클</a>)하는 등 복잡한 시스템의 기술 부채를 줄이고 유지보수 비용을 낮추는 데 익숙합니다. 이러한 경험은 24년간 축적된 \`알서포트\`의 핵심 기술 자산을 더욱 견고하게 만드는 데 밑거름이 될 것입니다.`,
    `<br />`,
    `<br />`,
    `이처럼 기술적 문제를 해결하는 것에 그치지 않고, 그 경험을 문서화하고 공유하며 팀과 함께 성장하는 것을 즐깁니다. 특히 테스트 코드 작성 효율을 높이기 위해 <strong style='font-weight: bold;'>Fixture Monkey와 같은 새로운 도구를 직접 도입하여 팀 전체의 개발 생산성 향상에 기여</strong>한 경험(<a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer">관련 아티클</a>)은 제가 추구하는 협업의 가치를 잘 보여줍니다. 더 나은 아키텍처를 고민하고 동료에게 긍정적인 자극을 주는 개발자가 되겠습니다.`,
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
