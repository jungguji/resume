import { ISummary } from '../component/summary/ISummary';

const summary: ISummary.Payload = {
  disable: false,
  subTitle: '7년차 백엔드 개발자 | 대용량 트래픽 시스템 설계 및 성능 최적화',
  contents: [
    '**대용량 트래픽 처리 및 성능 최적화:** 19만 건 푸시 발송 시간을 90%(5시간→30분) 단축하고 AI 챗봇 응답 속도를 99%(5분→3초) 개선하는 등 실질적인 시스템 성능 최적화 경험을 보유함.',
    '**RDBMS 데이터 정합성 보장 및 최적화:** Redis 분산 락을 적용해 동시성 이슈를 제어하고 결제 데이터 무결성을 100% 확보했으며, 쿼리 및 데이터 구조 개선을 통해 안정적인 시스템을 운영함.',
    '**안정적이고 확장 가능한 시스템 아키텍처 설계:** 동기 블로킹 구조를 AWS SQS 기반 비동기 아키텍처로 전환하여, 급증하는 트래픽에 유연하게 대응하고 안정적으로 운영 가능한 시스템 기반을 구축함.',
  ],
};

export default summary;
