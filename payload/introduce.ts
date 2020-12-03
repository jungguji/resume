import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'JAVA 개발자로 2년 8개월 살았습니다. ',
    'Spring 기반의 LG CNS Devon framework 프로젝트, Spring + Hibernate 프로젝트 1번, Enovia 솔루션 프로젝트 4번 총 6개의 프로젝트 참여해봤습니다.',
    '',
    '혼자 진행하는 토이 프로젝트도 github의 issue와 project 기능을 이용해 이슈와 우선순위를 정해두고 개발합니다.',
    '미리 할 일을 계획하는 것과 프로젝트 내 이슈 공유를 중요하게 생각하고 이슈 트래커에서 이슈가 하나하나 closing 되는 게 좋아서 이처럼 개발합니다.',
    '',
    'Legacy한 코드를 리팩토링하는 것을 좋아해서 시간 날 때 틈틈이 이미 완성된 옛 프로젝트들을 리팩토링하는 취미가 있습니다.',
    '어제보다 오늘이 되어야 하는 것처럼 코드도 마찬가지라고 생각하기 때문입니다.',
    '',
    '귀찮거나 반복되는 건 기계가 해야 한다고 생각해서 그런 일을 대신에 해 주는 서비스나 도구를 만드는 걸 좋아합니다.',
    '그래서 github repository의 프로젝트가 대부분, 이 생각에서 출발해 만든 프로젝트들입니다.',
    '',
    "'또렷한 기억보다 희미한 연필 자국'이란 말에 적극적으로 동의해서 공부했던 내용이나 프로젝트 진행 중 발생한 오류의 해결방안 등을 블로그에 글로 정리해 작성하고 공유합니다.",
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
