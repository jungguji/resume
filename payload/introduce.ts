import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 기술적 한계를 극복하여 안정적인 서비스를 제공하고 비즈니스 성장을 이끌어내는 경험을 해왔습니다. 특히 대규모 트래픽 환경에서의 성능 최적화와 기존 시스템의 안정성을 확보했던 두 가지 핵심 경험은, <strong style="font-weight: bold;">`메가스터디교육`</strong>이 수많은 학생들에게 최상의 학습 경험을 제공하는 데 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 대규모 트래픽을 안정적으로 처리하며 시스템의 성능을 극적으로 개선한 경험이 있습니다.',
    '<br />',
    '<br />',
    '단일 스레드 구조로 5시간 이상 소요되던 19만 건의 푸시 발송 시스템에 병렬 처리와 Bulk API를 도입하여 처리 시간을 <strong style="font-weight: bold;">30분으로 90% 단축</strong>했습니다. 또한, 동기 방식으로 심각한 지연이 발생하던 AI 챗봇 시스템을 비동기 아키텍처로 전환하여 응답 속도를 <strong style="font-weight: bold;">99% 개선</strong>했습니다. 이러한 경험은 대규모 동시 접속이 발생하는 <strong style="font-weight: bold;">`메가스터디`</strong>의 온라인 강의 및 서비스 트래픽을 안정적으로 처리하고, 어떤 상황에서도 끊김 없는 학습 환경을 제공하는 견고한 기술 기반이 될 것입니다.',
    '<br />',
    '<br />',
    '둘째, 레거시 시스템을 포함한 다양한 환경에서 데이터베이스 성능을 최적화하고 데이터의 무결성을 보장한 경험이 있습니다.',
    '<br />',
    '<br />',
    '신규 유료 서비스 개발 당시, Redis 분산 락을 활용하여 동시 요청으로 인한 데이터 불일치 문제를 해결하고 결제 데이터의 정합성을 <strong style="font-weight: bold;">100% 확보</strong>했습니다. 또한 JSP와 jQuery 기반의 레거시 <strong style="font-weight: bold;">페이지 로딩 속도를 9초에서 1초 이내로 개선</strong>하며, SQL 쿼리 최적화와 데이터 구조 개선의 중요성을 증명했습니다. 이는 <strong style="font-weight: bold;">`메가스터디`</strong>의 다양한 기존 서비스를 안정적으로 운영하고 개선하며, 학생들의 중요한 학습 데이터와 결제 정보의 신뢰도를 완벽하게 지켜내는 데 가장 직접적으로 기여할 수 있는 역량이라고 생각합니다.',
    '<br />',
    '<br />',
    '현재에 안주하지 않고 끊임없이 시스템의 한계를 극복해왔던 경험을 바탕으로, <strong style="font-weight: bold;">`메가스터디교육`</strong>과 함께 도전하며 학생들이 가장 신뢰할 수 있는 교육 서비스를 만들어나가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
