import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서, 저는 기술적 난제를 해결하여 비즈니스의 연속성을 보장하고 시스템의 신뢰도를 높이는 데 집중해왔습니다. 특히 <strong style="font-weight: bold;">대규모 트래픽을 감당하는 유연한 아키텍처 설계 능력</strong>과 <strong style="font-weight: bold;">금전적 손실을 0으로 만드는 데이터 정합성 확보 경험</strong>은, 주문부터 정산까지의 흐름을 완벽하게 책임져야 하는 `컬리` 커머스/핀테크 팀의 미션에 기여할 수 있는 최적의 역량이라 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 주문이 폭주하는 피크 타임에도 안정적인, 확장 가능한 비동기 아키텍처 구축 경험이 있습니다.</strong>',
    '<br />',
    '과거 AI 챗봇 서비스의 심각한 응답 지연과 장애를 해결하기 위해, 기존의 동기 블로킹 구조를 AWS SQS 기반의 비동기 아키텍처로 전면 전환한 경험이 있습니다. 이를 통해 <strong style="font-weight: bold;">분당 6,000건 이상의 요청</strong>이 몰리는 상황에서도 병목 없이 트래픽을 처리하며 <strong style="font-weight: bold;">응답 속도를 99% 단축(5분→3초)</strong>시켰고, 시스템 간의 결합도를 낮추어 장애 전파를 차단했습니다.',
    '<br />',
    '이러한 경험은 마감 시간 임박 시 주문이 급증하는 `컬리`의 트래픽 특성을 기술적으로 제어하고, Kafka 등을 활용한 대용량 처리 파이프라인을 고도화하여 \'멈추지 않는 커머스 플랫폼\'을 만드는 데 핵심적인 역할을 할 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 핀테크/커머스의 핵심인 \'데이터 정합성\'을 100% 보장하여 시스템의 신뢰를 구축했습니다.</strong>',
    '<br />',
    '신규 유료 재화 시스템을 개발하며, 분산 환경에서의 동시성 이슈로 인한 데이터 불일치 문제를 <strong style="font-weight: bold;">Redis 분산 락(Redisson)</strong>을 도입하여 완벽하게 해결했습니다. 단순한 기능 구현을 넘어, 재화의 생성부터 소멸까지 모든 흐름을 추적하고, 부하 테스트를 통해 <strong style="font-weight: bold;">단 한 건의 오차도 발생하지 않음</strong>을 증명해 냈습니다.',
    '<br />',
    '이 경험은 고객의 주문 내역과 셀러를 위한 정산 데이터가 1원이라도 틀려서는 안 되는 `컬리`의 코어 시스템에서, 가장 강력한 무기인 \'데이터 무결성\'을 담보하는 기반이 될 것입니다.',
    '<br />',
    '<br />',
    '견고한 아키텍처 설계 역량과 타협하지 않는 데이터 정확성을 바탕으로, `컬리`의 고객들이 최상의 상품을 가장 신선하게 만나는 모든 여정이 기술적 안정성 위에서 이루어질 수 있도록 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
