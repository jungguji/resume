import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, 기술적 도전을 통해 실제 비즈니스 문제를 해결하고 고객의 삶에 긍정적인 변화를 만드는 것에 가장 큰 보람을 느낍니다. 인테리어 시장의 정보 비대칭을 해결하고 새로운 표준을 만들어가는 <code>오늘의집</code>의 담대한 비전에 깊이 공감하며, 저의 경험이 <code>오늘의집</code>의 성장에 기여할 <strong style="font-weight: bold;">핵심 동력</strong>이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 고객이 최고의 경험을 하는 것을 방해하는 기술적 장벽을 제거한 경험이 있습니다. AI 챗봇의 응답 속도가 5분 이상 걸리던 문제를 해결하기 위해, AWS SQS 기반 비동기 아키텍처로의 <strong style="font-weight: bold;">점진적 전환을 주도</strong>했습니다. 그 결과 응답 속도를 <strong style="font-weight: bold;">3초 이내로 99% 단축</strong>하며 고객 경험을 극적으로 개선했습니다. <code>오늘의집</code>에서도 인테리어, 이사 등 고객이 경험하는 모든 과정의 기술적 병목을 해결하여, 모든 사용자가 감탄하는 안정적인 서비스를 제공하는 데 기여하겠습니다.',
    '<br />',
    '<br />',
    '둘째, 저는 AI를 활용해 비즈니스 성과를 창출하는 것을 넘어, 개발 문화까지 혁신하는 <strong style="font-weight: bold;">AI Native</strong> 인재입니다. 사용자 재유입을 목표로 \'선톡\' 기능을 개발하여 <strong style="font-weight: bold;">리텐션을 최대 20%p 개선</strong>했으며, 이 과정에서 LLM의 한계를 극복하는 구조를 게획하고 구현했습니다. 나아가, 개발 생산성 향상을 위해 LangChain과 로컬 LLM 기반의 <strong style="font-weight: bold;">AI 코드 리뷰어</strong>를 주도적으로 개발하며 AI를 실제 개발 워크플로우에 적용하는 깊이 있는 실험을 했습니다. 저의 이러한 경험은 <code>오늘의집</code>에서 새로운 AI 서비스를 성공시키고, 일하는 방식까지 함께 바꿔나가는 데 핵심적인 역할을 할 것입니다.',
    '<br />',
    '<br />',
    '셋째, 복잡한 비즈니스 로직 속에서 <strong style="font-weight: bold;">데이터 무결성을 보장</strong>하여 고객의 \'신뢰\'를 지키는 개발자입니다. 신규 결제 시스템을 구축하며 단순한 기술적 동시성 제어를 넘어, 무료/유료 재화가 혼합된 복잡한 정산 정책의 <strong style="font-weight: bold;">데이터 무결성까지 100% 보장</strong>해야 하는 비즈니스적 난제를 해결했습니다. 사업팀과 긴밀히 협업하여 모든 거래 내역을 추적할 수 있는 DB 스키마를 설계했으며, Redis 분산 락을 적용하여 분산 환경에서도 치명적인 데이터 누락을 원천적으로 방지했습니다. <code>오늘의집</code>의 복잡한 커머스 시스템과 포인트 정책 환경에서도 고객이 믿고 사용할 수 있는 서비스의 단단한 기반을 만들겠습니다.',
    '<br />',
    '<br />',
    '저의 문제 해결 능력과 <code>오늘의집</code>의 비전이 만났을 때 만들어낼 시너지를 기대합니다. 기술을 통해 사람들의 삶을 더 나은 곳으로 이끄는 여정에 함께하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
