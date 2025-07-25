import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 Java/Spring 백엔드 개발자입니다. 기술을 통해 비즈니스 문제를 해결하고, 서비스의 안정성과 확장성을 확보하는 과정에 집중합니다.',
    '<br />',
    '<br />',
    '특히 <strong style="font-weight: bold;">결제 시스템의 동시성 이슈</strong>를 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">Redis 분산 락으로 해결</a>하여 데이터 정합성을 100% 보장하고, 신규 비즈니스 모델의 성공적인 출시에 핵심적으로 기여한 경험이 있습니다. `현대벤디스`의 안정적인 <strong style="font-weight: bold;">‘결제 관련 서비스 구축 및 운영’</strong>에 직접적으로 기여할 수 있는 실무 역량을 갖추었습니다.',
    '<br />',
    '<br />',
    '또한, 더 나은 테스트 코드 작성을 위해 <strong style="font-weight: bold;">‘Fixture Monkey’</strong>와 같은 새로운 오픈소스를 <a href="https://jungguji.github.io/2024/11/19/%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1%EC%9D%84-%EB%8D%94-%EC%89%BD%EA%B2%8C-with-Fixture-Monkey/" target="_blank" rel="noopener noreferrer">적극적으로 도입하고 팀에 공유</a>하며 개발 효율을 높이는 과정을 즐깁니다. 이러한 <strong style="font-weight: bold;">‘새로운 기술에 대한 오픈 마인드와 학습 능력’</strong>을 바탕으로 `현대벤디스`의 기술 문화를 더욱 발전시키는 데 긍정적인 영향을 주고 싶습니다.',
    '<br />',
    '<br />',
    '이러한 경험들을 바탕으로 대규모 트래픽 환경에서도 신뢰할 수 있는 서비스를 만들고, 동료와 함께 성장하며 `현대벤디스`의 새로운 도약에 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
