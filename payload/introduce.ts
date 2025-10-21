import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // 기존 내용 (복구용 주석)
    // 'Java & Spring / AWS 기반의 7년차 백엔드 개발자로, 기술을 맹목적으로 따르기보다, 문제의 본질을 파악하고 <strong style="font-weight: bold;">비즈니스 연속성을 보장하는 최적의 해결책</strong>을 찾아 시스템을 점진적으로 완성해 나갑니다.',
    // '<br />',
    // '<br />',
    // '실제 운영 환경의 병목 현상을 해결하며, 채팅 응답 속도를 <strong style="font-weight: bold;">5분에서 3초 이내로 단축</strong>하고, 19만 명 대상 푸시 발송을 <strong style="font-weight: bold;">5시간에서 30분으로 개선</strong>하는 등 극적인 성능 개선을 이끌었습니다. 이를 통해 이탈 사용자의 리텐션을 최대 <strong style="font-weight: bold;">20%p</strong>까지 끌어올리며, 기술이 비즈니스 성과로 직결됨을 증명했습니다.',
    // '<br />',
    // '<br />',
    // '<strong style="font-weight: bold;">유일한 백엔드 개발자</strong>로서 B2C부터 B2B, 내부 시스템까지 전 영역을 책임졌던 경험은, 어떤 상황에서도 시스템의 안정성과 데이터 무결성을 지켜내는 단단한 기반이 되었습니다.',
    // '<br />',
    // '<br />',
    // '<strong style="font-weight: bold;">"유효한"</strong> 테스트 코드가 서비스의 품질을 결정한다고 믿으며, <a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer"> Fixture Monkey</a> 등 새로운 도구를 적극적으로 도입하여 테스트 효율을 높이는 과정을 즐깁니다. 제가 해결한 경험을 기술 블로그에 공유하며 동료와 함께 성장하는 가치를 중요하게 생각합니다.',

    // 여기어때 맞춤 자기소개서
    '7년차 백엔드 개발자로서, 복잡한 기술 문제를 해결하여 비즈니스의 안정성과 성장을 이끌어내는 데 집중해왔습니다. 특히 대규모 트래픽을 위한 아키텍처 설계와 결제 데이터의 정합성을 보장했던 저의 두 가지 핵심 경험은, <strong style="font-weight: bold;">`여기어때`의 기술적 과제를 해결하고 고객의 여행 경험을 완성하는 데</strong> 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 대규모 트래픽을 안정적으로 처리하는 확장성 있는 아키텍처를 설계하고 구축한 경험이 있습니다.</strong>',
    'AI 챗봇의 심각한 응답 지연 문제를 해결하기 위해, 기존의 동기 블로킹 구조를 AWS SQS 기반의 비동기 아키텍처로 전환하는 프로젝트를 주도했습니다. 이 과정을 통해 분당 6,000건의 요청을 지연 없이 처리하며 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시켰고, 장애가 전파되지 않는 유연한 시스템을 구축했습니다. 이러한 경험은 시즌이나 타임딜 이벤트 시 트래픽이 급증하는 <strong style="font-weight: bold;">`여기어때`의 예약/결제 시스템을 안정적으로 처리</strong>하고, 향후 다양한 비즈니스 확장을 위한 견고한 기술 기반을 마련하는 데 큰 도움이 될 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 분산 환경에서 발생하는 동시성 이슈를 해결하여 결제 데이터의 정합성을 100% 보장한 경험이 있습니다.</strong>',
    '신규 유료 재화 시스템 개발 당시, 동시 결제 요청으로 인한 데이터 불일치 문제를 Redis 분산 락(Redisson)을 도입하여 해결했습니다. 부하 테스트를 통해 어떤 상황에서도 데이터의 정합성이 유지됨을 증명하며, 사용자의 신뢰와 직결되는 안정적인 결제 시스템을 구축했습니다. 이는 수많은 예약과 결제가 동시에 발생하는 `여기어때`의 핵심 비즈니스에서 가장 중요한 <strong style="font-weight: bold;">\'장애 없는 거래 경험\'을 보장하는 데</strong> 직접적으로 기여할 수 있는 가장 중요한 역량이라고 생각합니다.',
    '<br />',
    '<br />',
    '견고한 아키텍처 설계 역량과 비즈니스 핵심 시스템의 안정성을 책임졌던 경험을 바탕으로, <strong style="font-weight: bold;">`여기어때`의 고객들이 여행의 모든 순간을 설렘과 확신 속에서 즐길 수 있도록</strong> 가장 신뢰할 수 있는 백엔드 시스템을 만들어나가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
