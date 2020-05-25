import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
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
