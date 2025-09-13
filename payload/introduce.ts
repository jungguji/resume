import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "<code>야핏무브</code>가 현재 마주하고 있거나, 곧 마주하게 될 기술적 과제에 대해 저의 경험을 바탕으로 다음과 같은 기여를 약속드립니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\"> \[대규모 트래픽 처리\] : 글로벌 확장에도 흔들림 없는 서비스 안정성을 책임지겠습니다.</strong>",
    "<br />",
    "MAU 70만, 200만 다운로드의 성장은 곧 트래픽의 폭증을 의미합니다. 저는 기존 동기 방식 아키텍처의 한계로 <strong style=\"font-weight: bold;\">5분 이상 소요되던 채팅 응답 속도를 AWS SQS 기반 비동기 시스템으로 개선하여 3초 이내로 99% 단축</strong>시킨 경험이 있습니다. 또한 <strong style=\"font-weight: bold;\">19만 명 대상 푸시 발송 시간을 5시간에서 30분으로 줄여</strong> 대용량 처리에 대한 노하우를 증명했습니다. 저의 경험은 <code>야핏무브</code>의 핵심 기능들이 피크 시간대나 글로벌 사용자 유입에도 안정적으로 동작하는 기반이 될 것입니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\"> \[리워드 데이터 정합성\] : \'동시성 제어\'로 서비스의 신뢰를 구축하겠습니다.</strong>", 
    "<br />",
    "리워드 기반 서비스의 핵심은 사용자의 활동에 대한 보상이 단 하나의 오류 없이 정확하게 이루어지는 것입니다. 저는 분산 서버 환경의 동시 요청으로 인해 발생하던 결제 데이터 불일치 문제를 Redis 분산 락을 도입하여 해결하고, <strong style=\"font-weight: bold;\">wrk를 이용한 부하 테스트를 통해 데이터 정합성 100%를 직접 검증한</strong> 경험이 있습니다. 이 전문성은 <code>야핏무브</code>의 리워드 및 재화 시스템에서 발생할 수 있는 치명적인 데이터 장애를 사전에 방지하고 사용자의 신뢰를 확보하는 데 결정적인 역할을 할 것입니다.",
    "<br />",
    "<br />",
    "<strong style=\"font-weight: bold;\"> \[성장 지향적 문화\] : '실행력'과 '협업'으로 함께 성장하는 팀을 만들겠습니다.</strong>",
    "<br />",
    "저는 좋은 전략만큼 <strong style=\"font-weight: bold;\">'주도적인 실행'이 중요하다</strong>고 믿습니다. 비즈니스 연속성을 고려해 3단계에 걸쳐 점진적으로 아키텍처를 개선한 경험, 테스트 효율을 높이기 위해 <a href='https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/' target='_blank' rel='noopener noreferrer'>Fixture Monkey</a>와 같은 새로운 도구를 도입한 경험이 이를 증명합니다. 또한, 문제 해결 과정을 <a href='https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/' target='_blank' rel='noopener noreferrer'>기술 블로그</a>와 <strong style=\"font-weight: bold;\">사내 세미나로 공유</strong>하며 동료와 함께 성장하는 것을 즐깁니다. <code>야핏무브</code>의 성장 지향적인 문화에 빠르게 융화되어 시너지를 만들어낼 자신이 있습니다.",
    "<br />",
    "<br />",
    "저의 모든 경험은 <code>야핏무브</code>의 성공적인 다음 단계를 위해 준비되었습니다. <strong style=\"font-weight: bold;\">기술적 도전을 해결하며 서비스와 함께 성장하는 최고의 파트너</strong>가 되겠습니다."
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
