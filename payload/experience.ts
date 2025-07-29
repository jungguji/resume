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
        'AI 기반 대화형 서비스 `쥬씨(ZUICY)`의 메인 백엔드 개발, 대규모 트래픽에 대응하기 위한 아키텍처 개선 및 핵심 기능의 설계 및 개발을 주도',
        'AI 챗봇 신규 결제/재화 시스템 개발',
        'LLM API 연동을 고려한 AI 기반 선톡 메시지 발송 기능 개발 및 아키텍처 설계',
        'MSA 구조를 고려한 AI 챗봇 기능 개발 및 대규모 트래픽 처리 비동기 시스템 개선',
        '프로모션 대량 트래픽 장애대응',
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'GraphQL',
        'HTTP API',
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
        '유일한 백엔드 개발자로서, B2C(웨딩의 여신), B2B(입점 업체)부터 백오피스 시스템까지 전 영역의 개발/운영을 총괄하며 아키텍처 및 개발 프로세스 개선을 주도함.',
        '대규모 푸시 알림 시스템 성능 최적화',
        '백엔드 공통 JPA Entity 모듈화',
        'JSP 페이지 로딩 속도 개선',
        '전체 서비스 백엔드 개발 및 AWS 클라우드 운영',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'Spring Boot',
        'MySQL',
        'Querydsl',
        'Hibernate',
        'AWS',
        'JSP',
      ],
    },
    {
      title: '티엔씨파트너',
      position: 'Java Developer',
      startedAt: '2016-09',
      endedAt: '2019-06',
      descriptions: [
        'Enovia 솔루션을 이용한 PDM / PLM 시스템 개발',
        'Spring 기반의 자체 framework를 고도화 및 개선',
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
