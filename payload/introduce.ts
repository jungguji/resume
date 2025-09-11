import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "7년차 백엔드 개발자로서, 기술을 통해 비즈니스 성장을 뒷받침하는 <strong style=\"font-weight: bold;\">안정적이고 확장 가능한 시스템</strong>을 만듭니다. 숏폼 영상과 커뮤니티를 결합하여 새로운 여행 경험을 만들어가는 `트립비토즈`의 비전에 깊이 공감하며, 저의 경험이 `트립비토즈`의 성장에 기여할 핵심 역량이 될 것이라 확신합니다.",
    "<br />",
    "<br />",
    "대규모 트래픽을 처리하며 사용자 경험을 극적으로 개선한 경험이 있습니다. 기존 동기 구조를 AWS SQS 기반의 비동기 아키텍처로 점진적으로 개선하여, 채팅 응답 속도를 <strong style=\"font-weight: bold;\">5분 이상에서 3초 이내로 99% 단축</strong>했습니다. 이러한 경험은 전 세계 사용자가 몰리는 피크 시간대에도 `트립비토즈`의 <strong style=\"font-weight: bold;\">예약 시스템과 커뮤니티가 지연 없이 안정적으로 동작</strong>하게 만드는 데 기여할 것입니다.",
    "<br />",
    "<br />",
    "특히 <strong style=\"font-weight: bold;\">호텔 예약과 같이 데이터 정합성이 무엇보다 중요한 OTA 서비스</strong>의 동시성 문제를 해결하고, 이를 <a href='https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/' target='_blank' rel='noopener noreferrer'>기술 블로그</a>와 <strong style=\"font-weight: bold;\">팀내 세미나로 공유하여 팀 전체의 성장에 기여</strong>한 경험이 있습니다. 이는 `트립비토즈`에서 발생할 수 있는 치명적인 데이터 불일치 장애를 사전에 방지하고, 동료와 함께 기술적 난관을 해결하며 더 신뢰성 있는 서비스를 만들고 싶은 저의 가치관을 보여줍니다.",
    "<br />",
    "<br />",
     "저의 아키텍처 개선 능력과 협업 경험을 바탕으로 `트립비토즈`의 복잡한 기술 과제를 해결하고, <strong style=\"font-weight: bold;\">모든 사용자가 신뢰하고 즐길 수 있는 여행 플랫폼</strong>을 함께 만들어가겠습니다."
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
