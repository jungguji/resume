import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년 차 백엔드 개발자로서, 저는 <strong style="font-weight: bold;">대규모 트래픽 환경에서 발생하는 복잡한 문제를 해결</strong>하고, <strong style="font-weight: bold;">안정적인 시스템 아키텍처를 설계</strong>하여 비즈니스의 성공에 기여해왔습니다.',
    '<br />',
    '<br />',
    '첫째, 트래픽 부하 상황에서 동기 방식이던 레거시 시스템의 병목 지점을 분석하고 <strong style="font-weight: bold;">AWS SQS 기반의 비동기 구조로 전환</strong>했습니다. 그 결과, <strong style="font-weight: bold;">채팅 평균 응답 속도를 3초 이내로 99% 이상 단축</strong>시켜 심각한 사용자 이탈 위기를 성공적으로 극복했습니다.',
    '<br />',
    '<br />',
    '둘째, 신규 결제 기능 도입 당시, 분산 환경의 동시성 이슈로 Last Update가 발생하는 치명적 오류를 마주했습니다. <strong style="font-weight: bold;">Redis 분산 락을 도입하여 해결</strong>했으며, 여기에 그치지 않고 부하 테스트 도구인 \'wrk\'를 이용해 실제와 같은 동시 요청 상황을 재현하여 <strong style="font-weight: bold;">데이터 정합성이 100% 보장됨을 수치로 증명</strong>했습니다.',
    '<br />',
    '<br />',
    '저의 이러한 경험은 글로벌 유저를 지탱하는 컴투스 플랫폼 `하이브(Hive)`를 더욱 견고하고 확장성 있게 만드는 데 핵심적인 역할을 할 것이라 확신합니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
