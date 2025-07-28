import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java & Spring / AWS 기반의 7년차 백엔드 개발자로, 기술을 맹목적으로 따르기보다, 문제의 본질을 파악하고 <strong style="font-weight: bold;">비즈니스 연속성을 보장하는 최적의 해결책</strong>을 찾아 시스템을 점진적으로 완성해 나갑니다.',
    '<br />',
    '<br />',
    '실제 운영 환경의 병목 현상을 해결하며, 채팅 응답 속도를 <strong style="font-weight: bold;">5분에서 3초 이내로 단축</strong>하고, 19만 명 대상 푸시 발송을 <strong style="font-weight: bold;">5시간에서 30분으로 개선</strong>하는 등 극적인 성능 개선을 이끌었습니다. 이러한 기술적 개선을 통해 이탈 사용자의 리텐션을 최대 <strong style="font-weight: bold;">20%p</strong>까지 끌어올리며, 기술이 비즈니스 성과로 직결됨을 증명했습니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">유일한 백엔드 개발자</strong>로서 B2C부터 B2B, 내부 시스템까지 전 영역을 책임졌던 경험은, 어떤 상황에서도 시스템의 안정성과 데이터 무결성을 지켜내는 단단한 기반이 되었습니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">"유효한"</strong> 테스트 코드가 서비스의 품질을 결정한다고 믿으며, <a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer"> Fixture Monkey</a> 등 새로운 도구를 적극적으로 도입하여 테스트 효율을 높이는 과정을 즐깁니다. 제가 해결한 경험을 기술 블로그에 공유하며 동료와 함께 성장하는 가치를 중요하게 생각합니다.',
    '<br />',
    '<br />',
    '이러한 저의 경험은 `아이파킹`의 차세대 코어 및 충전 Business 서비스를 성공적으로 구축하고, 수많은 사용자와 장비가 연결되는 서비스를 안정적으로 운영하는 데 기여할 수 있다고 확신합니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
