import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, 저는 단순히 기능을 구현하는 것을 넘어 <strong style="font-weight: bold;">안정적인 기반 위에서 비즈니스의 성장을 주도하는 아키텍처를 설계하고 개선</strong>하는 일에 가장 큰 가치를 둡니다. 교보생명그룹의 방대한 데이터를 바탕으로 새로운 고객 경험을 창출하려는 <code>디플래닉스</code>의 비전은, 기술을 통해 비즈니스 문제를 해결해 온 저의 경험과 정확히 일치합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">기존 시스템을 안정적으로 고도화하는 데 자신 있습니다.</strong> 5분 이상 소요되던 채팅 응답 속도를 3초 이내로 단축시킨 경험이 대표적입니다. 저는 비즈니스 연속성을 최우선으로 고려하여, 기존 동기 방식 시스템을 <strong style="font-weight: bold;">3단계에 걸쳐 AWS SQS 기반의 비동기 아키텍처로 점진적으로 전환하는 프로젝트를 주도</strong>했습니다. 이 경험은 <code>디플래닉스</code>가 운영 중인 교보생명그룹 데이터 포털의 성능을 최적화하고, 늘어나는 데이터와 사용자 요청에도 유연하게 확장 가능한 시스템을 만드는 데 직접적으로 기여할 수 있습니다.',
    '<br />',
    '<br />',
    '금융 데이터의 무결성을 지키는 데 필요한 깊은 이해와 경험을 갖추었습니다. 분산 환경에서 발생하는 결제 데이터 불일치 이슈를 Redis 분산 락을 적용하여 <strong style="font-weight: bold;">0건으로 해결</strong>하고, 부하 테스트를 통해 데이터 정합성을 100% 보장한 경험이 있습니다. 특히 이 과정에서 <strong style="font-weight: bold;">사업 및 재무팀과 긴밀하게 협업하며 재화 정책을 수립</strong>했던 경험은, 다양한 이해관계자와의 소통이 필수적인 <code>디플래닉스</code>의 업무 환경에 빠르게 적응하고 시너지를 낼 수 있는 저만의 강점입니다.',
    '<br />',
    '<br />',
    '<code>디플래닉스</code>는 안정적인 기반 위에서 새로운 역사를 만들어가는 매력적인 기회를 가졌다고 생각합니다. 저의 아키텍처 설계 능력과 성능 최적화 경험, 그리고 다양한 직군과의 협업 능력을 바탕으로 <code>디플래닉스</code>의 데이터 포털을 가장 신뢰성 있고 가치 있는 서비스로 함께 만들어가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
