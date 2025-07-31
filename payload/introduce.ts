import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서, 기술을 비즈니스 성과로 직결시키는 <strong style="font-weight: bold;">\'메이커\'</strong>의 역할을 지향합니다. 저는 기술적 한계를 해결하는 것을 넘어, 비즈니스의 성장을 주도하는 과정에서 가장 큰 보람을 느낍니다.',
    '<br />',
    '<br />',
    '트래픽 부하 상황에서 <strong style="font-weight: bold;">5분 이상 걸리던 응답을 3초 이내로 단축</strong>하여 사용자 이탈 위기를 극복하고, <strong style="font-weight: bold;">5시간 걸리던 푸시 발송 작업을 30분으로 단축</strong>시켜 시의성 있는 마케팅을 가능하게 만드는 성과를 이끌었습니다.',
    '<br />',
    '<br />',
    '단순히 문제를 해결하는 것을 넘어, 비즈니스에 직접 기여하는 것을 중요하게 생각합니다. AI가 먼저 대화하는 <strong style="font-weight: bold;">\'선톡\'</strong> 기능을 주도적으로 설계 및 개발하여 <strong style="font-weight: bold;">이탈 사용자의 리텐션을 20% 개선</strong>했고, 신규 비즈니스 모델의 핵심인 결제/재화 시스템을 안정적으로 설계하고 구축한 경험도 있습니다.',
    '<br />',
    '<br />',
    '이러한 문제 해결 및 비즈니스 기여 경험을 바탕으로, <strong style="font-weight: bold;">`WIPPY JAPAN`</strong>이 마주할 기술적 과제를 해결하고 일본 사용자들이 신뢰하고 사랑하는 서비스를 만드는 데 핵심적인 역할을 하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
