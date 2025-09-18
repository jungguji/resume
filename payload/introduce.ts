import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 기술적 도전을 통해 비즈니스의 연속성을 확보하고 성장을 이끄는 데 가장 큰 가치를 둡니다. 상점, 라이더, 고객을 실시간으로 연결하며 새로운 물류 경험을 만들어가는 <code>바로고</code>의 비전에 깊이 공감하며, 저의 경험이 <code>바로고</code>의 기술적 안정성과 서비스 확장의 핵심 동력이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '대규모 실시간 트래픽을 안정적으로 처리하며 극적인 성능 개선을 이끌어낸 경험이 있습니다. 분당 수천 건의 요청으로 응답이 5분이상 지연되던 동기 아키텍처를 AWS SQS 기반의 비동기 구조로 점진적으로 전환하여, <strong style="font-weight: bold;">분당 6,000건의 AI 챗봇 대화 요청을 평균 응답 속도를 3초 이내로 99% 단축</strong>했습니다. 이러한 경험은 주문이 폭주하는 피크타임에도 <code>바로고</code>의 배차 시스템이 지연 없이 동작하고, 라이더와 상점이 신뢰할 수 있는 플랫폼을 만드는 데 직접적으로 기여할 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">데이터 정합성이 생명인 시스템의 신뢰성을 확보</strong>하고, 팀의 기술 문화를 주도적으로 개선한 경험이 있습니다. 특히 성격이 다른 유/무료 재화가 얽힌 복잡한 결제 시스템의 동시성 이슈를 Redis를 이용한 분산 락으로 해결하여 치명적인 데이터 불일치 장애를 사전에 방지하고 부하 테스트로 검증했습니다. 또한, 시스템의 완성은 <strong style="font-weight: bold;">"유효한" 테스트 코드</strong>에서 시작된다는 믿음으로 <a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer">Fixture Monkey</a>와 같은 새로운 도구를 도입하여 테스트 효율을 높이고, 그 경험을 팀에 공유하며 함께 성장하는 문화를 만들었습니다. 이는 \'나\'가 아닌 \'우리\'의 힘으로 더 견고한 서비스를 만드는 <code>바로고</code>의 방식에 기여하고 싶은 저의 의지를 보여줍니다.',
    '<br />',
    '<br />',
    '저의 아키텍처 설계 능력과 비즈니스 문제 해결 경험을 바탕으로 <code>바로고</code>의 복잡한 기술 과제를 해결하고, 모든 사용자가 신뢰하는 최고의 라스트마일 딜리버리 플랫폼을 함께 만들어가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
