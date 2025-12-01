import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, <strong style="font-weight: bold;">대규모 트래픽 처리를 위한 아키텍처 설계</strong>와 <strong style="font-weight: bold;">결제 데이터의 정합성을 보장</strong>했던 저의 두 가지 핵심 경험은, `테크랩스`의 <strong style="font-weight: bold;">애드테크 솔루션 고도화</strong>와 <strong style="font-weight: bold;">점신 서비스의 안정적인 운영</strong>에 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 대규모 트래픽을 유연하게 처리하는 확장성 있는 아키텍처를 설계하고 구축한 경험이 있습니다.</strong>',
    'AI 챗봇 서비스의 병목을 해결하기 위해, 기존 동기 블로킹 구조를 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 아키텍처</strong>로 전환하는 프로젝트를 주도하고, <strong style="font-weight: bold;">분당 6,000건의 요청을 지연 없이 처리하며 응답 속도를 99% 단축</strong>시켜, 트래픽 폭주 시에도 장애가 전파되지 않는 유연한 시스템을 구축했습니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 분산 환경에서 발생하는 동시성 이슈를 해결하여 데이터의 정합성을 100% 보장한 경험이 있습니다.</strong>',
    '신규 유료 재화 시스템 개발 당시, 동시 요청으로 인한 데이터 불일치 문제를 <strong style="font-weight: bold;">Redis 분산 락(Redisson)</strong>을 도입하여 해결했습니다. 부하 테스트를 통해 극한 상황에서도 데이터 무결성이 유지됨을 증명하며, 시스템의 신뢰도를 확보했습니다. 이는 금전적 데이터의 정확도가 무엇보다 중요한 `테크랩스`의 <strong style="font-weight: bold;">광고 정산 및 수익 배분 시스템</strong>에서, 매체와 광고주에게 투명하고 정확한 결과를 보장하는 데 기여할 수 있는 필수적인 역량입니다.',
    '<br />',
    '<br />',
    '견고한 아키텍처 설계 역량과 비즈니스 핵심 데이터의 안정성을 책임졌던 경험을 바탕으로, `테크랩스`의 광고 플랫폼이 최고의 효율과 수익을 창출할 수 있도록 가장 신뢰할 수 있는 백엔드 시스템을 만들어나가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
