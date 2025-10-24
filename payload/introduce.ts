import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java & Spring / AWS 기반의 7년차 백엔드 개발자로서, 기술을 통해 \'사람을 성장시키는 AI\'라는 `소크라에이아이`의 비전을 실현하는 데 기여하고 싶습니다. 문제의 본질을 파악하고, 안정적인 시스템을 통해 사용자에게 최고의 학습 경험을 제공하는 과정에 가장 큰 가치를 둡니다.',
    '<br />',
    '<br />',
    '첫째, AI 서비스의 급증하는 트래픽 문제를 해결하고 학습 경험의 질을 극적으로 개선한 경험이 있습니다. 최대 5분까지 지연되던 AI 챗봇의 응답 속도를 <strong style="font-weight: bold;">AWS SQS 기반 비동기 아키텍처</strong>로 전환하여 <strong style="font-weight: bold;">평균 3초 이내로 99% 단축</strong>했습니다. 이 경험은 `소크라에이아이`의 AI 튜터가 수많은 사용자에게 지연 없는, 몰입감 높은 상호작용을 제공하는 안정적인 기술 기반을 만드는 데 직접적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    '둘째, 비즈니스 모델의 핵심인 인앱 재화 시스템을 <strong style="font-weight: bold;">100% 데이터 정합성을 보장</strong>하며 구축한 경험이 있습니다. 분산 환경에서 발생하는 동시성 이슈를 <strong style="font-weight: bold;">Redis 분산 락</strong>으로 완벽하게 제어하여 데이터 무결성을 확보하고, 신뢰도 높은 결제/정산 시스템을 구축했습니다. 이 역량은 `소크라에이아이`의 다양한 유료 서비스와 글로벌 비즈니스 모델이 안정적으로 운영되고 확장되는 데 핵심적인 역할을 할 것이라 확신합니다.',
    '<br />',
    '<br />',
    '저의 문제 해결 경험과 아키텍처 설계 역량을 바탕으로 \'내일 더 나아지는 학습 경험\'을 기술로 완성하는 여정에 함께하고 싶습니다. 동료와 지식을 공유하고 함께 성장하며 `소크라에이아이`의 성숙한 개발 문화에 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
