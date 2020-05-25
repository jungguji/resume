import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '한국항공우주산업 PLM 3차 및 DM 구축 프로젝트',
      startedAt: '2018-09',
      endedAt: '2019-06',
      where: '티엔씨파트너',
      descriptions: [
        { content: 'Envoia(Java) + Oracle, JSP로 개발' },
        { content: '기존 ERP 시스템과 DM(digital manufacturing) 시스템 간의 인터페이스 기능 JAVA와 SOAP Web Service를 이용해 개발' },
        { content: 'ERP 측에서 제공하는 WSDL에 맞춰 Tree 구조로된 데이터를 Stack을 활용해 자신보다 레벨이 높은 object들이 나타나면 push하고 자신보다 레벨이 낮은 object가 나타나면 stack에서 pop하는 방식으로 파싱' },
        { content: '파싱된 데이터를 bulk insert query로 대용량 insert 한 후 Webservice를 통해 return이 오면 결과 update ' },
      ],
    },
    {
      title: 'LG전자 HE사업부 SW배포 개선 프로젝트',
      startedAt: '2017-10',
      endedAt: '2018-06',
      where: '티엔씨파트너',
      descriptions: [
        { content: 'Spring + Mybatis + Oracle + Enovia + Jsp로 운영중인 시스템의 고도화 프로젝트' },
        { content: '중계 데이터베이스의 컬럼 값을 Update하는 방식을 통한 이종간 인터페이스 기능 개발' },
      ],
    },
    {
      title: '세명&화성 MES(스마트공장) 구축 프로젝트',
      startedAt: '2016-12',
      endedAt: '2017-06',
      where: '티엔씨파트너',
      descriptions: [
        { content: '기존에 excel로 하던 작업들을 작업장에 있는 POP를 통해 사무실에서 웹으로 작성한 생산계획서를 띄워 작업 할 수 있도록 하는 시스템 개발' },
        { content: 'Spring + Hibernate, view는 JSP와 Dojo + jQuery로 개발' },
        { content: '수주 정보와 생산계획서를 ManyToMany로 연결하여 수주에 따른 생산계획서를 작성할 수 있도록 함' },
        { content: '기존 excel로 작업된 데이터들을 작업자들이 migraion 할 수 있도록 Apache POI를 이용해 Excel Migraion 기능 개발' },
      ],
    },
  ],
};

export default project;
