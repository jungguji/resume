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
          contentTitle:
            '##### 담당 역할: DB 스키마 설계, 개발, 유지보수 등 Back-end 개발 (Java, Spring Boot, MariaDB, Redis) <br /><br />',
        },
        {
          contentTitle: '##### **문제 정의** #####',
        },
        {
          content:
            "AI Agent와의 유료 대화 기능 도입을 위한 신규 재화('하트') 관리 시스템의 부재 및 안정적인 결제/정산 기능 요구.",
        },
        {
          content:
            '서비스 운영 중, 분산된 서버 환경(8대)에서 메시지큐를 통해 동일 유저의 재화 차감 요청이 동시 다발적으로 처리될 때, 재화가 정확히 차감되지 않는 데이터 불일치 현상(<strong style="font-weight: bold;">동시성 이슈</strong>)을 발견했습니다. 이는 사용자 경험 및 서비스 신뢰도에 직접적인 영향을 미칠 수 있는 심각한 문제였습니다.',
        },
        {
          content:
            "<strong style='font-weight: bold;'>wrk를 이용한 부하 테스트</strong>를 통해 개발 환경에서 해당 동시성 문제를 재현하여, 트랜잭션 커밋 전 다른 요청이 이전 데이터를 조회하여 발생하는 'Lost Update'와 유사한 상황임을 명확히 했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **주요 해결 과정 및 기여** <br />',
        },
        {
          contentTitle: '###### **[Redis 분산 락 도입]**',
        },
        {
          content:
            '데이터 정합성 확보를 위해 Redis 기반의 Redisson 분산 락(`tryLock`)을 도입했습니다.',
        },
        {
          content:
            "Redisson의 Pub/Sub 메커니즘을 통해 성능 저하를 최소화하면서 안정적으로 <strong style='font-weight: bold;'>동시성을 제어</strong>했습니다.",
        },
        {
          content:
            '이를 통해 결제/정산 시스템에서 요구되는 높은 수준의 데이터 정합성을 확보하는 실질적인 경험을 쌓았습니다. <br /><br />',
        },
        {
          contentTitle: '###### **[부하 테스트를 통한 검증]**',
        },
        {
          content:
            "Redisson 분산 락 적용 전후로 <strong style='font-weight: bold;'>wrk</strong>를 사용하여 동일한 시나리오의 <strong style='font-weight: bold;'>부하 테스트</strong>를 재실시했습니다.",
        },
        {
          content:
            '적용 후, 모든 요청이 순차적으로 처리되어 재화가 정확히 차감되는 것을 로그 및 데이터베이스 상태를 통해 정량적으로 검증하며 데이터 무결성 확보를 확인했습니다. <br /><br />',
        },
        {
          contentTitle: '###### **[협업 및 지식 공유]**',
        },
        {
          content:
            '사업팀, 재무팀 등 유관부서와 긴밀히 소통하며 재화 정책을 수립하고 기술적 제약사항을 공유하여 효율적인 의사결정을 지원했습니다.',
        },
        {
          content:
            '또한, 동시성 문제 해결 과정, Redisson 분산 락 적용 경험을 팀 내 기술 세미나 형식으로 공유하여 동료들의 분산 환경 문제 해결 역량 강화에 기여했습니다.',
        },
        {
          content:
            "<strong style='font-weight: bold;'> 하단의 아티클 (동시성 이슈와 Redis Redisson를 이용한 해결방법, 동시성 제어를 위한 Redisson tryLock 메서드의 작동 원리)</strong> 이 팀 내 공유한 내용을 수정, 각색하여 포스팅한 블로그 글 입니다.<br /><br />",
        },
        {
          contentTitle: '##### **성과 및 배운 점** #####',
        },
        {
          content:
            'AI 기반 유료 대화라는 신규 비즈니스 모델을 성공적으로 시장에 출시하고, 실제 운영 환경에서 발생한 치명적인 동시성 문제를 해결하여 안정적인 재화 운영 기반을 마련, 사용자 신뢰도 회복 및 서비스 활성화에 기여했습니다.',
        },
        {
          content:
            '부하 테스트를 통한 검증으로 대규모 트래픽 환경에서도 신뢰할 수 있는 결제 및 재화 관리 시스템을 구축하여 서비스 안정성을 높이고, 사용자에게 긍정적인 경험을 제공했습니다.',
        },
        {
          content:
            '팀 내 세미나와 기술 블로그를 통해 경험을 공유함으로써, 개인의 성장을 넘어 팀 전체의 기술적 성장에 기여하는 것에 보람을 느꼈습니다.',
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
          contentTitle:
            '##### 담당 역할: 선톡 기능 기획 참여, 백엔드 시스템 설계 및 개발 주도 (Java, Spring Boot, MariaDB, Spring Scheduler) <br /><br />',
        },
        {
          contentTitle: '##### **문제 정의** #####',
        },
        {
          content:
            "서비스 주요 지표인 <strong style='font-weight: bold;'>사용자 리텐션 유지</strong>가 중요한 과제였으나, 한번 이탈한 사용자를 다시 서비스로 유입시킬 효과적인 장치가 부재했습니다.",
        },
        {
          content:
            "하나의 정해신 시간에 <strong style='font-weight: bold;'>대규모 사용자 대상 개인화 메시지 발송 시</strong>, 메시지 생성(LLM API 호출) 및 실제 발송 과정에서 특정 시간대에 트래픽이 집중되어 시스템 성능 저하 및 LLM API 사용량 제한 초과가 우려되었습니다.",
        },
        {
          content:
            '이로 인해 안정적이고 개인화된 메시지 발송에 어려움이 예상되었습니다.<br /><br />',
        },
        {
          contentTitle: '##### **주요 해결 과정 및 기여** <br />',
        },
        {
          contentTitle: '###### **[선톡 기능 핵심 로직 설계 및 구현]**',
        },
        {
          content:
            "AI 에이전트가 사용자에게 먼저 대화를 시작하는 '<strong style='font-weight: bold;'>선톡</strong>' 기능을 신규 개발하여, 사용자의 서비스 재참여를 적극적으로 유도했습니다.",
        },
        {
          content:
            "유관부서와 협의하여 정책(예: 대상 유저, 발송 시간 등)을 수립 후 발송 대상자를 선정하고, 사용자의 이전 대화 내용을 기반으로 개인화된 메시지를 생성하는 <strong style='font-weight: bold;'>백엔드 시스템 전반을 설계하고 구현</strong>했습니다.<br /><br />",
        },
        {
          contentTitle:
            '###### **[LLM API 연동 및 대규모 메시지 생성/발송 최적화 전략 수립 및 실행]**',
        },
        {
          content:
            "사내 연구실에서 개발한 <strong style='font-weight: bold;'>LLM 기반 맞춤 메시지 생성 API</strong>를 활용하여 <strong style='font-weight: bold;'>일 10,000건 이상</strong>의 개인화된 선톡 메시지를 생성했습니다.",
        },
        {
          content:
            '초기 접근 방식: 발송 시간 전에(예: 10~30분 전) 대상 유저를 조회하고 LLM API를 통해 실시간으로 메시지를 생성하려 했으나, 다음과 같은 문제점이 예상되었습니다.',
        },
        {
          markdownContent:
            "- 1. <strong style='font-weight: bold;'>LLM API(ChatGPT) 쿼터 제한</strong>으로 인한 메시지 생성 실패 및 발송 누락 가능성.",
        },
        {
          markdownContent:
            "- 2. 서버 부하 또는 LLM 응답 지연 시 <strong style='font-weight: bold;'>메시지 생성 지연</strong>으로 인한 적시 발송 실패 가능성.",
        },
        {
          content:
            "개선된 접근 방식 (<strong style='font-weight: bold;'>선 생성 후 검증 발송</strong>): 위의 문제점을 해결하기 위해,",
        },
        {
          markdownContent: '- 1. 사용자 트래픽이 적은 시간대에 메시지를 미리 대량으로 생성해두고,',
        },
        {
          markdownContent:
            '- 2. 실제 발송 직전에 최종 발송 조건을 재확인하여 발송하는 방식으로 전략을 변경했습니다.',
        },
        {
          content:
            "이 방식은 메시지를 미리 생성함으로써 일부 불필요한 자원(컴퓨팅 파워, LLM API 호출 비용 – 만약 사용자가 그 사이 재활성화된다면)이 소모될 수 있다는 단점이 있었지만, <strong style='font-weight: bold;'>안정적인 메시지 발송 성공률을 최우선</strong>으로 고려하여 <strong style='font-weight: bold;'>당시 상황에서의 최적</strong>의 해결책이라고 판단했습니다.<br /><br />",
        },
        {
          contentTitle: '###### **[Spring Scheduler를 활용한 이중화된 자동화 프로세스 구축]**',
        },
        {
          content:
            '안정적인 선톡 기능 운영을 위해 총 2개의 Spring Scheduler를 구성하여 역할을 분담했습니다:',
        },
        {
          content:
            "1. 메시지 생성 스케줄러: 매일 <strong style='font-weight: bold;'>사용자 트래픽이 가장 적은 시간대</strong>에 동작하여, 다음 날 발송될 후보 메시지들을 미리 생성하고 저장합니다.",
        },
        {
          content:
            "2. 메시지 발송 스케줄러: 짧은 간격(예: 5분)으로 주기적으로 실행되며, 현재 시간에 발송해야 할 미리 생성된 메시지들을 조회하여 <strong style='font-weight: bold;'>최종 조건 검증 후 사용자에게 발송</strong>합니다.",
        },
        {
          content:
            "이 <strong style='font-weight: bold;'>이중 스케줄러 구조</strong>를 통해 메시지 생성 부하와 발송 후 유저 트래픽을 효과적으로 분산시키고, LLM API 쿼터 문제 및 생성 지연으로 인한 발송 실패 가능성을 최소화하여 <strong style='font-weight: bold;'>시스템 안정성을 확보</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '###### **[경험 공유 및 팀 협업]**',
        },
        {
          content:
            "해당 기능 개발 과정에서 얻은 <strong style='font-weight: bold;'>트래픽 분산 전략과 트레이드 오프 경험</strong>을 팀 내부에 공유하여 유사 기능 개발 중인 팀원들의 참고 자료로 활용되었습니다.",
        },
        {
          content:
            "개발 과정에서 직면한 문제와 해결 방안을 정리하여 공유함으로써 <strong style='font-weight: bold;'>후속 프로젝트의 개발 효율성 향상에 기여</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **성과 및 배운 점** #####',
        },
        {
          content:
            "'<strong style='font-weight: bold;'>선톡</strong>' 기능의 성공적인 신규 개발을 통해 이탈 사용자의 <strong style='font-weight: bold;'>서비스 재참여율 40%를 달성</strong>하고 사용자 리텐션이 <strong style='font-weight: bold;'>10-20% 증가</strong>했습니다.",
        },
        {
          content:
            "<strong style='font-weight: bold;'>일 10,000건 이상</strong>의 개인화된 메시지를 안정적으로 생성 및 발송하는 시스템을 구축하여 대규모 메시징 처리 능력을 확보했습니다.",
        },
        {
          content:
            "<strong style='font-weight: bold;'>선 생성 후 검증 발송 전략</strong>과 <strong style='font-weight: bold;'>이중 Spring Scheduler 도입</strong>으로 시스템 부하 분산, LLM API 관련 문제 해결 및 <strong style='font-weight: bold;'>메시지 발송 성공률과 시스템 안정성을 크게 향상</strong>시켰습니다.",
        },
      ],
    },
    {
      title: 'ZUICY AI 챗봇 기능 개발 및 대규모 트래픽 처리 위한 시스템 개선',
      startedAt: '2024-06',
      endedAt: '2024-08',
      where: '제네시스랩',
      descriptions: [
        {
          contentTitle:
            '##### 담당 역할: AI 챗봇 핵심 기능 개발 및 백엔드 아키텍처 개선 (Java, Spring Boot, AWS SQS, WebClient) <br /><br />',
        },
        {
          contentTitle: '##### **문제 정의** #####',
        },
        {
          content:
            "기존 영상 콘텐츠의 낮은 효율성으로 인해, 신규 사용자 유입 증대 및 리텐션 강화를 위한 핵심 기능으로 <strong style='font-weight: bold;'>AI 기반 대화 기능 도입이 시급</strong>했습니다.",
        },
        {
          content:
            "기능 출시 후 사용자 수가 급증함에 따라 <strong style='font-weight: bold;'>채팅 응답 지연(최대 5분 이상)</strong>이 빈번하게 발생하여 사용자 경험이 심각하게 저하되었고, 이는 이탈률 증가로 이어질 수 있는 위험 요소였습니다.",
        },
        {
          content:
            "기존 동기 방식 아키텍처는 외부 LLM API 응답 대기 시 <strong style='font-weight: bold;'>블로킹 이슈를 유발</strong>하여 스케일 아웃에 명확한 한계가 있었고, 대규모 동시 요청 처리에 어려움이 있었습니다.<br /><br />",
        },
        {
          contentTitle: '##### **주요 해결 과정 및 기여** <br />',
        },
        {
          contentTitle: '###### **[1단계: 병렬 스레드 처리를 통한 초기 응답 지연 완화]**',
        },
        {
          content:
            "문제의 핵심은 사내 LLM API 서버 호출 시 동기 방식으로 응답을 대기하며 발생하는 심각한 <strong style='font-weight: bold;'>병목 현상</strong>이었습니다.",
        },
        {
          content:
            'LLM API 서버의 응답 지연이 채팅 서버의 전체 처리 속도 저하로 직결되었고, 이는 RDB에 채팅 결과를 업데이트하는 과정까지 지연시켰습니다.',
        },
        {
          content:
            "이 문제를 일차적으로 완화하기 위해, Spring의 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>ThreadPoolTaskExecutor</code>와 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>CompletableFuture</code>를 활용하여 다수의 LLM API 요청을 <strong style='font-weight: bold;'>병렬 스레드로 동시에 전송하고 처리</strong>하도록 개선했습니다.",
        },
        {
          content:
            '이를 통해 각 요청이 다른 요청의 LLM 응답 대기에 구애받지 않고 독립적으로 처리될 수 있도록 하여, 시스템 전체의 응답 대기 시간을 단축하고 초기 응답 지연 문제를 일부 해소했습니다.<br /><br />',
        },
        {
          contentTitle: '###### **[2단계: 비동기 I/O 도입으로 블로킹 이슈 해소]**',
        },
        {
          content:
            "LLM API 호출 시 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>RestTemplate</code>으로 인한 스레드 블로킹 문제를 근본적으로 해결하고자, 논블로킹 I/O를 지원하는 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>WebClient</code>로 전환했습니다.",
        },
        {
          content:
            '이를 통해 시스템 자원 효율성을 높이고 동시 처리량을 증대시켜 응답 속도를 추가적으로 개선했습니다.<br /><br />',
        },
        {
          contentTitle: '###### **[3단계: 메시지 큐(SQS) 기반 비동기 아키텍처로 전면 개편]**',
        },
        {
          content:
            "시스템 확장성과 안정성을 극대화하기 위해, 기존 채팅 서버를 채팅 요청 처리 서버와 채팅 응답 처리 서버로 분리하고, 두 서버와 LLM API 서버간의 통신을 <strong style='font-weight: bold;'>AWS SQS 기반의 완전 비동기 방식으로 전환</strong>했습니다.",
        },
        {
          content:
            "이 아키텍처 변경을 통해 서버와 LLM API 서버 간의 의존성을 낮추고, 서버의 스케일아웃 및 장애 격리가 가능해져 <strong style='font-weight: bold;'>대규모 트래픽을 안정적으로 처리할 수 있는 기반</strong>을 마련했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **성과 및 배운 점** #####',
        },
        {
          content:
            "채팅 평균 응답 속도를 <strong style='font-weight: bold;'>분 단위에서 수 초 이내로 개선</strong>하여 심각한 서비스 장애 상황을 해결하고, 사용자 사용성을 크게 향상시켰습니다.",
        },
        {
          content:
            "채팅 서버의 요청 처리량을 증가시키고 시스템 전반의 안정성을 확보하여, 향후 사용자 증가에도 유연하게 대응할 수 있는 <strong style='font-weight: bold;'>확장 가능한 시스템을 구축</strong>했습니다.",
        },
        {
          content:
            "문제 해결 초기, LLM API 호출 병목 현상을 해결하기 위해 병렬처리가 아닌 동시성 처리가 필요함을 알았지만, 하지만 당시 해당 기술에 대한 숙련도가 충분하지 않아, 우선적으로 제가 더 익숙하게 다룰 수 있는 병렬 스레드 처리(<code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>ThreadPoolTaskExecutor</code>와 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>CompletableFuture</code>)를 통해 응답 지연을 완화하는 현실적인 접근을 선택했습니다.",
        },
        {
          content:
            "이후 초기 응답속도 지연문제를 완화 후 WebClient 학습 및 도입(2단계), SQS 기반 완전 비동기 아키텍처 설계(3단계)로 나아가며 <strong style='font-weight: bold;'>문제 해결의 완성도를 높이고 기술 스펙트럼을 넓힐 수 있었습니다</strong>.",
        },
        {
          content:
            "문제의 근본 원인을 분석하고 점진적인 해결책을 적용하여 확장 가능한 아키텍처로 발전시키는 전 과정에서 <strong style='font-weight: bold;'>주도적인 역할을 수행하며 시스템 전체를 보는 시각을 넓힐 수 있었습니다</strong>.",
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
          contentTitle:
            '##### 담당 역할: 푸시 알림 시스템 성능 개선 및 백엔드 개발 (Java, Spring Boot, 외부 푸시 서비스 API 연동) <br /><br />',
        },
        {
          contentTitle: '##### **문제 정의** #####',
        },
        {
          content:
            "기존 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>@Scheduled</code> 기반 푸시 시스템은 단일 스레드로 푸시 요청을 1건씩 순차 처리하여, <strong style='font-weight: bold;'>19만 전체 사용자 대상 발송에 5시간 이상이 소요</strong>되는 심각한 성능 병목이 존재했습니다.",
        },
        {
          content:
            "이로 인해 하루 1회 이상 푸시 발송이 현실적으로 불가능하여, 긴급 공지 전달 지연, <strong style='font-weight: bold;'>시의성이 중요한 마케팅 이벤트(예: 타임딜, 긴급 프로모션) 진행에 큰 제약</strong>이 따랐습니다.",
        },
        {
          content:
            "결과적으로 마케팅 활동의 유연성이 크게 저하되고, 사용자에게 적시 정보를 전달하지 못해 <strong style='font-weight: bold;'>이벤트 참여율 저조 및 잠재적 사용자 불만을 야기</strong>할 수 있었습니다.<br /><br />",
        },
        {
          contentTitle: '##### **주요 해결 과정 및 기여** <br />',
        },
        {
          contentTitle: '###### **[병렬 처리를 위한 스레드 풀 도입]**',
        },
        {
          content:
            "푸시 발송 작업의 병렬 처리를 위해, 푸시 전용 <code style='font-family: Consolas, monaco, monospace; background-color: #f5f5f5; padding: 2px 4px; border-radius: 4px;'>ThreadPoolTaskExecutor</code>(스레드 풀)를 도입하고 시스템 리소스를 고려하여 <strong style='font-weight: bold;'>최적의 스레드 수를 설정</strong>했습니다.",
        },
        {
          content:
            "개별 푸시 발송 요청을 각각의 스레드에 할당하여 <strong style='font-weight: bold;'>동시에 다수의 푸시 알림을 전송할 수 있도록 기존 로직을 전면 수정</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '###### **[외부 푸시 서비스 API 벌크 발송 기능 적극 활용]**',
        },
        {
          content:
            '기존 시스템은 외부 푸시 서비스(카카오) API 호출 시 1건의 메시지만을 전송하는 비효율적인 구조였습니다.',
        },
        {
          content:
            "외부 푸시 서비스의 API 문서를 면밀히 분석하여, 단일 API 호출로 <strong style='font-weight: bold;'>최대 100건의 메시지를 동시에 발송할 수 있는 벌크(Bulk) 발송 기능</strong>을 지원함을 확인했습니다.",
        },
        {
          content:
            "이에, 사용자 목록을 100명 단위로 분할하고, 각 단위를 벌크 API를 통해 일괄 발송하도록 발송 로직을 개선하여 <strong style='font-weight: bold;'>API 호출 횟수를 획기적으로 줄였습니다</strong>.<br /><br />",
        },
        {
          contentTitle: '###### **[병렬 처리와 벌크 발송의 시너지 극대화]**',
        },
        {
          content:
            "병렬 스레드 처리와 푸시 API의 벌크 발송 기능을 결합하여, 각 스레드가 여러 건(최대 100건)의 메시지를 한 번의 API 호출로 처리하도록 함으로써 <strong style='font-weight: bold;'>시스템 처리량을 극대화</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **성과 및 배운 점** #####',
        },
        {
          content:
            "전체 사용자(19만 명) 대상 푸시 발송 시간을 기존 5시간 이상에서 <strong style='font-weight: bold;'>평균 30분 이내로 90% 이상 단축</strong>시켰습니다.",
        },
        {
          content:
            "하루에도 여러 차례, 다양한 타겟 그룹을 대상으로 한 푸시 발송이 가능해져 <strong style='font-weight: bold;'>마케팅 캠페인 운영의 유연성과 효과가 크게 증대</strong>되었으며, 긴급 공지 등 중요 정보의 적시 전달이 가능해졌습니다.",
        },
        {
          content:
            "<strong style='font-weight: bold;'>외부 API의 제약사항 및 기능을 정확히 파악</strong>하고 이를 최대한 활용하여 시스템 성능을 최적화하는 것의 중요성을 깨달았습니다. 단순 로직 변경을 넘어, 외부 시스템과의 연동 방식 자체를 개선하는 것이 큰 성능 향상을 가져올 수 있음을 직접 경험했습니다.",
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
          contentTitle:
            '##### 담당 역할: 공통 모듈화 아키텍처 설계 및 개발 주도 (Java, JPA, Spring Boot, Maven/Gradle, Nexus Repository) <br /><br />',
        },
        {
          contentTitle: '##### **문제 정의** #####',
        },
        {
          content:
            "다수의 백엔드 서비스 프로젝트들이 동일한 데이터베이스를 공유함에도 불구하고, JPA Entity 클래스를 각 프로젝트별로 <strong style='font-weight: bold;'>중복 관리하여 코드 일관성 유지가 어려웠습니다</strong>.",
        },
        {
          content:
            "Entity 스키마 변경 시, 관련된 모든 프로젝트의 코드를 개발자가 수동으로 찾아 일일이 수정해야 하는 <strong style='font-weight: bold;'>비효율적인 작업이 반복</strong>되었으며, 이는 상당한 개발 시간을 소모했습니다.",
        },
        {
          content:
            "이러한 수동 동기화 과정은 <strong style='font-weight: bold;'>휴먼 에러 발생 가능성을 높여</strong> 프로젝트 간 데이터 모델 불일치를 초래했고, 중복 코드로 인한 전체적인 유지보수 비용 증가 및 개발 생산성 저하를 야기했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **주요 해결 과정 및 기여** <br />',
        },
        {
          contentTitle: '###### **[공통 모듈 설계 및 분리]**',
        },
        {
          content:
            "여러 서비스 프로젝트에서 공통으로 사용되는 JPA Entity 클래스 및 관련 유틸리티 클래스들을 식별하여, 별도의 <strong style='font-weight: bold;'>'공통 데이터 모델' 프로젝트로 분리</strong>하는 작업을 주도했습니다.",
        },
        {
          content:
            "모듈의 독립성과 재사용성을 고려하여 <strong style='font-weight: bold;'>명확한 의존성 경계를 설정</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '###### **[Nexus Repository를 활용한 체계적인 배포 및 의존성 관리]**',
        },
        {
          content:
            "분리된 공통 모듈을 JAR 파일 형태로 빌드하여, 사내 <strong style='font-weight: bold;'>Nexus Maven Repository에 표준화된 방식으로 배포</strong>했습니다.",
        },
        {
          content:
            "이를 통해 버전 관리의 체계성을 확보하고, 각 서비스 프로젝트에서 공통 모듈을 Maven/Gradle 의존성으로 손쉽게 추가하고 관리할 수 있도록 <strong style='font-weight: bold;'>인프라를 구축</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '###### **[기존 서비스 프로젝트 리팩토링 및 전환 가이드]**',
        },
        {
          content:
            "기존 서비스 프로젝트들이 새로운 공통 모듈을 사용하도록 의존성을 변경하고, <strong style='font-weight: bold;'>관련 코드를 리팩토링</strong>하는 작업을 진행했습니다.",
        },
        {
          content:
            "추후 다른 팀원들이 원활하게 전환할 수 있도록 <strong style='font-weight: bold;'>변경 가이드 문서를 작성하고 공유</strong>했습니다.<br /><br />",
        },
        {
          contentTitle: '##### **성과 및 배운 점** #####',
        },
        {
          content:
            "공통 Entity 클래스 관리 포인트를 중앙화함으로써 <strong style='font-weight: bold;'>코드 중복을 완전히 제거</strong>하고, 모든 프로젝트에서 <strong style='font-weight: bold;'>데이터 모델의 일관성을 확보</strong>했습니다.",
        },
        {
          content:
            "수동 코드 수정 및 동기화 과정을 원천적으로 제거함으로써 <strong style='font-weight: bold;'>휴먼 에러 발생 가능성을 차단</strong>하고, 데이터 모델의 정합성을 보장하여 <strong style='font-weight: bold;'>시스템 안정성을 높였습니다</strong>.",
        },
        {
          content:
            "표준화된 공통 모듈 사용으로 신규 프로젝트 개발 시 Entity 관련 코드를 재작성할 필요가 없어져 개발 초기 세팅 시간을 단축하고 <strong style='font-weight: bold;'>전체적인 개발 생산성을 향상</strong>시켰습니다.",
        },
        {
          content:
            "해당 과정에서 레이어간 분리를 명확히하여 이후 개발의 유지보수 및 생산성을 향상시킬 수 있었고, <strong style='font-weight: bold;'>프로젝트의 전반적인 아키텍처에 대해 고민</strong>해볼 수 있었습니다.",
        },
      ],
    },
  ],
};

export default project;
