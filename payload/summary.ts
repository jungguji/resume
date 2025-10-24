import { ISummary } from '../component/summary/ISummary';

const summary: ISummary.Payload = {
  disable: false,
  subTitle: '7년차 백엔드 개발자 | AI 서비스의 안정성과 비즈니스 가치를 설계합니다.',
  contents: [
    '**AI 서비스 상용화 및 성능 최적화:** AI 챗봇 응답 속도 **99% 단축** 및 푸시 발송 시간 **90% 단축** 등 시스템 병목 지점을 분석하고 해결.',
    '**안정적인 빌링 시스템 설계 및 구축:** 분산 환경의 동시성 이슈를 제어하여 **결제 데이터 정합성 100%**를 보장하는 빌링/재화 시스템 구축 및 운영.',
    '**미래를 대비하는 아키텍처 설계:** 레거시 동기 구조를 AWS SQS 기반 비동기 아키텍처로 전환, 서비스의 기술적 완성도 향상 및 MSA 확장 기반 마련.',
  ],
};

export default summary;
