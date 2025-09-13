import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년 차 백엔드 개발자</strong>로서, 기술을 맹목적으로 따르기보다 비즈니스의 성장을 뒷받침하는 최적의 기술을 찾아 적용하는 것을 목표로 삼아왔습니다. \'고객 중심 경영\'이라는 미션 아래 <strong style="font-weight: bold;">매년 200% 이상 폭발적으로 성장</strong>하는 `아정당`의 여정에 함께하기 위해, 저의 성공 경험들이 `아정당`의 기술적 과제를 해결하고 성장을 가속화할 핵심 역량이 될 것이라 확신하며 지원합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 대규모 트래픽을 처리하며 비즈니스의 안정성을 확보한 경험</strong>이 있습니다. 사용자가 급증하며 채팅 응답이 <strong style="font-weight: bold;">5분이상 지연되던 심각한 장애 상황</strong>을, AWS SQS 기반 비동기 아키텍처로 점진적으로 개선하여 <strong style="font-weight: bold;">응답 속도를 3초 이내로 99% 단축</strong>하고 비즈니스 연속성을 확보했습니다. `아정당`이 신사업을 성공적으로 론칭하고 더 많은 고객을 유치하는 과정에서 발생할 수 있는 트래픽 급증 상황에서도, 저의 경험은 안정적인 아키텍처를 설계하고 사용자 경험을 최상으로 유지하는 데 기여할 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 비즈니스 성장에 따라 변화하는 시스템의 문제를 주도적으로 해결한 경험</strong>이 있습니다. 신규 유료 기능 도입 시, 분산 서버 환경에서 동시 결제 요청으로 인해 데이터 불일치가 발생하는 치명적인 문제가 있었습니다. 저는 Redis 분산 락을 적용하여 이 문제를 완벽히 해결했고(발생률 0건), 부하 테스트를 통해 <strong style="font-weight: bold;">데이터 정합성을 100% 검증</strong>했습니다. `아정당`의 핵심 비즈니스가 성장하는 과정에서 마주할 수 있는 데이터 정합성 문제를 사전에 방지하고, 상담사와 고객 모두가 신뢰할 수 있는 시스템을 만드는 데 기여하겠습니다.',
    '<br />',
    '<br />',
    '마지막으로, 단순히 시스템을 만드는 것을 넘어 동료와 함께 성장하는 \'기술 파트너\'가 되고자 합니다. <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer"> 동시성 이슈 해결 경험</a>을 <strong style="font-weight: bold;">기술 블로그와 사내 세미나</strong>로 공유하여 팀의 기술 역량을 함께 끌어올렸던 것처럼, \'최고의 동료들\'과 함께 지식을 나누고 시너지를 만들 준비가 되어 있습니다. 저의 아키텍처 설계 및 개선 능력, 그리고 동료와의 협업 경험을 바탕으로 `아정당`의 복잡한 기술 과제를 해결하고, <strong style="font-weight: bold;">대한민국 No.1 생활 솔루션 플랫폼</strong>의 위상을 더욱 공고히 하는 데 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;