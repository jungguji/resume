import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "<strong style='font-weight: bold;'>문서화 및 협업 강화</strong>",
    "<br />",
    "업무 문서화와 소통을 중요하게 여기며, 업무 중 알게 되는 지식이나 개선 방안을 문서로 작성, 공유하여 팀의 성장에 기여합니다.",
    "<br />",
    "PR을 통한 코드 리뷰와 주 1회 팀 리뷰를 정기적으로 진행하면서 항상 서로의 의견을 공유했었습니다.",
    "<br />",
    "‘또렷한 기억보다 희미한 연필 자국’이라는 문구를 좋아하며, 기술적 경험과 문제 해결 과정을 사내 Notion이나 블로그에 기록해왔습니다.",
    "<br />",
    "<br />",
    "<strong style='font-weight: bold;'>효율성 제고 및 자동화</strong>",
    "<br />",
    "단순하고 반복적인 작업을 자동화하는 것을 좋아합니다.",
    "<br />",
    "일례로 Shell script를 작성해 EC2 내의 docker 환경으로 구동 중인 20개 정도의 서버들 배포를 반 자동화하고 있습니다.",
    "<br />",
    "로컬 LLM을 이용하여 로컬에서 동작하는 간단한 코드리뷰 봇 등을 만드는 등 효율성과 생산성 향상, 새로운 기술에 항상 관심을 두고 있습니다.",
    "<br />",
    "<br />",
    "<strong style='font-weight: bold;'>레거시 개선에 대한 열정</strong>",
    "<br />",
    "레거시한 구조나 코드 개선에 관심이 많으며, SonarQube 등 분석 도구를 활용하여 코드의 품질을 주기적으로 확인하고, 단위 테스트를 기반으로 안전한 리팩토링이 가능하도록 노력하고 있습니다.",
    "<br />",
    "물론 가장 중요한 것은 팀 내 규칙이라고 생각합니다."
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
