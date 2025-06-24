import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    "레거시 시스템의 문제점을 진단하고 현실적인 제약 속에서 단계별 개선을 통해 <strong style='font-weight: bold;'>대용량 실시간 처리 시스템으로 발전시킨 경험</strong>에 강점이 있습니다.",
    '<br />',
    '<br />',
    "실제로 AI 챗봇의 응답 속도가 수 분까지 지연되는 문제를 해결하기 위해, 먼저 익숙한 기술인 병렬 처리로 시급한 장애를 막고, 이후 비동기 I/O 통신으로 변경, 그리고 근본적인 해결을 위해 팀과 논의하여 AWS SQS 기반 비동기 아키텍처로 전환하는 <strong style='font-weight: bold;'>점진적 개선을 주도했습니다.</strong> 이러한 경험은 수많은 학생이 동시에 접속하는 <strong style='font-weight: bold;'>LMS, LRS</strong>에서 발생할 수 있는 잠재적 병목 현상을 사전에 방지하고, 어떤 트래픽 상황에서도 안정적인 서비스를 제공하는 기반을 마련하는 데 기여할 수 있습니다.",
    '<br />',
    '<br />',
    "또한, 신규 재화 시스템을 구축하며 <strong style='font-weight: bold;'>DB 스키마 설계부터 트랜잭션 관리까지 데이터베이스 모델링 전반을 책임진 경험이 있습니다.</strong> 특히 분산 환경에서 발생하는 동시성 이슈(Lost Update)를 Redis 분산 락으로 해결하고 부하 테스트로 검증하며 데이터 무결성을 확보했습니다. 이 역량은 학생들의 학습 이력이나 평가 결과처럼 정확성이 중요한 교육 데이터를 신뢰성 있게 다루는 시스템을 구축하는 데 직접적으로 활용될 수 있습니다.",
    '<br />',
    '<br />',
    "Flyway를 직접 사용한 경험은 없지만, DDL 변경 히스토리 관리와 충돌을 방지하기 위해 <strong style='font-weight: bold;'>별도의 Git Repository에서 .sql 파일을 체계적으로 버전 관리하며 협업한 경험</strong>이 있습니다. 이를 통해 데이터베이스 스키마의 일관성을 유지하고 변경 사항을 안전하게 배포하는 것의 중요성을 깊이 이해하고 있으며, 여러 서비스가 연동된 미래엔의 복잡한 시스템 환경에서 <strong style='font-weight: bold;'>데이터 모델의 안정적인 운영과 유지보수 효율성 향상에 기여할 수 있습니다.</strong>",
    '<br />',
    '<br />',
    "이처럼 시스템의 현재를 진단하고 더 나은 미래를 설계해온 경험을 바탕으로, <strong style='font-weight: bold;'>`미래엔`</strong>이 기술을 통해 교육의 미래를 선도하는 여정에 함께하고 싶습니다.",
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
