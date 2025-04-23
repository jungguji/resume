import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
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
            "3단계: 기존 채팅서버를 채팅 요청, 응답 서버로 분리하고 <strong style='font-weight: bold;'>메시지 큐(SQS) 기반 아키텍처로 전환</strong>, 서버와 LLM 간 요청 및 응답을 완전히 비동기화하고 스케일 아웃 문제를 해결<br /><br />",
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
            '대규모 사용자를 위한 신규 결제 시스템 도입 시 데이터 정합성 및 무결성 확보의 중요성',
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
            '분산 환경에서의 <strong style="font-weight: bold;">동시성 제어</strong>를 위해 Redis(Redisson) 분산 락 적용 및 정확한 재화 거래 기록을 통한 무결성 보장',
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
          content: '안정적인 결제 시스템 구축 및 데이터 신뢰도 향상',
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
      title: '웨딩의 여신 푸시 시스템 개선',
      startedAt: '2022-11',
      endedAt: '2022-11',
      where: '웨딩의 여신',
      descriptions: [
        {
          contentTitle: '##### **문제** #####',
        },
        {
          content:
            '기존 @Scheduled 기반 푸시 시스템은 단일 스레드로 순차 처리하여 19만 사용자에게 푸시를 발송하는 데 5시간 이상 소요됨.',
        },
        {
          content:
            '과도한 발송 시간으로 인해 하루에 한 번 이상 푸시 발송이 불가능하여, 긴급 공지나 시의성 있는 광고/이벤트 진행에 제약 발생.',
        },
        {
          content: '마케팅 활동의 유연성 저하 및 적시 정보 전달 실패 가능성 존재.<br /><br />',
        },
        {
          contentTitle: '##### **해결** #####',
        },
        {
          content:
            "푸시 발송 전용 <strong style='font-weight: bold;'>ThreadPoolTaskExecutor (스레드 풀)</strong>를 도입하여 <strong style='font-weight: bold;'>병렬 처리</strong> 구현.",
        },
        {
          content:
            '푸시 발송 요청 건별로 스레드를 할당하여 다수의 푸시 알림을 동시에 전송하도록 로직 수정.<br /><br />',
        },
        {
          contentTitle: '##### **성과** #####',
        },
        {
          content:
            "전체 사용자(19만 명) 대상 푸시 발송 시간을 <strong style='font-weight: bold;'>5시간에서 30분으로 획기적으로 단축</strong> (90% 이상 시간 감소).",
        },
        {
          content:
            '하루에도 여러 번의 광고 및 이벤트 푸시 발송이 가능해져 마케팅 캠페인 운영의 유연성 및 효과 증대.',
        },
        {
          content:
            '푸시 시스템 성능 개선을 통해 서비스 운영 효율성 및 사용자 정보 전달의 적시성 향상.',
        },
      ],
    },
    {
      title: '웨딩의 여신 공통코드 모듈화',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: '웨딩의 여신',
      descriptions: [
        {
          contentTitle: '##### **문제** #####',
        },
        {
          content:
            '동일한 데이터베이스를 공유하는 여러 프로젝트에서 JPA Entity 클래스를 중복으로 관리.',
        },
        {
          content:
            'Entity 변경 시 관련된 모든 프로젝트의 코드를 개발자가 수동으로 일일이 수정해야 하는 번거로움 발생.',
        },
        {
          content:
            '수동 동기화 과정에서 휴먼 에러 발생 가능성이 높고, 프로젝트 간 데이터 모델 불일치 위험 존재.',
        },
        {
          content: '코드 중복으로 인한 유지보수 비용 증가 및 개발 생산성 저하.<br /><br />',
        },
        {
          contentTitle: '##### **해결** #####',
        },
        {
          content:
            "여러 프로젝트에서 공통으로 사용하는 JPA Entity 클래스들을 별도의 <strong style='font-weight: bold;'>공통 모듈</strong> 프로젝트로 분리.",
        },
        {
          content:
            "해당 공통 모듈을 JAR 파일 형태로 빌드하여 사내 <strong style='font-weight: bold;'>Nexus Maven Repository</strong>에 배포.",
        },
        {
          content:
            '각 서비스 프로젝트에서는 공통 모듈을 Maven/Gradle 의존성으로 추가하여 사용하도록 구조 변경.<br /><br />',
        },
        {
          contentTitle: '##### **성과** #####',
        },
        {
          content:
            "Entity 클래스 관리 포인트를 <strong style='font-weight: bold;'>중앙화하여 코드 중복 제거</strong> 및 일관성 확보.",
        },
        {
          content:
            "Entity 변경 시 공통 모듈만 수정 및 배포하면 모든 프로젝트에 일괄 적용되어 <strong style='font-weight: bold;'>유지보수 효율성 증대</strong>.",
        },
        {
          content:
            "수동 코드 수정 과정 제거로 <strong style='font-weight: bold;'>휴먼 에러 발생 가능성을 원천 차단</strong>하고 데이터 모델의 정합성 보장.",
        },
        {
          content: '표준화된 공통 모듈 사용으로 신규 프로젝트 개발 시 생산성 향상.',
        },
      ],
    },
  ],
};

export default project;
