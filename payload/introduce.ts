import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, 기술을 통해 비즈니스의 신뢰도를 증명하고 성장의 기반이 되는 안정적인 시스템을 구축합니다. 복잡한 정보의 불균형을 해소하여 모든 사람이 당연한 권리를 누리도록 돕는 <code>자비스앤빌런즈</code>의 미션에 깊이 공감하며, 저의 경험이 2천만 고객의 신뢰를 지키는 핵심 역량이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 대규모 트래픽이 집중되는 환경에서 시스템 안정성을 극적으로 개선한 경험이 있습니다. 기존 동기 방식 아키텍처의 병목을 <strong style="font-weight: bold;">AWS SQS 기반 비동기 구조</strong>로 개선하여, 피크타임의 대량 요청에도 핵심 API의 응답 속도를 <strong style="font-weight: bold;">5분에서 3초 이내로 99% 단축</strong>했습니다. 이 경험은 5월 종합소득세 신고 기간처럼 트래픽이 폭증하는 상황에서도 모든 고객이 지연 없이 <code>삼쩜삼</code>을 통해 자신의 권리를 찾을 수 있도록, 서비스의 안정성을 확보하는 데 직접적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    '둘째, 오차가 허용되지 않는 결제 데이터의 <strong style="font-weight: bold;">정합성을 100% 보장</strong>한 경험이 있습니다. 분산 환경의 동시성 문제를 <strong style="font-weight: bold;">Redis 분산 락</strong>으로 해결하고, 부하 테스트(wrk)를 통해 어떤 상황에서도 결제 데이터가 완벽한 일관성을 유지함을 정량적으로 증명했습니다. 특히 환급이라는 민감한 데이터를 다루는 <code>삼쩜삼</code> 서비스에서 <strong style="font-weight: bold;">데이터 무결성은 고객 신뢰의 기반</strong>입니다. 저의 경험을 바탕으로 잠재적인 데이터 오류 가능성을 원천 차단하고, 고객이 언제나 믿고 사용할 수 있는 가장 신뢰도 높은 환급 플랫폼을 만드는 데 기여하고 싶습니다.',
    '<br />',
    '<br />',
    '저의 아키텍처 개선 능력과 데이터 무결성 확보 경험을 바탕으로 <code>자비스앤빌런즈</code>의 기술적 과제를 해결하고, 누구나 당연히 누려야 할 권리를 찾아주는 여정에 함께하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
