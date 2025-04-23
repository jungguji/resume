import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "<strong style='font-weight: bold;'>문서화 및 협업 강화</strong>",
    '<br />',
    '업무 문서화와 소통을 중요하게 여기며, 업무 중 알게 되는 지식이나 개선 방안을 문서로 작성, 공유하여 팀의 성장에 기여합니다.',
    '<br />',
    'PR을 통한 코드 리뷰와 주 1회 팀 리뷰를 정기적으로 진행하면서 항상 서로의 의견을 공유했었습니다.',
    '<br />',
    '‘또렷한 기억보다 희미한 연필 자국’이라는 문구를 좋아하며, 기술적 경험과 문제 해결 과정을 사내 Notion이나 블로그에 기록해왔습니다.',
    '<br />',
    '<br />',
    "<strong style='font-weight: bold;'>효율성 제고 및 안정화</strong>",
    '<br />',
    '단순하고 반복적인 작업을 자동화하는 것을 좋아합니다.',
    '<br />',
    '일례로 Shell script를 작성해 EC2 내의 docker 환경으로 구동 중인 20개 정도의 서버들 배포를 반 자동화하였습니다.',
    '<br />',
    '또한 안정적인 서비스 제공을 위해 간단한 헬스체크 서버를 구축하여, Slack 및 SMS로 알림을 받을 수 있도록 하였고, 이로 인해 서비스 장애 시 고객 인입보다 빠르게 대응할 수 있었습니다.',
    '<br />',
    '<br />',
    "<strong style='font-weight: bold;'>레거시 개선에 대한 열정</strong>",
    '<br />',
    '레거시한 구조나 코드 개선에 관심이 많으며, SonarQube 등 분석 도구를 활용하여 코드의 품질을 주기적으로 확인하고, 단위 테스트를 기반으로 안전한 리팩토링이 가능하도록 노력하고 있습니다.',
    '<br />',
    '<br />',
    '특히, 모놀리식 구조의 서비스가 가진 확장성 및 배포의 어려움을 해결하기 위해, 주요 기능을 서비스 단위로 분리하고 독립적으로 배포/확장 가능한 구조로 점진적으로 개선하는 과정에 적극적으로 참여했습니다. 비록 데이터베이스는 공유되었지만, 이를 통해 서비스 복잡도를 낮추고 향후 완전한 MSA로 발전할 수 있는 기반을 마련하는 경험을 쌓았습니다.',
    '<br />',
    '<br />',
    '<br />',
    '<br />',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
