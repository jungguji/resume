import { ISummary } from '../component/summary/ISummary';

const summary: ISummary.Payload = {
  disable: false,
  subTitle: '7년차 백엔드 개발자 | 대규모 트래픽 환경에서 데이터 정합성과 시스템 안정성 확보',
  contents: [
    '**결제 데이터 정합성 100% 보장:** Redis 분산 락으로 동시성 이슈를 해결, 분산 환경의 결제 데이터 무결성을 완벽하게 확보함.',
    '**대규모 트래픽 처리 및 성능 최적화:** AI 챗봇 응답 속도 99%(5분→3초), 19만 건 푸시 발송 시간 90%(5시간→30분)를 단축하며 시스템 병목 해결에 대한 명확한 성공 경험을 보유함.',
    '**확장 가능한 비동기 기반 아키텍처 개선:** 동기 블로킹 구조를 AWS SQS 기반 비동기 아키텍처로 전환, 트래픽 급증에 유연하게 대응 가능한 시스템을 구축함.',
  ],
};

export default summary;
