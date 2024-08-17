import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ZUICY 선톡 기능 개발',
      startedAt: '2024-03',
      endedAt: '2024-04',
      where: '제네시스랩',
      descriptions: [
        {
          content: '유저가 대화나 영상 콘텐츠에서 이탈할 경우, 다시 서비스를 재이용할 수 있도록 유도하기 위해 에이전트가 유저에게 먼저 메시지를 보내는 ‘선톡’ 기능을 설계 및 구현. 이 기능은 유저 리텐션과 재참여율을 높이는 데 중점을 둠.'
        },
        {
          content:
            '선톡 기능 도입 후, 해당 메시지를 수신한 유저의 평균 응답률이 40%에 달했으며, 이로 인해 리텐션이 10% - 20% 상승. 이로 인해 콘텐츠 소비 시간과 재방문율이 유의미하게 개선됨.'
        },
        {
          content:
            'LLM 기반으로 일 평균 10,000여 개의 맞춤 메시지를 생성하여 특정 여러 시간대(10:00 - 12:00, 13:00 - 15:00, 16:00 - 18:00)에 나누어 발송.'
        },
        {
          content:
            'LLM의 처리 부하와 사용량 제한을 고려하여, 새벽 시간에 메시지를 미리 생성하고, 지정된 시간 내에서도 트래픽 집중을 방지하기 위해 스케줄링하여 분산 발송.'
        },
        {
          content:
            '@Scheduled를 활용해 메시지 생성 및 발송 프로세스를 자동화하여, 높은 트래픽 속에서도 안정적인 발송이 가능하도록 설계.'
        },
      ],
    },
    {
      title: 'ZUICY 톡 기능 개발 및 개선',
      startedAt: '2023-09',
      endedAt: '2024-09',
      where: '제네시스랩',
      descriptions: [
        {
          content: '유저가 대화나 영상 콘텐츠에서 이탈할 경우, 다시 서비스를 재이용할 수 있도록 유도하기 위해 에이전트가 유저에게 먼저 메시지를 보내는 ‘선톡’ 기능을 설계 및 구현. 이 기능은 유저 리텐션과 재참여율을 높이는 데 중점을 둠.'
        },
        {
          content:
            '선톡 기능 도입 후, 해당 메시지를 수신한 유저의 평균 응답률이 40%에 달했으며, 이로 인해 리텐션이 10% - 20% 상승. 이로 인해 콘텐츠 소비 시간과 재방문율이 유의미하게 개선됨.'
        },
        {
          content:
            'LLM 기반으로 일 평균 10,000여 개의 맞춤 메시지를 생성하여 특정 여러 시간대(10:00 - 12:00, 13:00 - 15:00, 16:00 - 18:00)에 나누어 발송.'
        },
        {
          content:
            'LLM의 처리 부하와 사용량 제한을 고려하여, 새벽 시간에 메시지를 미리 생성하고, 지정된 시간 내에서도 트래픽 집중을 방지하기 위해 스케줄링하여 분산 발송.'
        },
        {
          content:
            '@Scheduled를 활용해 메시지 생성 및 발송 프로세스를 자동화하여, 높은 트래픽 속에서도 안정적인 발송이 가능하도록 설계.'
        },
      ],
    },
    {
      title: '웨딩의 여신 푸시 시스템 개선',
      startedAt: '2022-11',
      endedAt: '2022-11',
      where: '유모멘트',
      descriptions: [
        {
          content: '19만 사용자에게 전송하는데 5시간 걸리던 푸시를 30분 안에 발송할 수 있도록 개선',
        },
        {
          content:
            'Spring의 @Schedubled를 이용해 1시간마다 등록된 스케줄을 카카오 푸시 API와 FCM, APNs를 활용해 광고 푸시를 전송하고 있었는데, ' +
            '전체 사용자에게 발송 시 5시간 정도 시간이 소요 되어서, 하루에 1번 이상의 푸시를 발송할 수가 없어서 광고나 이벤트 진행에 문제가 존재하였음',
        },
        {
          content:
            '이를 해결하기 위해, 푸시 서비스를 위한 스레드 풀을 생성하여, 푸시 하나당 스레드 하나씩을 할당하여 동시에 여러 개의 푸시를 전송할 수 있게 수정하였고, ' +
            '이렇게 개선하여 5시간이 소요되던 푸시를 30분으로 개선하여, 하루에 여러 건의 광고, 이벤트 푸시를 발송할 수 있게 함',
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
            '개발자가 다수의 프로젝트를 매번 손수 수정해야 하다 보니 필연적으로 휴먼 에러가 발생할 수밖에 없는 구조였음',
        },
        {
          content:
            '이를 해결하는 방법으로 Entity class들을 따로 모은 프로젝트를 별도로 구성하여 내부 Maven 저장소(Nexus)에 Jar형태로 업로드하고, 다른 프로젝트들에서 이를 추가하여 사용하도록 개선',
        },
      ],
    }
  ],
};

export default project;
