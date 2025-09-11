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
        'AI 기반 대화형 서비스 `쥬씨(ZUICY)`의 메인 백엔드 개발, 대규모 트래픽에 대응하기 위한 아키텍처 개선 및 핵심 기능 개발을 주도',
        'AI 챗봇의 동기 블로킹 아키텍처를 AWS SQS 기반 비동기 구조로 개선하여, 피크타임 기준 **분당 6,000건**의 요청을 지연 없이 처리하고 채팅 응답 속도를 **99%** 단축',
        'Redis 분산 락(Redisson)을 적용하여 결제 데이터의 동시성 이슈를 해결하고, 안정적인 신규 유료 서비스 모델의 기반을 마련',
        '이탈 사용자를 대상으로 한 AI `선톡` 기능 개발을 주도하여, 푸시 응답률 **40%** 및 리텐션 최대 **20%** 증가 달성',
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
        '단일 스레드 푸시 시스템에 병렬 처리 및 Bulk API를 도입하여, 19만 건 발송 시간을 5시간에서 30분으로 **90%** 단축',
        '여러 프로젝트에 중복된 JPA Entity를 공통 모듈로 분리하고 Nexus로 공유하여, 신규 프로젝트 초기 세팅 시간을 **50%** 이상 절감',
        'JSP 및 jQuery 기반 페이지의 로딩 속도를 9초에서 1초 이내로 개선하여, 광고 유입 페이지의 이탈률을 최대 **90%** 감소',
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
        'LG전자, 한국항공우주산업, 두산인프라코어 등 대기업 고객사의 PLM/MES 시스템 구축 프로젝트 참여',
        'Java, Spring, Oracle 환경에서 고객사 비즈니스 프로세스에 맞춘 기능 개발 및 인터페이스(SOAP) 개발 주도',
        'Enovia 솔루션 커스터마이징 및 자체 프레임워크 고도화, 유지보수 수행',
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
