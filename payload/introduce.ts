import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">기술로 비즈니스 문제를 해결</strong>하고 성공적인 프로덕트를 만드는 백엔드 개발자 지중구입니다. 저의 경험과 역량은 `슬로그업`이 최고의 기업들과 함께 만드는 성공적인 프로젝트들에 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '`첫째`, 복잡한 시스템의 병목을 체계적인 접근으로 해결하고, <strong style="font-weight: bold;">확장성 있는 아키텍처를 설계</strong>한 경험이 있습니다.',
    'AI 챗봇의 심각한 응답 지연 문제를 해결하기 위해, 비즈니스 영향을 최소화하며 기존 동기 구조를 AWS SQS 기반의 비동기 아키텍처로, 점진적으로 전환했습니다. 이 과정을 통해 <strong style="font-weight: bold;">분당 6,000건의 요청을 지연 없이 처리</strong>하며 응답 속도를 <strong style="font-weight: bold;">99% 단축</strong>했고, 어떤 클라이언트의 요구사항에도 유연하게 대응할 수 있는 MSA 시스템의 기반 설계 역량을 증명했습니다.',
    '<br />',
    '<br />',
    '`둘째`, 기술적 해결책을 통해 <strong style="font-weight: bold;">비즈니스의 성장을 직접 주도</strong>한 경험이 있습니다. ',
    '단순히 트래픽을 감당하는 것을 넘어, 이탈 사용자를 줄이기 위해 AI 선톡 기능을 개발하여 <strong style="font-weight: bold;">푸시 기반 재참여율 40%, 리텐션 20% 증가</strong>라는 직접적인 비즈니스 임팩트를 만들었습니다. 이는 기술이 어떻게 고객사의 성공으로 직결될 수 있는지를 보여주는 경험입니다.',
    '<br />',
    '<br />',
    '`슬로그업`이 다양한 클라이언트와 함께 <strong style="font-weight: bold;">\'IT가 필요한 곳에 IT가 있게\'</strong> 하는 과정에서는 안정적인 대규모 트래픽 처리 능력과 변화에 유연한 아키텍처 설계가 필수적일 것입니다. 저의 문제 해결 경험을 바탕으로, 어떤 프로젝트에서도 가장 신뢰할 수 있는 기술 파트너가 되어 `슬로그업`의 성공에 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
