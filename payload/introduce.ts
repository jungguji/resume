import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "\"기술이 곧 제품 수준을 결정한다\"는 인텔리전스 스쿼드의 비전에 깊이 공감합니다. 7년간 백엔드 개발자로서, 저는 기술의 가능성을 안정적인 시스템과 실제 비즈니스 성장으로 증명해왔습니다. 특히 AI 기술을 적용한 서비스의 <strong style=\"font-weight: bold;\">트래픽을 책임지며 사용자의 경험을 혁신한 저의 경험</strong>은, <strong style=\"font-weight: bold;\">`라포랩스`</strong>의 '가슴 뛰는 미션'에 기여할 가장 강력한 자산이라 확신합니다.",
    "<br />",
    "<br />",
    "첫째, AI 서비스의 폭발적인 트래픽을 감당하는 확장 가능한 시스템을 구축했습니다.",
    "AI 챗봇 기능 출시 후, 트래픽 부하 상황에서 챗봇의 답변이 5분 이상 걸리는 문제가 발생했습니다. 문제 해결을 위해 기존 동기 블로킹 구조를 <strong style=\"font-weight: bold;\">AWS SQS 기반의 완전 비동기 아키텍처로 전환하는 프로젝트를 주도</strong>했습니다. 이 과정을 통해 <strong style=\"font-weight: bold;\">분당 6,000건의 AI 챗봇 대화 요청을 지연 없이 처리하며 응답 속도를 99% 단축</strong>했고, 어떤 트래픽 증가에도 유연하게 확장 가능한 시스템의 기반을 마련했습니다. 이는 `퀸잇`의 검색, 추천 시스템이 마주할 대규모 트래픽 문제를 해결하고, 안정적인 운영 체계를 고도화하는 데 핵심적인 경험이 될 것입니다.",
    "<br />",
    "<br />",
    "둘째, 기술을 통해 비즈니스 문제를 정의하고, 데이터로 성과를 증명했습니다.",
    "단순히 시스템 안정화에 그치지 않고, 기술을 비즈니스 성장의 도구로 활용했습니다. 이탈 사용자의 재방문을 유도하기 위해 AI가 먼저 대화를 시작하는 '선톡' 기능을 기획하고 개발했습니다. 그 결과, <strong style=\"font-weight: bold;\">푸시 응답률 40%, 리텐션 10~20% 증가라는 직접적인 비즈니스 임팩트</strong>를 만들었습니다. 이는 '실험과 빠른 실행'을 통해 사용자의 선택을 이끌어내고 비즈니스 성장을 만드는 인텔리전스 스쿼드의 문제 해결 방식과 정확히 일치합니다.",
    "<br />",
    "<br />",
    "`퀸잇`의 인텔리전스 스쿼드는 최신 AI 기술을 통해 유저 경험의 실질적 혁신을 만들고 있습니다. 저의 <strong style=\"font-weight: bold;\">대규모 AI 서비스 아키텍처 설계 경험과 비즈니스 임팩트 창출 경험</strong>을 바탕으로, <strong style=\"font-weight: bold;\">`라포랩스`</strong>의 기술이 곧 가장 뛰어난 제품 수준이 되도록 기여하겠습니다."
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
