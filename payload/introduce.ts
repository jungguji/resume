import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "7년차 백엔드 개발자로서 저의 목표는 명확합니다. <strong style=\"font-weight: bold;\">기술로 비즈니스 문제를 해결하고 성장을 만드는 것</strong>입니다. 사용자의 불편함을 해결하여 경험을 개선하고, 팀의 생산성을 높여 더 큰 가치를 만드는 과정에 기여하고 싶습니다. `에이블리`가 마주한 문제들을 해결하며 함께 성장할 수 있다고 확신합니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\">첫째, 대규모 트래픽 환경의 문제를 해결하여 비즈니스 'IMPACT'를 만들었습니다.</strong>",
    "<br />",
    "저는 5분 이상 걸리던 채팅 응답 시간을 <strong style=\"font-weight: bold;\">AWS SQS 기반 비동기 아키텍처로 개선하여 3초 이내로 단축</strong>시켰습니다. 나아가, 이탈 사용자를 대상으로 한 AI 기능 개발을 주도하여 <strong style=\"font-weight: bold;\">리텐션을 최대 20%까지 끌어올렸습니다.</strong> 이 두 경험은 사용자 경험 개선이 어떻게 비즈니스 성과로 직결되는지를 증명합니다. 저의 문제 해결 능력은 `에이블리`의 대규모 커머스 트래픽을 안정적으로 처리하고, 고객 만족도를 높이는 데 직접적으로 기여할 것입니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\">둘째, 'GRIT'을 발휘하여 커머스 플랫폼의 핵심인 데이터 무결성을 보장합니다.</strong>",
    "<br />",
    "이커머스 서비스의 신뢰는 데이터 정합성에서 시작됩니다. 저는 분산 환경에서 발생하는 동시성 이슈를 해결하기 위해 Redis로 분산 락을 적용했고, 그 결과 <strong style=\"font-weight: bold;\">치명적인 데이터 불일치 발생률 0건</strong>을 달성하고 이를 <strong style=\"font-weight: bold;\">부하 테스트로 증명</strong>했습니다. 복잡한 문제의 근본 원인을 끝까지 파고들어 해결하는 저의 끈기는, `에이블리`의 주문 및 결제 시스템을 더욱 신뢰성 있게 만드는 단단한 기반이 될 것입니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\">셋째, 'ONE TEAM'의 관점에서 팀 전체의 생산성을 높이는 데 기여합니다.</strong>",
    "<br />",
    "저는 여러 프로젝트에 중복된 코드로 인해 발생하는 비효율을 해결하고자 공통 모듈 아키텍처를 설계하고 도입했습니다. 이를 통해 <strong style=\"font-weight: bold;\">팀의 관련 작업 공수를 90% 이상 절감</strong>하며, 동료들이 더 중요한 문제에 집중할 수 있는 환경을 만들었습니다. 또한 <a href='https://jungguji.github.io/2022/08/07/Nexus%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A8%EB%93%88%ED%99%94/' target='_black' rel='noopener noreferrer'>기술 블로그</a>를 통해 문제 해결 경험을 공유하며 함께 성장하는 문화를 즐깁니다. `에이블리`에서도 동료들과 시너지를 만들어 팀 전체의 성공에 기여하고 싶습니다.",
    "<br />",
    "<br />",
    "저의 경험은 기술적 성과를 넘어 항상 비즈니스 가치와 연결되어 있었습니다. `에이블리`의 비즈니스 문제를 저의 문제로 여기고, 안정적인 시스템과 높은 성과로 증명하는 엔지니어가 되겠습니다."
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
