import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서 기술적 난제를 해결하여 비즈니스의 한계를 돌파하는 데 집중해왔습니다. `쿠팡`이 지향하는 "쿠팡 없이 어떻게 살았을까?"라는 고객 감동은, 365일 24시간 중단 없는 고가용성 시스템 위에서만 실현 가능하다고 생각합니다. 대규모 트래픽을 감당하는 아키텍처 설계 역량과 데이터 무결성을 지켜낸 저의 경험은, `쿠팡`의 거대한 이커머스 생태계를 지탱하는 단단한 기반이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 메시지 큐(AWS SQS)를 활용한 비동기 아키텍처를 도입하여 대규모 트래픽 병목을 해소한 경험이 있습니다.</strong>',
    '과거 AI 챗봇 서비스의 응답 지연 문제를 해결하기 위해, 강하게 결합되어 있던 동기 블로킹(Blocking) 구조를 SQS 기반의 비동기 처리 구조로 전환했습니다. 이를 통해 시스템 간 의존성을 낮추고, <strong style="font-weight: bold;">분당 6,000건 이상의 요청</strong>이 몰리는 피크타임에도 지연 없이 처리가 가능하도록 확장성을 확보했습니다. 결과적으로 응답 속도를 <strong style="font-weight: bold;">99% 단축</strong>시키며 성능을 극대화했습니다. 이러한 경험은 수많은 주문이 동시에 발생하는 `쿠팡`의 환경에서, 시스템 부하를 효율적으로 분산시키고 안정적인 서비스를 제공하는 데 기여할 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 분산 환경에서의 동시성 이슈를 완벽하게 제어하여 \'고객 신뢰\'를 기술적으로 구현했습니다.</strong>',
    '신규 유료 결제 시스템 구축 당시, 다중 서버 환경에서 발생하는 데이터 불일치 문제를 Redis 분산 락(Redisson) 도입으로 해결하여 <strong style="font-weight: bold;">데이터 정합성 100%</strong>를 달성했습니다. 부하 테스트를 통해 동시 주문 상황에서도 결제와 정산 데이터가 단 1원의 오차도 없이 일치함을 증명해 냈습니다. 고객의 주문과 결제 정보를 정확하게 처리하는 것은 `쿠팡`이 쌓아온 독보적인 입지와 신뢰를 지키는 핵심입니다. 저는 복잡한 비즈니스 로직 안에서도 데이터의 무결성을 사수하여, 고객이 안심하고 쇼핑할 수 있는 환경을 만들겠습니다.',
    '<br />',
    '<br />',
    '주도적인 아키텍처 설계 능력과 시스템 안정성을 집요하게 파고들었던 경험을 바탕으로, `쿠팡`의 동료들과 함께 커머스의 미래를 만들어가고 싶습니다. 고객의 삶을 혁신하는 `쿠팡`의 여정에 기술적 탁월함으로 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
