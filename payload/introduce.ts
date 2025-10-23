import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '\'일상에서 아직 경험하지 못한 편리함\'을 찾아 수천만 사용자의 하루를 바꾸는 <code>티니어</code>의 비전에 깊이 공감하는 7년차 백엔드 개발자입니다. 저의 기술적 도전 경험이 <code>티니어</code>의 안정적인 서비스 확장과 새로운 혁신의 기반이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '대규모 트래픽을 안정적으로 처리하며 극적인 성능 개선을 이끌어낸 경험이 있습니다. 5분 이상 지연되던 AI 채팅 기능의 동기 아키텍처를 <strong style="font-weight: bold;">AWS SQS 기반 비동기 구조</strong>로 전환하여, 응답 속도를 <strong style="font-weight: bold;">3초 이내로 99% 단축</strong>시킨 경험은, 전 세계 수백만 명이 아침마다 동시에 접속하는 \'첫화면 날씨\'가 어떤 상황에서도 지연 없이 가장 정확한 정보를 제공하는 핵심 기반이 될 것입니다.',
    '<br />',
    '<br />',
    '저는 안정적인 서비스야말로 모든 사용자 경험의 시작이라 믿습니다. 신규 비즈니스 모델 도입을 위한 인앱 재화 기능을 개발할 때, <strong style="font-weight: bold;">Redis 분산 락</strong>으로 결제 데이터의 무결성을 <strong style="font-weight: bold;">100% 보장</strong>하여 신규 비즈니스의 성공 기반을 다졌습니다. 이는 사용자의 만족도를 높이는 가장 기본적인 약속인 \'안전하게 유지하는\' 서비스를 만드는 저의 집요함을 보여주는 경험입니다.',
    '<br />',
    '<br />',
    '또한, 복잡한 동시성 이슈 해결 경험을 기술 블로그와 사내 세미나로 공유하고, 더 나은 테스트 문화를 위해 Fixture Monkey와 같은 새로운 도구를 팀에 제안하고 도입했습니다. 이처럼 <strong style="font-weight: bold;">주도적으로 문제를 해결</strong>하고 그 경험을 투명하게 나눠 <strong style="font-weight: bold;">함께 성장</strong>하는 과정이야말로, <code>티니어</code>가 지향하는 작지만 확실한 혁신의 순간이라고 확신합니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
