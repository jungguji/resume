import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '결제 데이터의 불일치는 서비스의 신뢰를 무너뜨리는 가장 치명적인 장애입니다. 저는 분산 환경의 <strong style="font-weight: bold;">동시성 이슈</strong>로 발생하던 결제 데이터 유실 문제를 Redis 분산 락으로 해결하고 부하 테스트를 통해 <strong style="font-weight: bold;">데이터 정합성을 100% 보장</strong>한 경험이 있습니다. 이 경험은 `토스플레이스`가 만들어갈 오프라인 결제 생태계의 기술적 신뢰를 확보하는 데 가장 중요하고 직접적인 역량이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '안정성뿐만 아니라, 대규모 트래픽 환경에서의 탁월한 사용자 경험 또한 중요합니다. 저는 AI 챗봇의 응답 속도가 5분 이상 걸리던 심각한 장애 상황을 해결하기 위해, AWS SQS 기반의 비동기 아키텍처로 전환을 주도했습니다. 그 결과 피크타임 기준 <strong style="font-weight: bold;">분당 6,000건의 요청을 지연 없이 처리</strong>하고 <strong style="font-weight: bold;">응답 속도를 3초 이내로 99% 단축</strong>하여, 기술이 어떻게 비즈니스 성과와 직결되는지를 증명했습니다. `토스플레이스`에서 수많은 결제가 일어나는 순간에도 사용자가 불편함 없는 최고의 경험을 하도록 만들겠습니다.',
    '<br />',
    '<br />',
    '저는 제가 만드는 서비스에 대한 강한 주인의식을 가지고 있습니다. <strong style="font-weight: bold;">유일한 백엔드 개발자</strong>로서 B2C 서비스의 설계부터 운영, 개선까지 전 과정을 책임졌던 경험은, 장애 상황 앞에서 좌절하기보다 근본적인 원인을 찾아 시스템을 성장시키는 원동력이 되었습니다. 또한, 문제 해결 경험을 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer"> 기술 블로그</a>와 사내 세미나로 공유하며 동료와 함께 성장하는 가치를 중요하게 생각합니다.',
    '<br />',
    '<br />',
    '`토스플레이스`는 단순히 기술을 구현하는 회사가 아닌, 기술로 세상을 바꾸는 회사라고 생각합니다. 저의 장애 해결 능력, 아키텍처 설계 경험, 그리고 서비스에 대한 주인의식을 바탕으로 `토스플레이스`에서 가장 복잡하고 어려운 문제들을 해결하며 <strong style="font-weight: bold;">\'혁신적인 오프라인 결제 경험\'</strong>을 함께 만들어가고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
