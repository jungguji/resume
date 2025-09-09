import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 복잡한 기술 문제를 해결하여 <strong style="font-weight: bold;">비즈니스의 안정성과 성장</strong>을 이끌어내는 데 집중해왔습니다. 특히 <strong style="font-weight: bold;">대규모 트래픽을 위한 아키텍처 설계</strong>와 <strong style="font-weight: bold;">재화 데이터의 정합성을 보장</strong>했던 저의 두 가지 핵심 경험은 `드림어스컴퍼니`의 기술적 과제를 해결하고, `FLO` 서비스의 가치를 높이는 데 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, <strong style="font-weight: bold;">대규모 트래픽을 안정적으로 처리하는 확장성 있는 아키텍처</strong>를 설계하고 구축한 경험이 있습니다.<br />AI 챗봇의 심각한 응답 지연 문제를 해결하기 위해, 기존의 동기 블로킹 구조를 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 MSA</strong>로 전환하는 프로젝트를 주도했습니다. 이 과정을 통해 <strong style="font-weight: bold;">분당 6,000건의 요청을 지연 없이 처리</strong>하며 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시켰고, <strong style="font-weight: bold;">장애가 전파되지 않는 유연한 시스템</strong>을 구축했습니다. 이러한 경험은 수많은 사용자가 동시에 접속하는 `FLO`의 트래픽을 안정적으로 처리하고, 향후 다양한 기능 확장을 위한 견고한 기술 기반을 마련하는 데 큰 도움이 될 것입니다.',
    '<br />',
    '<br />',
    '둘째, <strong style="font-weight: bold;">분산 환경에서 발생하는 동시성 이슈를 해결하여 결제 데이터의 정합성을 100% 보장</strong>한 경험이 있습니다.<br />신규 유료 재화 시스템 개발 당시, 동시 결제 요청으로 인한 데이터 불일치 문제를 <strong style="font-weight: bold;">Redis 분산 락(Redisson)</strong>을 도입하여 해결했습니다. <strong style="font-weight: bold;">부하 테스트를 통해 어떤 상황에서도 데이터의 정합성이 유지</strong>됨을 증명하며, 사용자의 신뢰와 직결되는 안정적인 결제 시스템을 구축했습니다. 이는 다양한 구독 상품과 결제 수단을 다루는 `FLO`의 핵심 비즈니스인 <strong style="font-weight: bold;">이용권/결제 시스템의 신뢰도를 확보</strong>하는 데 직접적으로 기여할 수 있는 가장 중요한 역량이라고 생각합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">견고한 아키텍처 설계 역량</strong>과 <strong style="font-weight: bold;">비즈니스 핵심 시스템의 안정성</strong>을 책임졌던 경험을 바탕으로, `FLO` 사용자들이 언제나 <strong style="font-weight: bold;">\'일상을 듣는 즐거움\'</strong>을 누릴 수 있도록 가장 신뢰할 수 있는 백엔드 시스템을 만들어나가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
