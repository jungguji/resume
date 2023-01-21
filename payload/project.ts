import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '웨딩의 여신 푸시 시스템 개선',
      startedAt: '2022-11',
      endedAt: '2022-11',
      where: '유모멘트',
      descriptions: [
        {
          content:
            '19만 유저에게 전송하는데 8시간 정도 걸리던 푸시를 30분 안에 발송할 수 있도록 개선',
        },
        {
          content:
            'Spring의 @Schedubled를 이용해 1시간마다 등록된 스케줄을 카카오 푸시 API와 FCM, APNs를 활용해 광고 푸시를 전송하고 있었는데,' +
            '전체 유저에게 발송 시 8시간 정도 시간이 소요 되어서, 하루에 1번 이상의 푸시를 발송할 수가 없어서 광고나 이벤트 진행에 문제가 존재하였음',
        },
        {
          content:
            '이를 해결하기 위해, 푸시 서비스를 위한 스레드 풀을 생성하여, 푸시 하나당 스레드 하나씩을 할당하여 동시에 여러 개의 푸시를 전송할 수 있게 수정하였고,' +
            '이렇게 개선하여 8시간이 소요되던 푸시를 30분으로 개선하여, 하루에 여러 건의 광고, 이벤트 푸시를 발송할 수 있게함.',
        },
      ],
    },
    {
      title: '웨딩의 여신 공통코드 모듈화',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: '유모멘트',
      descriptions: [
        {
          content:
            '여러 프로젝트에서 동일하게 사용되는 Entity class들을 모듈화하여 Nexus Repository에 업로드 후 사용',
        },
        {
          content:
            '같은 데이터베이스를 공유하는 여러 개의 프로젝트가 존재하는데, 모두 JPA(Hibernate)를 사용하고 있어서 ' +
            '한 프로젝트에서 Entity class를 수정할 경우 같은 Entity를 사용하는 다른 프로젝트에서도 마찬가지로 같이 수정해야 했는데, ' +
            '개발자가 다수의 프로젝트를 매번 손수 수정해야 하다 보니 필연적으로 휴먼 에러가 발생할 수밖에 없는 구조였고, 이를 해결하는 방법으로 ' +
            'Entity class들을 따로 모은 프로젝트를 별도로 구성하여 내부 Maven 저장소(Nexus)에 Jar형태로 업로드하고, 다른 프로젝트들에서 이를 추가하여 사용하도록 개선',
        },
      ],
    },
    {
      title: '웨딩의 여신 컨텐츠 페이지 조회 속도 개선',
      startedAt: '2021-09',
      endedAt: '2021-09',
      where: '유모멘트',
      descriptions: [
        {
          content:
            '페이스북 광고에 연결한 이벤트 페이지에 유저가 도달하는 광고 노출 수 대비 비정상적으로 적게 노출 되는 이슈가 발생',
        },
        {
          content:
            '광고에 노출한 이벤트 페이지의 로딩이 너무 느려서 발생하는 문제로 판단하여, 확인결과 JSP + jQuery로 구성된 해당 이벤트 페이지 로딩이 평균 9초 정도 걸리는 것을 확인였고, ' +
            '로딩 속도 개선을 위해 페이지 조회 시 보이는 윗 부분만 먼저 로딩될 수 있게 윗부분 데이터만 먼저 보내고 ' +
            '페이지 하단에 노출되는 데이터들은 ajax를 활용하여 비동기로 호출하도록 개선하였고, 평균 로딩 시간을 9초에서 2초 정도로 개선' +
            'Entity class들을 따로 모은 프로젝트를 별도로 구성하여 내부 Maven 저장소(Nexus)에 Jar형태로 업로드하고, 다른 프로젝트들에서 이를 추가하여 사용하도록 개선',
        },
      ],
    },
    {
      title: '한국항공우주산업 PLM 3차 및 DM 구축 프로젝트',
      startedAt: '2018-09',
      endedAt: '2019-06',
      where: '티엔씨파트너',
      descriptions: [
        { content: 'Envoia(Java) + Oracle, JSP로 개발' },
        {
          content:
            '기존 ERP 시스템과 DM(digital manufacturing) 시스템 간의 인터페이스 기능 JAVA와 SOAP Web Service를 이용해 개발',
        },
        {
          content:
            'ERP 측에서 제공하는 WSDL에 맞춰 Tree 구조로된 데이터를 Stack을 활용해 자신보다 레벨이 높은 object들이 나타나면 push하고 자신보다 레벨이 낮은 object가 나타나면 stack에서 pop하는 방식으로 파싱',
        },
        {
          content:
            '파싱된 데이터를 bulk insert query로 대용량 insert 한 후 Webservice를 통해 return이 오면 결과 update ',
        },
      ],
    },
  ],
};

export default project;
