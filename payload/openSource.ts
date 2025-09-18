import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'AI 기반 자동 코드 리뷰어 도구',
      descriptions: [
        { content: 'Summary: 개발 생산성 및 코드 품질 향상을 목표로, git diff와 LLM을 활용해 코드 변경 사항에 대한 자동 리뷰를 제공하는 도구' },
        {
          content:
            'Key Features:',
        },
        {
          markdownContent:
            '- LangChain과 Ollama를 사용하여, 각기 다른 분석 역할을 수행하는 순차적 에이전트 워크플로우 설계',
        },
        { markdownContent: '- 보안 및 비용 제약사항을 고려하여 로컬 LLM(qwen2.5-coder) 기반으로 전체 시스템을 구축하고, 실용적인 AI 도입 방안 탐색' },
        { markdownContent: '- AI를 개발 워크플로우에 직접 통합하는 실험을 통해 프로세스 혁신의 가능성과 기술적 한계를 직접 검증' },
        { content: 'Tech Stack: Python, LangChain, Ollama, LLM'},
        {
          content: 'https://github.com/jungguji/code-review-cli',
          href: 'https://github.com/jungguji/code-review-cli',
        },
      ],
    },
    {
      title: 'Daily Condition Tracker API',
      descriptions: [
        { content: 'Summary: 개인 건강 상태의 체계적인 기록 및 관리를 목표로 하는 RESTful API 서버 개발' },
        {
          content:
            'Key Features:',
        },
        {
          markdownContent:
            '- 명확한 책임 분리를 위해 Presentation, Application, Domain, Infrastructure의 4계층 아키텍처로 설계 및 구현',
        },
        { markdownContent: '- 도메인 로직의 순수성을 보장하고, 비즈니스 규칙을 효과적으로 표현하는 도메인 객체 중심의 개발 원칙 적용' },
        { markdownContent: '- Swagger UI(OpenAPI)를 활용한 API 문서화 자동화 및 PRD, DB 스키마 등 체계적인 프로젝트 문서 관리를 통해 협업 효율성 증대' },
        { content: 'Tech Stack: Java 21, Spring Boot 3, Spring Data JPA, Spring Security, MySQL, Cursur'},
        {
          content: 'https://github.com/jungguji/daily-condition-tracker-api',
          href: 'https://github.com/jungguji/daily-condition-tracker-api',
        },
      ]
    }
  ],
};

export default openSource;
