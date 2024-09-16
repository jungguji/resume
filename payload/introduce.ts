import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "'내가 없어도 문제없는 서비스'를 추구하여, 업무를 할 때 팀원들 간의 이슈 공유와 히스토리를 중요하게 생각합니다. ",
    '업무는 Slack과 Notion 같은 협업 툴을 이용하여 업무 문서화 및 공유, 소통하고, ' +
      '혼자 진행하는 토이 프로젝트도 github의 issue 기능을 이용해, 개발할 목록과 우선순위를 정해두고 개발합니다.',
    '',
    '더러운 것을 깨끗이 하는 것을 좋아해서 레거시한 것들을 개선하는 것을 좋아하는데 코드 같은 경우엔 SonarQube 같은 분석 도구를 이용하기도 하지만, ' +
      '코드 뿐만이 아니라 우리 서비스가 제공하는 가치와 팀의 문제를 함께 고민하고 개선하려 합니다.',
    '',
    '귀찮거나 반복되는 일은 기계가 하고 그 시간에 사람은 사유와 사색을 해야 한다고 생각해서 그런 일을 대신 해 주는 서비스나 도구를 만드는 걸 좋아합니다.',
    '',
    "'또렷한 기억보다 희미한 연필 자국'이란 문장에 매우 공감하여, 공부했던 내용이나 트러블 슈팅한 경험 등을 블로그에 작성하여 정리하고 공유합니다.",
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
