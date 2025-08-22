import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'ZUICY AI 챗봇 기능 개발 및 대규모 트래픽 처리 위한 시스템 개선',
      startedAt: '2024-06',
      endedAt: '2024-08',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle: '##### **[주요 성과]** <br />',
        },
        {
          content:
            '동기 블로킹 구조를 개선하여, 5분 이상 소요되던 채팅 평균 응답 속도를 3초 이내로 단축시켜서 응답 속도를 최대 `99%` 이상 단축',
        },
        {
          content:
            '분당 1만 건의 요청 처리를 목표로 시스템을 설계했으며, 실제 운영 환경의 피크타임에 발생한 분당 6,000건의 요청을 지연 없이 안정적으로 처리하며 목표 처리량을 성공적으로 입증.',
        },
        {
          content:
            'AWS SQS 기반의 아키텍처 전환을 통해, 대규모 사용자 요청에도 장애 없이 유연하게 확장 가능한 MSA 시스템의 기반을 마련.',
        },
        {
          content:
            '심각한 성능 저하로 인한 사용자 이탈 위기를 해결하고, 핵심 기능의 `비즈니스 연속성`을 성공적으로 확보함.<br /><br />',
        },
        {
          contentTitle: '##### **[문제 상황 및 해결 과정]** <br />',
        },
        {
          content: '<strong style="font-weight: bold;">문제:</strong>',
        },
        {
          markdownContent:
            '- AI 챗봇 기능 출시 후 사용자 급증으로 채팅 응답 지연(최대 5분 이상) 발생.',
        },
        {
          markdownContent:
            '- 기존 동기 방식 아키텍처의 블로킹 이슈로 인해 시스템 확장(Scale-out)에 명확한 한계 존재.<br /><br />',
        },
        {
          content:
            '<strong style="font-weight: bold;">해결: 비즈니스 연속성을 고려한 3단계 점진적 아키텍처 개선</strong>',
        },
        {
          markdownContent:
            '- 1단계 (긴급 대응): 평소 익숙한 기술인 ThreadPoolTaskExecutor와 CompletableFuture를 활용한 병렬 처리로 외부 API 호출 병목을 즉시 완화하여 초기 서비스 안정성 확보.',
        },
        {
          markdownContent:
            '- 2단계 (병목 제거): 논블로킹 I/O를 지원하는 WebClient로 전환하여 스레드 블로킹 이슈를 근본적으로 해결하고 시스템 처리량 증대.',
        },
        {
          markdownContent:
            '- 3단계 (구조 개편): 서버 분리 및 AWS SQS 기반의 완전 비동기 아키텍처로 전면 개편. 서버 간 의존성을 제거하고, 유연한 확장성과 장애 격리가 가능한 MSA 기반 구조로 시스템 완성.<br /><br />',
        },
        {
          contentTitle: '##### **[역할 및 사용 기술]** <br />',
        },
        {
          content: '역할: 백엔드 아키텍처 개선 설계 및 점진적 전환 프로젝트 주도',
        },
        {
          content:
            '사용 기술: Java, Spring Boot, CompletableFuture, WebClient, AWS SQS <br /><br />',
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
          contentTitle: '##### **[주요 성과]** <br />',
        },
        {
          content:
            'Redis로 분산 락을 적용하여, 분산 환경에서 발생하던 결제 데이터 불일치(동시성 이슈) 발생률 `0건` 달성',
        },
        {
          content:
            '부하 테스트(wrk)를 통해 동시 요청 시에도 데이터 정합성이 `100%` 보장됨을 정량적으로 검증',
        },
        {
          content:
            '안정적인 결제/정산 시스템을 구축하여 신규 비즈니스 모델인 `AI 유료 대화` 기능의 성공적 출시에 핵심적으로 기여',
        },
        {
          content:
            '이슈 해결 경험을 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">기술 블로그 포스팅</a> 및 사내 기술 세미나로 공유하여 팀의 분산 환경 기술 역량 강화에 기여<br /><br />',
        },

        {
          contentTitle: '##### **[문제 상황 및 해결 과정]** <br />',
        },
        {
          content:
            '<strong style="font-weight: bold;">문제:</strong> 신규 유료 기능 도입 시, 분산 서버(8대) 환경에서 동시 결제 요청이 발생하면 데이터가 누락되는 치명적 오류 발생.',
        },
        {
          content: '<strong style="font-weight: bold;">해결:</strong> ',
        },
        {
          markdownContent:
            '- Redis 기반의 Redisson 분산 락(tryLock)을 도입하여 임계 영역(재화의 동시사용)의 동시 접근을 제어.',
        },
        {
          markdownContent:
            '- 모든 재화 거래(생성, 사용, 소멸, 환불)를 기록하는 정책을 설계하여 데이터 무결성 및 추적성 확보.',
        },
        {
          markdownContent:
            '- 사업/재무팀과 협업하여 재화 정책을 수립하고 기술적 제약사항을 공유하며 효율적 의사결정 지원.<br /><br />',
        },
        {
          contentTitle: '##### **[역할 및 사용 기술]** <br />',
        },
        {
          content:
            '<strong style="font-weight: bold;">역할:</strong> 백엔드 시스템 설계 및 개발 (DB 스키마, 재화 정책, 동시성 제어), 기능 기획 참여',
        },
        {
          content:
            '<strong style="font-weight: bold;">사용 기술:</strong> Java, Spring Boot, Redis(Redisson), MariaDB, wrk, Hibernate, QueryDSL <br /><br />',
        },
      ],
    },
    {
      title: 'ZUICY 사용자 리텐션 증대를 위한 AI 기반 선톡(先 Talk) 기능 개발',
      startedAt: '2024-07',
      endedAt: '2024-08',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle: '##### **[주요 성과]** <br />',
        },
        {
          content:
            '`선톡` 기능 개발을 주도하여 이탈 사용자의 서비스 재참여율 `40%` 및 리텐션 `10~20%p` 증가 달성.',
        },
        {
          content:
            '일 10,000건 이상의 개인화 메시지를 안정적으로 처리하는 발송 시스템 설계 및 구축.',
        },
        {
          content:
            '트레이드 오프를 고려한 `선 생성, 후 검증` 아키텍처와 이중화된 스케줄러를 도입하여 시스템 부하를 분산시키고, LLM API 호출 실패 및 지연으로 인한 메시지 발송 실패율 0건 달성.<br /><br />',
        },
        {
          contentTitle: '##### **[문제 상황 및 해결 과정]** <br />',
        },
        {
          content: '<strong style="font-weight: bold;">문제:</strong>',
        },
        {
          markdownContent: '- 이탈 사용자를 다시 서비스로 유입시킬 효과적인 장치 부재.',
        },
        {
          markdownContent:
            '- 대규모 맞춤 메시지를 특정 시간에 일괄 발송 시, 트래픽 집중으로 인한 시스템 성능 저하 및 LLM API 사용량 제한 우려.',
        },
        {
          content: '<strong style="font-weight: bold;">해결:</strong>',
        },
        {
          markdownContent:
            "- AI가 먼저 대화를 시작하는 '선톡(先 Talk)' 기능을 신규 개발하여 사용자 재참여를 적극적으로 유도.",
        },
        {
          markdownContent:
            "- 사용자 트래픽이 적은 시간에 메시지를 미리 생성하고, 발송 시점에 최종 검증하는 '선 생성, 후 검증' 아키텍처를 설계하여 시스템 부하 분산.",
        },
        {
          markdownContent:
            "- 2개의 Spring Scheduler를 이용하여 메시지 '생성'과 '발송' 프로세스를 분리, 대규모 요청에도 안정적인 자동화 파이프라인 구축.<br /><br />",
        },
        {
          contentTitle: '##### **[역할 및 사용 기술]** <br />',
        },
        {
          content: '역할: 백엔드 시스템 설계 및 개발 주도, 기능 기획 참여',
        },
        {
          content:
            '사용 기술: Java, Spring Boot, Spring Scheduler, MariaDB, Hibernate, QueryDSL, 외부 API 연동 <br /><br />',
        },
      ],
    },
    {
      title: '웨딩의 여신 대규모 푸시 알림 시스템 성능 최적화',
      startedAt: '2022-11',
      endedAt: '2022-11',
      where: '유모멘트',
      descriptions: [
        {
          contentTitle: '##### **[주요 성과]** <br />',
        },
        {
          content:
            '19만 명 전체 사용자 대상 푸시 발송 시간을 기존 5시간 이상에서 30분 이내로 단축하여 푸시 발송 시간 `90%` 이상 단축.',
        },
        {
          content:
            '외부 푸시 서비스의 Bulk API를 적용하여, API 호출 횟수를 기존 대비 최대 `99%` 감소시켜 비용 및 시스템 부하 절감.',
        },
        {
          content:
            '하루 1회만 가능했던 푸시 발송을 수시로 가능하게 하여, 타임딜 등 시의성 있는 마케팅 활동의 즉시 실행 기반 마련.<br /><br />',
        },
        {
          contentTitle: '##### **[문제 상황 및 해결 과정]** <br />',
        },
        {
          content: '<strong style="font-weight: bold;">문제:</strong>',
        },
        {
          markdownContent:
            '- 단일 스레드로 동작하는 푸시 시스템의 병목으로 인해, 19만 명 발송에 5시간 이상 소요.',
        },
        {
          markdownContent:
            '- 과도한 발송 시간으로 인해 긴급 공지 및 시의성 있는 마케팅 캠페인 진행 불가.<br /><br />',
        },
        {
          content:
            '<strong style="font-weight: bold;">해결: 병렬 처리와 API 최적화의 이중 개선 전략</strong>',
        },
        {
          markdownContent:
            '- 병렬 처리 도입: ThreadPoolTaskExecutor를 도입하여 푸시 발송 작업을 병렬화하고, 여러 스레드가 동시에 푸시를 발송하도록 구조 변경.',
        },
        {
          markdownContent:
            '- API 호출 최적화: 외부 API 문서를 분석하여 Bulk 발송 기능을 발견, 단일 호출로 최대 100건을 동시에 처리하도록 로직을 개선하여 API 호출 횟수를 획기적으로 감소시킴.<br /><br />',
        },
        {
          contentTitle: '##### **[역할 및 사용 기술]** <br />',
        },
        {
          content: '역할: 푸시 알림 시스템 성능 개선 프로젝트 주도',
        },
        {
          content: '사용 기술: Java, Spring, 외부 Push Service API 연동 <br /><br />',
        },
      ],
    },
    {
      title: '웨딩의 여신 백엔드 공통 JPA Entity 모듈화',
      startedAt: '2022-07',
      endedAt: '2022-08',
      where: '웨딩의 여신',
      descriptions: [
        {
          contentTitle: '##### **[주요 성과]** <br />',
        },
        {
          content:
            'Entity 관련 코드의 중앙 관리 및 재사용을 통해, 신규 프로젝트의 초기 개발 세팅 시간을 `50%` 이상 단축.',
        },
        {
          content:
            'DB 스키마 변경 시, N개의 프로젝트를 개별 수정하던 작업을 단 1개의 공통 모듈만 수정하도록 개선하여, 관련 작업 공수를 `90%` 이상 감소시킴.',
        },
        {
          content:
            '수동 동기화 작업을 자동화된 빌드/배포 프로세스로 대체하여, 프로젝트 간 데이터 모델 불일치로 인한 장애 발생 가능성을 `0%`로 제거.<br /><br />',
        },
        {
          contentTitle: '##### **[문제 상황 및 해결 과정]** <br />',
        },
        {
          content: '<strong style="font-weight: bold;">문제:</strong>',
        },
        {
          markdownContent:
            '- 여러 프로젝트에서 동일한 JPA Entity를 중복 관리하여 코드 일관성 훼손 및 유지보수 비용 급증.',
        },
        {
          markdownContent:
            '- DB 스키마 변경 시, 수동으로 모든 프로젝트를 수정하는 과정에서 휴먼 에러 및 데이터 모델 불일치 위험 발생.<br /><br />',
        },
        {
          content: '<strong style="font-weight: bold;">해결:</strong>',
        },
        {
          markdownContent:
            "- 공통으로 사용되는 JPA Entity 및 유틸리티 클래스를 별도의 '공통 데이터 모델' 프로젝트로 분리 및 모듈화.",
        },
        {
          markdownContent:
            '- 모듈을 JAR 파일로 빌드하여 사내 Nexus Repository를 통해 버전 관리 및 배포를 자동화하는 인프라 구축.',
        },
        {
          markdownContent:
            '- 기존 프로젝트들의 의존성을 공통 모듈로 변경하는 리팩토링을 수행하고, 팀원들을 위한 <a href="https://jungguji.github.io/2022/08/07/Nexus%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%AA%A8%EB%93%88%ED%99%94/" target="_blank" rel="noopener noreferrer">전환 가이드 문서</a>를 작성 및 공유.<br /><br />',
        },
        {
          contentTitle: '##### **[역할 및 사용 기술]** <br />',
        },
        {
          content: '역할: 공통 모듈 아키텍처 설계 및 개발, 배포 인프라 구축 주도',
        },
        {
          content:
            '사용 기술: Java, JPA, Spring, Spring Boot, Maven, Nexus Repository <br /><br />',
        },
      ],
    },
  ],
};

export default project;
