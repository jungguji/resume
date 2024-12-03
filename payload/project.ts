import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ZUICY 톡 기능용 신규 재화 시스템 개발',
      startedAt: '2024-08',
      endedAt: '2024-09',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle: '##### **문제** #####',
        },
        {
          content:
            'AI와 유료 대화 기능 도입을 위한 신규 재화(이하 ‘하트’) 추가 및 관리 시스템 필요',
        },
        {
          content:
            '다양한 종류의 캐시(무료/유료)를 사용하여 하트를 구매할 때 정산 정확성과 데이터 무결성 보장 어려움',
        },
        {
          markdownContent: '- 사용된 캐시 수량별로 하트가 분배',
        },
        {
          content:
            '분산된 서버 환경에서 <strong style="font-weight: bold;">동시성 이슈</strong> 발생<br /><br />',
        },
        {
          contentTitle: '##### **해결** #####',
        },
        {
          content:
            'Redis의 java 라이브러리 중 Redisson을 활용해 분산 환경에서 동시성 제어 및 정합성 유지',
        },
        {
          content: '소수점 4자리까지 표현하도록 정산 정책을 도입하여 금액 오차를 최소화',
        },
        {
          content:
            '하트 충전, 사용, 소멸, 만료, 환불 등의 모든 거래를 정확히 기록하여 데이터 무결성 보장 <br /><br />',
        },
        {
          contentTitle: '##### **성과** #####',
        },
        {
          content: '신규 비즈니스 모델(유료 대화 기능)을 성공적으로 도입',
        },
        {
          content: '정산 시스템 안정화 및 데이터 무결성 강화',
        },
        {
          content: '유관부서와의 원활한 커뮤니케이션을 통한 정책 수정 및 합의',
        },
        {
          content:
            '발생했던 동시성 이슈와 해결 방법을 <strong style="font-weight: bold;">팀 내에 세미나 형식으로 공유</strong>',
        },
      ],
    },
    {
      title: 'ZUICY 선톡 기능 개발',
      startedAt: '2024-07',
      endedAt: '2024-08',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle: '##### **문제** #####',
        },
        {
          content: '유저가 서비스에서 이탈하는 경우, 다시 돌아오게 하기 위한 유도책이 필요',
        },
        {
          content: '대규모 맞춤 메시지 생성 및 발송 시 트래픽 집중으로 인한 성능 저하 우려',
        },
        {
          content: 'LLM 처리 부하 및 사용량 제한으로 안정적 메시지 발송 어려움<br /><br />',
        },
        {
          contentTitle: '##### **해결** #####',
        },
        {
          content:
            '선톡(에이전트가 먼저 대화를 시작) 기능 설계 및 구현을 통해 유저에게 먼저 메시지를 발송, 유저들의 서비스 재참여 유도',
        },
        {
          content:
            '연구실에서 개발한 API를 통해 LLM 모델 기반으로 일 10,000건의 맞춤 메시지를 미리 생성 및 발송 시간 지정을 지정하여 트래픽 분산 발송',
        },
        {
          markdownContent: '- 정책적으로 정한 발송 시간이 존재하여 그 시간에 분산하여 발송',
        },
        {
          content: '스케쥴러를 이용해 메시지 생성 및 발송 프로세스를 자동화하여 서비스 안정성 강화',
        },
        {
          markdownContent:
            '- 유저가 서비스를 많이 이용하는 시간에 생성을 요청할 경우 사용량에 따라 현재 사용 중인 유저의 서비스 경험이 하락할 수 있음',
        },
        {
          markdownContent:
            '- 동일한 시간에 한번에 많은 유저에게 푸시를 보낼 경우 트래픽이 몰려 서비스 경험이 하락할 수 있음<br /><br />',
        },
        {
          contentTitle: '##### **성과** #####',
        },
        {
          content:
            "메시지를 수신한 유저의 <strong style='font-weight: bold;'>평균 응답률 40% 달성, 리텐션 10-20% 상승</strong>",
        },
        {
          content: '콘텐츠 소비 시간 증가 및 재방문율 개선',
        },
        {
          content: '트래픽 부하 분산과 안정적 메시지 발송 프로세스로 서비스 품질 향상',
        },
        {
          content:
            "해당 케이스를 문서화하여, 비슷하게 사내 LLM 모델 API를 이용하는 기능을 개발하는 <strong style='font-weight: bold;'>팀원들에게 해당 이슈 공유 및 가이드</strong>",
        },
      ],
    },
    {
      title: 'ZUICY 톡 기능 개발 및 개선',
      startedAt: '2024-06',
      endedAt: '2024-08',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle: '##### **문제** #####',
        },
        {
          content:
            '기존에 제공하는 영상 콘텐츠는 비용 대비 효율이 좋지 않아, 신규 유저 유입과 리텐션을 위한 AI 대화 기능 필요',
        },
        {
          content:
            '사용량이 증가할 경우 채팅 응답 지연이(5분 이상) 자주 발생하여 유저의 서비스 경험 하락',
        },
        {
          content: '스케일 아웃 한계와 블로킹 이슈로 대규모 요청 처리 어려움<br /><br />',
        },
        {
          contentTitle: '##### **해결** #####',
        },
        {
          content:
            "1단계: 기존 RDB 기반 Queue 설계의 한계를 해결하기 위해 ThreadPoolTaskExecutor와 CompletableFuture를 사용해 <strong style='font-weight: bold;'>병렬 처리</strong> 도입, 응답 속도 개선",
        },
        {
          content:
            "2단계: RestTemplate 대신 WebClient를 도입하여 비동기 요청으로 <strong style='font-weight: bold;'>동시처리</strong>, 블로킹 이슈를 완화하고 처리량 증가 및 응답 속도 개선",
        },
        {
          content:
            "3단계: 기존 구조를 <strong style='font-weight: bold;'>메시지 큐(SQS) 기반 아키텍처로 전환</strong>, 채팅 서버와 LLM 간 요청 및 응답을 완전히 비동기화하고 스케일 아웃 문제를 해결<br /><br />",
        },
        {
          contentTitle: '##### **성과** #####',
        },
        {
          content: '응답 속도를 개선하여 서비스 장애 해결',
        },
        {
          content: '채팅 서버의 요청 처리량 증가와 시스템 안정성 향상',
        },
        {
          content: '단계적 개선을 통해 유저 리텐션 및 톡 기능의 사용성 강화로 서비스 품질 향상',
        },
        {
          content: '레거시한 시스템을 더 많은 트래픽을 감당 가능한 구조로 개선',
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
    },
  ],
};

export default project;
