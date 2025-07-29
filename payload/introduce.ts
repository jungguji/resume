import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java & Spring / AWS 기반 <strong style="font-weight: bold;">7년차 백엔드 개발자</strong> 지중구입니다. 기술의 본질을 파악하여 현재 상황에 맞는 최적의 해결책을 적용하고, 시스템을 점진적으로 완성해 나갑니다.',
    '<br />',
    '<br />',
    '트래픽 부하 상황에서 <strong style="font-weight: bold;">AI 챗봇의 응답 지연</strong> 문제를 해결하기 위해, 비즈니스 연속성을 고려한 <strong style="font-weight: bold;">3단계 점진적 개선</strong>으로 시스템을 완전 비동기 구조로 전환하여 응답 속도를 <strong style="font-weight: bold;">99% 이상 단축</strong>하고 서비스 안정성을 확보한 경험이 있습니다. 또한, 사용자 리텐션을 높이기 위한 <strong style="font-weight: bold;">\'AI 선톡 기능\'</strong> 개발 시, LLM API의 비용 및 성능 제약을 고려하여 \'선 생성, 후 검증\' 방식을 설계하고 도입함으로써 시스템 부하를 효과적으로 분산시키고 안정적인 발송 시스템을 구축했습니다.',
    '<br />',
    '<br />',
    '이러한 경험을 통해 얻은 <strong style="font-weight: bold;">대규모 트래픽 처리 역량</strong>과 AI 서비스의 기술적 제약을 이해하고 해결하는 설계 능력을 바탕으로, `코난테크놀로지`의 LLM 서비스와 LLMOps 플랫폼이 최고의 성능과 안정성을 갖추도록 기여하고 싶습니다. 기술적 깊이와 비즈니스에 대한 이해를 겸비하여, 함께 성장하는 개발자가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
