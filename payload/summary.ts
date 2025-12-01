import { ISummary } from '../component/summary/ISummary';

const summary: ISummary.Payload = {
  disable: false,
  subTitle: '7년 차 백엔드 엔지니어 | 대규모 트래픽 아키텍처 설계 및 성능 최적화',
  contents: [
    '**결제·정산 데이터 정합성 100% 확보:** Redis 분산 락(Redisson)을 적용하여 분산 서버 환경에서의 동시성 이슈를 원천 차단하고, 유료 결제/재화 데이터의 정합성을 100% 보장하는 고신뢰성 시스템 구축.',
    ' **AWS 기반 대규모 트래픽 아키텍처 설계:** 동기 블로킹 방식의 병목을 AWS SQS 기반 비동기/논블로킹 구조로 전환하여, 피크타임 대규모 요청을 지연 없이 처리하고 응답 속도를 99% 단축(5분→3초).',
    ' **시스템 성능 최적화 및 운영 효율 극대화:** Spring Boot 및 JPA/QueryDSL을 활용한 백엔드 코어 개발부터 Bulk API 도입 등 쿼리 최적화를 통해 시스템 리소스를 효율화하고 운영 생산성을 극대화함.',
  ],
};

export default summary;
