import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, 비즈니스 연속성을 해치지 않는 점진적인 아키텍처 개선을 통해 실제 운영 환경의 문제를 해결합니다. 단 한 번의 완벽한 개편보다는, 상황에 맞는 최적의 기술로 시스템을 안정적으로 발전시켜 나가는 실용적인 접근 방식을 추구합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">트래픽 부하 상황에서 5분이 넘어가던 채팅 응답 시간을 3초 이내로 단축시킨 경험</strong>은, 저의 이러한 개발 철학을 가장 잘 보여주는 사례입니다. 단순히 눈앞의 성능 개선을 넘어, 긴급 대응부터 근본적인 병목 제거, 미래의 확장성을 고려한 구조 개편까지 단계적으로 시스템을 완성하며 대규모 트래픽 처리 역량을 길렀습니다. 이는 `Wavve`가 추구하는 안정적인 ‘백엔드 아키텍처 설계 및 개선’ 역량과 정확히 부합한다고 생각합니다.',
    '<br />',
    '<br />',
    '더불어, <strong style="font-weight: bold;">Redis 분산 락을 활용해 분산 서버 환경에서 발생하는 결제 데이터의 동시성 이슈를 해결하고, 안정적인 신규 재화 시스템을 성공적으로 구축한 경험</strong>은 `Wavve`의 핵심 비즈니스의 안정성을 책임질 수 있는 저의 가장 확실한 강점입니다.',
    '<br />',
    '<br />',
    '기술을 통해 비즈니스 문제를 해결하고, 그 과정을 안정적으로 이끌어가는 개발자로 `Wavve`와 함께하고 싶습니다.'
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
