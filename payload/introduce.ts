import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '지난 7년 간 저는 복잡한 기술적 난제를 해결하며 <strong style="font-weight: bold;">비즈니스의 연속성과 시스템 안정성을 확보</strong>하는 데 집중해왔습니다. 특히 <strong style="font-weight: bold;">대규모 트래픽을 감당하는 아키텍처 설계 역량</strong>과 <strong style="font-weight: bold;">결제 데이터 정합성을 보장</strong>했던 경험은, 해피포인트 기반의 방대한 플랫폼과 결제 솔루션을 운영하는 `섹터나인`에 즉시 기여할 수 있는 핵심 경쟁력이라고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 대규모 트래픽을 유연하게 제어하는 비동기 아키텍처를 구축하여 시스템 확장성을 확보한 경험이 있습니다.',
    '<br />',
    '과거 급증하는 트래픽으로 인한 서비스 지연 문제를 해결하기 위해, 기존의 동기 블로킹 구조를 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 아키텍처로 점진적으로 개선</strong>하는 프로젝트를 주도했습니다. 이를 통해 시스템 병목을 해소하며 분당 <strong style="font-weight: bold;">6,000건</strong>의 피크타임 요청을 지연 없이 처리했고, 응답 속도를 <strong style="font-weight: bold;">99% 단축</strong>시키는 성과를 거뒀습니다. 이러한 경험은 다양한 마케팅 이벤트와 O2O 주문이 집중되는 `섹터나인`의 대규모 트래픽 환경에서, 서버 부하를 효율적으로 분산하고 안정적인 서비스를 제공하는 데 밑거름이 될 것입니다.',
    '<br />',
    '<br />',
    '둘째, 분산 환경에서 결제 데이터의 무결성을 <strong style="font-weight: bold;">100% 보장</strong>하며 시스템 신뢰도를 높였습니다.',
    '<br />',
    '유료 재화 시스템을 개발하며 발생한 <strong style="font-weight: bold;">동시성 이슈를 해결</strong>하기 위해, Redis 분산 락(Redisson)을 도입하여 데이터 불일치 문제를 원천 차단했습니다. 부하 테스트를 통해 극한의 상황에서도 결제 및 재화 데이터의 정합성이 유지됨을 검증하였고, 이는 고객 신뢰와 직결되는 성과로 이어졌습니다. 포인트 적립, 사용 및 가맹점 결제가 빈번하게 일어나는 `섹터나인`의 핵심 비즈니스에서, 이와 같은 트랜잭션 관리 및 데이터 정합성 확보 역량은 결제 시스템의 완성도를 높이는 데 필수적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    'SPC그룹의 디지털 혁신을 이끄는 `섹터나인`에서, 저의 아키텍처 설계 경험과 안정성 중심의 개발 철학을 바탕으로 <strong style="font-weight: bold;">\'가장 신뢰받는 Smart Life Technology 플랫폼\'</strong>을 만들어가는 데 힘을 보태겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
