import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '완벽한 아키텍처를 논하기보다, 당면한 문제를 해결하며 서비스를 점진적으로 성장시키는데 가치를 두는 7년차 백엔드 개발자 지중구입니다.',
    '<br />',
    '<br />',
    '저는 B2C 서비스의 <strong style="font-weight: bold;">비즈니스 연속성을 최우선</strong>으로, 주어진 상황에 맞는 최적의 해결책을 찾아 시스템을 점진적으로 개선하는 데 강점이 있습니다. 실제 트래픽 부하로 5분 이상 걸리던 채팅 응답을 <strong style="font-weight: bold;">단계별 개선</strong>을 통해 3초 이내로 단축하고, 19만 명 대상 푸시 발송을 5시간에서 30분으로 줄이는 등 극적인 성능 개선을 이끌었습니다. 또한, AI 선톡 기능과 같은 신규 기능을 주도적으로 개발하여 이탈 사용자의 리텐션을 <strong style="font-weight: bold;">최대 20%</strong>까지 끌어올린 경험도 있습니다. 이처럼 기술로 직접적인 비즈니스 성과와 고객 경험 개선을 만드는 것에 큰 보람을 느낍니다.',
    '<br />',
    '<br />',
    '특히, 동기 방식 시스템의 한계를 극복하기 위해 <strong style="font-weight: bold;">병렬 처리, 논블로킹 I/O, 메시지 큐(AWS SQS)</strong> 등 다양한 기술을 상황에 맞게 적용하며, 트래픽 급증에도 안정적인 시스템 기반을 구축했습니다. 이러한 경험은 플랫폼 `Vigloo`를 안정적으로 운영하고 지속적으로 개선하는 데 핵심적인 자산이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    'Kotlin을 메인으로 사용하진 않았지만, 견고한 Java와 Spring Boot 생태계에 대한 깊은 이해를 바탕으로 Kotlin 기반 개발 환경에 빠르게 적응하여, \'완벽보다 속도, 실행을 통한 성장\'을 추구하는 `Vigloo 서버 팀`의 목표 달성에 기여하고 싶습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
