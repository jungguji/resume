import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서, 비즈니스의 연속성을 보장하고 시스템의 질적 성장을 이끌어내는 데 집중해왔습니다. 특히 <strong style="font-weight: bold;">기존 레거시 시스템의 병목을 분석해 현대적인 아키텍처로 개선했던 경험</strong>과 결제 데이터의 정합성을 사수한 경험은, 끊임없이 혁신하며 업계의 표준을 만들어가는 `알라딘`의 기술적 과제를 해결하는 데 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 기존 동기식 시스템의 한계를 극복하고, 대용량 트래픽 처리가 가능한 비동기 메시징 아키텍처를 구축한 경험이 있습니다.',
    '과거 AI 서비스 운영 당시, 급증하는 트래픽으로 인해 발생한 심각한 응답 지연 문제를 해결하기 위해 기존의 강결합된 동기 블로킹 구조를 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 처리 구조로 점진적으로 개편</strong>했습니다. 이를 통해 분당 6,000건의 요청을 병목 없이 처리하며 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시켰고, 장애가 전체 시스템으로 전파되지 않는 유연성을 확보했습니다. 이러한 경험은 수많은 상품 데이터와 트래픽이 오가는 `알라딘`의 거대한 시스템을 <strong style="font-weight: bold;">Event Driven 기반의 MSA 환경으로 고도화</strong>하고, 대규모 이벤트나 프로모션 상황에서도 안정적인 서비스를 제공하는 데 실질적인 도움이 될 것입니다.',
    '<br />',
    '<br />',
    '둘째, 분산 환경에서 발생하는 동시성 이슈를 기술적으로 제어하여 데이터 무결성을 100% 확보했습니다.',
    '신규 유료 재화 시스템 개발 당시, 동시 다발적인 결제/사용 요청으로 인한 데이터 불일치 문제를 <strong style="font-weight: bold;">Redis 분산 락(Redisson)을 도입하여 해결</strong>했습니다. 부하 테스트를 통해 <strong style="font-weight: bold;">데이터 정합성이 완벽히 유지됨을 검증</strong>하며, 고객 자산과 직결된 시스템의 신뢰도를 확보했습니다. 이는 `알라딘`이 가장 중요하게 여기는 "고객의 꿈을 이뤄주는 서비스"의 근간인 주문 및 결제 시스템에서, 단 한 건의 오차도 없는 신뢰받는 거래 경험을 보장하는 데 필수적인 역량이라 생각합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">레거시 코드 속에 숨겨진 비즈니스 가치를 존중하며 더 나은 아키텍처로 발전시켜 온 경험</strong>을 바탕으로, `알라딘`이 써 내려가는 전자상거래의 역사에 안정성과 기술적 혁신을 더하는 든든한 동료가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
