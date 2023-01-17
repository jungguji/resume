import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '유모멘트',
      position: 'Server Back-end Developer',
      startedAt: '2021-01',
      descriptions: [
        '8년 째 운영 중인 Java Spring + JPA(Hibernate) + MySQL 기반 서비스의 Back-end 개발 및 유지보수',
        'AWS EC2(CLB), RDS, S3 환경의 시스템 운영',
        '내부망 Repository(Nexus)을 이용한 공통코드 라이브러리화, Shell script를 이용한 배포, Exception Log Slack 연동 등 개발환경 개선',
        '멀티 스레드를 이용한 푸시 시스템 개선 (8시간 -> 30분)',
        '업체용 서비스, 백오피스 등 레거시 서비스 개선 및 신규 개발',
      ],
      skillKeywords: ['Java', 'Spring', 'Spring Boot', 'MySQL', 'Hibernate', 'AWS'],
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
        'MSSQL',
        'PostgreSQL',
        'Hibernate',
        'Mybatis',
      ],
    },
  ],
};

export default experience;
