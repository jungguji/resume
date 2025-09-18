import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 기술을 통해 비즈니스 문제를 해결하고 안정성과 확장성을 모두 갖춘 시스템을 구축합니다. 복잡한 금융 정보를 명쾌하게 연결하여 사용자에게 최적의 선택지를 제공하는 <code>핀다</code>의 비전에 깊이 공감하며, 저의 경험이 <code>핀다</code>의 기술적 과제를 해결하고 성장을 이끌 핵심 역량이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">대규모 트래픽 처리와 극적인 성능 개선 경험은 <code>핀다</code>의 서비스 안정성을 책임질 것입니다.</strong> 동기 방식으로 구현된 레거시 시스템을 점진적으로 개선하여 AWS SQS 기반의 비동기 아키텍처를 도입해 트래픽 부하 상황에서 <strong style="font-weight: bold;">5분 이상 걸리던 채팅 응답 속도를 3초 이내로 99% 단축</strong>하고, <strong style="font-weight: bold;">분당 6,000건 이상의 AI 챗봇 대화 요청을 안정적으로 처리</strong>한 경험이 있습니다. 이는 수많은 금융 상품을 비교하고 실시간으로 최적의 조건을 찾아야 하는 <code>핀다</code>의 백엔드 시스템이 어떤 트래픽 상황에서도 지연 없이 안정적으로 동작하는 기반이 될 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">특히 금융 도메인의 심장과 같은 데이터 정합성을 보장하는 저의 경험은 <code>핀다</code>의 서비스 신뢰도를 높일 것입니다.</strong> 저는 단순히 기술적인 동시성 제어를 넘어, 무료 재화와 유료 캐시가 함께 사용되는 복합 결제 비즈니스 로직의 <strong style="font-weight: bold;">데이터 정합성을 100% 보장</strong>한 경험이 있습니다. Redis 분산 락을 통해 분산 환경의 동시성 이슈를 해결했을 뿐만 아니라, <strong style="font-weight: bold;">부하 테스트를 통해 극한의 동시 요청 상황에서도 데이터 불일치가 발생하지 않음을 정량적으로 검증</strong>했습니다. 이러한 경험은 대출 심사, 한도 조회 등 여러 금융사의 API와 데이터를 동시에 다루며 발생할 수 있는 치명적인 데이터 불일치 장애를 사전에 방지하고, <code>핀다</code> 사용자가 언제나 믿고 사용할 수 있는 서비스를 만드는 데 결정적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    '저의 문제 해결 능력과 동료와 함께 성장하는 가치관을 바탕으로 <code>핀다</code>의 기술적 난관을 해결하고, 사용자에게 가장 정확하고 유리한 금융 기회를 제공하는 <strong style="font-weight: bold;">대한민국 최고의 대출 비교 추천 플랫폼</strong>을 함께 만들어가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
