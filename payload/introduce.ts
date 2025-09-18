import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 기술을 통해 비즈니스 성장의 기반이 되는 안정적이고 확장 가능한 시스템을 구축합니다. "세상 모든 사업자의 자금 문제를 해결한다"는 <code>올라핀테크</code>의 비전에 깊이 공감하며, 저의 경험이 <code>올라핀테크</code>의 기술적 신뢰도를 한 단계 높일 핵심 역량이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">대규모 트래픽 환경에서 핵심 시스템의 안정성을 극적으로 개선한 경험이 있습니다.</strong> 기존 동기 방식 아키텍처의 병목을 AWS SQS 기반 비동기 구조로 개선하여, <strong style="font-weight: bold;">핵심 API의 응답 속도를 5분에서 3초 이내로 99% 단축</strong>했습니다. 이 경험은 `allra`와 같은 선정산 서비스가 트래픽 급증에도 지연 없이 사업자에게 자금을 전달하는, <code>올라핀테크</code>의 가장 중요한 고객 약속을 지키는 데 직접적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    '특히 <strong style="font-weight: bold;">데이터 정합성이 생명인 시스템에서, 단순한 동시성 제어를 넘어 복잡한 비즈니스 규칙까지 고려한 경험이 있습니다.</strong> 유료와 무료 재화가 혼용되는 복합 결제 로직의 동시성 문제를 <strong style="font-weight: bold;">Redis 분산 락</strong>으로 해결하고, <strong style="font-weight: bold;">부하 테스트(wrk)를 통해 어떤 상황에서도 데이터가 100% 일관성을 유지함을 정량적으로 증명</strong>했습니다. 이 해결 과정을 기술 블로그와 사내 세미나로 공유하여 팀 전체의 기술 역량을 강화했던 것처럼, <code>올라핀테크</code>에서 발생할 수 있는 치명적인 데이터 장애를 사전에 방지하고, 동료와 함께 투명하게 기술적 난관을 해결하며 가장 신뢰도 높은 사업자 금융 플랫폼을 만들고 싶습니다.',
    '<br />',
    '<br />',
    '저의 아키텍처 설계 능력과 문제 해결 경험을 바탕으로 <code>올라핀테크</code>의 복잡한 기술 과제를 해결하고, 모든 사업자가 믿고 의지할 수 있는 금융의 미래를 함께 만들어가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
