import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서, 기술적 문제를 집요하게 파고들어 서비스의 \'신뢰\'와 \'성장\'을 동시에 확보하는 데 집중해왔습니다. 특히 복잡한 비즈니스 로직을 유연하게 풀어내는 아키텍처 설계 역량과 데이터 무결성을 사수했던 저의 경험은, `짐싸`가 추구하는 \'마음 편한 이사 플랫폼\'을 기술적으로 완성하는 데 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 대규모 트래픽과 복잡한 비즈니스 로직을 감당할 수 있는 <strong style="font-weight: bold;">확장 가능한 아키텍처</strong>를 구축한 경험이 있습니다.',
    '트래픽 급증으로 인한 AI 챗봇 서비스의 응답 지연을 해결하기 위해, 기존의 동기 블로킹 구조를 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 아키텍처로 전환</strong>하는 프로젝트를 주도했습니다. 이를 통해 <strong style="font-weight: bold;">분당 6,000건의 요청을 지연 없이 처리</strong>하며 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시켰고, 시스템 간 결합도를 낮춰 장애 전파를 막는 유연성을 확보했습니다. `짐싸`의 \'고객-파트너 양방향 견적 매칭\'은 하나의 고객 요청이 수많은 파트너 알림과 매칭 연산으로 이어지는 대표적인 트래픽 집중 구간이라고 생각합니다. 저의 비동기 아키텍처 설계 경험은 이러한 부하를 효율적으로 분산시켜, 고객에게는 빠른 견적을, 파트너에게는 놓치지 않는 비즈니스 기회를 안정적으로 제공하는 데 기여할 것입니다.',
    '<br />',
    '<br />',
    '둘째, 분산 환경에서의 동시성 이슈를 원천 차단하여 <strong style="font-weight: bold;">데이터 정합성을 100% 보장</strong>한 경험이 있습니다.',
    '신규 유료 결제 시스템 구축 당시, 동시 요청으로 인한 데이터 불일치 문제를 <strong style="font-weight: bold;">Redis를 이용한 분산 락(Redisson)</strong>을 도입하여 해결했습니다. 부하 테스트를 통해 극한의 상황에서도 데이터 무결성이 유지됨을 증명하며 서비스의 신뢰도를 높였습니다. 이사는 고객의 소중한 자산과 새로운 시작을 다루는 영역인 만큼, 예약과 결제 정보의 정확성은 타협할 수 없는 가치입니다. 저의 동시성 제어 및 트러블슈팅 노하우를 바탕으로, `짐싸`의 모든 거래 과정에서 기술적 불안 요소를 제거하고 고객이 마음 편히 이용할 수 있는 무결한 시스템을 만들겠습니다.',
    '<br />',
    '<br />',
    '기존 시스템의 문제를 주도적으로 발견하고 해결하는 \'집요함\'과, 설계부터 장애 대응, 유지보수까지 A to Z를 책임져 본 운영 경험을 바탕으로, `짐싸`의 폭발적인 성장의 속도를 견디고 이를 앞서 나가는 단단한 백엔드 시스템을 구축하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
