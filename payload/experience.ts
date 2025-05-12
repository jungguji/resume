import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '제네시스랩',
      position: 'Server Back-end Developer',
      startedAt: '2023-04',
      endedAt: '2024-11',
      descriptions: [
        'AI 기반 대화 서비스 `쥬씨(ZUICY)`의 메인 서버 및 분산 환경 운영/개발, 50만 가입자 트래픽 대응 아키텍처 개선',
        'AI Agent(LLM) 톡 기능 및 선톡(먼저 메시지 보내기) 기능 신규 개발, 사용자 리텐션 10~20%p 증가 및 재참여율 40% 달성',
        'Redis(Redisson) 분산 락 도입으로 동시성 이슈 해결, 결제/정산 시스템 데이터 무결성 확보 및 대규모 부하 테스트 검증',
        'Spring Scheduler 이중화 및 LLM API 트래픽 분산 전략으로 일 1만건 이상 메시지 안정적 생성/발송 시스템 구축',
        'AWS SQS 기반 비동기 아키텍처 전환, WebClient 도입 등으로 채팅 응답 속도 수분→수초 이내로 대폭 개선',
        '기술 세미나·블로그 등 팀 내외 경험 공유로 조직 전체 기술력 향상에 기여',
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'GraphQL',
        'MariaDB',
        'Querydsl',
        'Redis',
        'Docker',
        'SQS',
      ],
    },
    {
      title: '유모멘트',
      position: 'Server Back-end Developer',
      startedAt: '2021-01',
      endedAt: '2023-04',
      descriptions: [
        'Java Spring + JPA(Hibernate) 기반 `웨딩의 여신` 서비스 백엔드 개발 및 AWS 클라우드 운영',
        '푸시 알림 시스템 병렬 처리·벌크 API 적용으로 19만명 대상 발송 시간 5시간→30분 이내로 90% 단축',
        'JPA Entity 공통 모듈화 및 Nexus 배포로 코드 중복 제거, 데이터 모델 일관성·생산성 향상',
        'Shell script 자동화, Slack 연동 모니터링 등 운영 효율화 및 장애 대응 체계 구축',
        '레거시 서비스 개선·신규 개발, 대량 메시지 처리 등 실전 성능 최적화 경험',
      ],
      skillKeywords: ['Java', 'Spring', 'Spring Boot', 'MySQL', 'Querydsl', 'Hibernate', 'AWS'],
    },
    {
      title: '티엔씨파트너',
      position: 'Java Developer',
      startedAt: '2016-09',
      endedAt: '2019-06',
      descriptions: [
        'Enovia 솔루션을 이용한 PDM / PLM 시스템 개발',
        'Spring + Dojo + Hibernate 기반의 자체 framework를 이용한 MES 시스템 개발',
        'Java를 이용한 SOAP WebService를 활용한 이종간 Interface 기능 개발',
        'OODB내에 Tree구조로 저장된 Data 파싱하여 RDB에 저장하는 기능 개발',
      ],
      skillKeywords: [
        'Java',
        'Enovia',
        'Spring',
        'JSP',
        'jQuery',
        'Oracle',
        'Hibernate',
        'Mybatis',
      ],
    },
  ],
};

export default experience;
