import { ISummary } from '../component/summary/ISummary';

const summary: ISummary.Payload = {
  disable: false,
  subTitle: '7년차 백엔드 개발자 | 대규모 트래픽 환경에서 데이터 정합성과 시스템 안정성 확보',
  contents: [
    '**[아키텍처 고도화]** AWS SQS 기반 비동기 시스템 전환으로 대용량 트래픽 병목을 해소하여 **응답 속도 99% 단축(5분→3초)** 및 무중단 운영 실현.',
    '**[데이터 무결성]** Redis 분산 락(Redisson)을 도입해 분산 서버 환경의 치명적인 **결제 데이터 동시성 이슈를 완벽하게 해결(정합성 100%)**.',
    '**[성능 최적화]** 병렬 처리 및 Bulk API 도입으로 대용량 데이터 처리 시간을 **90% 단축(5시간→30분)**시키며 비즈니스 리텐션 20% 증대에 기여.',
  ],
};

export default summary;
