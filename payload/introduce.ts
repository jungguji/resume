import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java & Spring 기반의 <strong style="font-weight: bold;">7년차 백엔드 개발자</strong>입니다. 기술을 맹목적으로 따르기보다 문제의 본질을 파악하고, 대규모 트래픽 환경에서 <strong style="font-weight: bold;">비즈니스 연속성을 보장하는 최적의 해결책</strong>을 찾아 시스템을 완성해 나가는 데 강점이 있습니다.',
    '<br />',
    '<br />',
    '특히 정확성이 핵심인 대규모 프로모션 서비스를 안정적으로 운영하는 데 필요한 두 가지 핵심 역량을 모두 갖추고 있습니다.',
    '<br />',
    '<br />',
    '첫째, <strong style="font-weight: bold;">대용량 트래픽 처리 및 성능 최적화 역량</strong>입니다. 19만 명 전체 사용자 대상 푸시 발송 시간을 5시간에서 30분으로 <strong style="font-weight: bold;">90% 이상 단축</strong>시킨 경험이 있습니다. 병렬 처리와 API 호출 최적화를 통해 대규모 배치 작업의 병목을 해결한 이 경험은, `SSG`의 대량 프로모션 데이터를 효율적으로 집계하고 고객에게 실시간으로 혜택을 제공하는 시스템을 구축하는 데 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '둘째, <strong style="font-weight: bold;">분산 환경에서의 데이터 무결성 확보 역량</strong>입니다. 분산 서버 환경에서 동시 요청으로 인해 발생하던 \'Last Update\' 문제를 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">Redis 분산 락을 적용</a>하여 데이터 불일치 발생률 0%로 해결한 경험이 있습니다. 이 경험을 바탕으로, 수많은 고객이 동시에 접속하는 상황에서도 한 치의 오차 없이 정확한 쿠폰 발급, 사용, 소멸이 이루어지는 안정적인 프로모션 시스템을 구축하는 데 핵심적인 역할을 수행하겠습니다.',
    '<br />',
    '<br />',
    '기술을 통해 비즈니스 문제를 해결하며 동료와 함께 성장하는 가치를 중요하게 생각합니다. 저의 경험과 역량을 바탕으로 `SSG 프로모션 서비스`의 기술적 완성도와 안정성을 한 단계 높이는 데 기여하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
