import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'JAVA 개발자로 2년 8개월 살았습니다. ',
    'Spring 기반의 LG CNS Devon framework 프로젝트, Spring + Hibernate 프로젝트 1번, Enovia 솔루션 프로젝트 4번 총 6개의 프로젝트 참여해봤습니다.',
    '이슈 트래커에서 일감 혹은 이슈를 정리 하는게 너무 좋고 재밌습니다.',
    '귀찮거나 반복되는 건 기계가 해야 한다고 생각합니다.',
    '그래서 귀찮거나 반복되는 일을 대신 해주는 기능이나 도구를 만드는 걸 좋아합니다.',
    'Legacy한 코드를 수정하는 것을 좋아해서 시간 날 때 틈틈이 대학 시절 졸업작품을 수정하는 취미가 있습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
