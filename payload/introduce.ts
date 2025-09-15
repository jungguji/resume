import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년간 Java와 Spring 기반 백엔드 개발자로서, 기술적 도전을 통해 비즈니스의 연속성을 확보하고 성장을 이끄는 데 기여해왔습니다. K-Culture의 새로운 기준을 제시하는 <code>SM C&C</code>의 <strong style="font-weight: bold;">전사 공용 IT 웹 서비스</strong>를 책임질 전문가를 찾는다는 공고를 보고, 저의 경험과 역량이 회사의 기술적 자산이 될 것이라 확신하여 지원합니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">첫째, 복잡한 시스템의 병목을 분석하고 아키텍처를 설계하여 대규모 트래픽을 안정적으로 처리할 수 있습니다.</strong> 실제 운영 환경에서 동기 방식의 아키텍처가 가진 한계를 분석하고, AWS SQS 기반의 비동기 구조로 점진적으로 전환하여 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시킨 경험이 있습니다. 이는 <code>SM C&C</code>의 다양한 서비스들에서 발생하는 트래픽을 안정적으로 처리하고, 어떤 상황에서도 최상의 사용자 경험을 제공하는 시스템의 기반이 될 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">둘째, 여러 데이터베이스 환경에서 데이터 정합성을 보장하는 시스템을 구축하고 운영한 경험이 풍부합니다.</strong> <strong style="font-weight: bold;">19만 명 대상의 푸시 발송 시간을 5시간에서 30분으로 단축</strong>시킨 경험, Redis 분산 락을 적용하여 동시성 이슈를 해결한 경험 등은 Oracle, MySQL 등 다양한 데이터베이스를 사용하는 <code>SM C&C</code>의 환경에서 데이터의 무결성을 지키는 데 핵심적인 역할을 할 것입니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">셋째, 동료와의 협업을 통해 팀 전체의 기술 역량을 강화하는 데 기여합니다.</strong> 여러 프로젝트에 중복된 코드를 공통 모듈로 설계하고 Nexus로 공유하여 <strong style="font-weight: bold;">팀의 개발 생산성을 50% 이상 향상</strong>시킨 경험이 있습니다. 저의 문제 해결 경험을 나누고 동료와 함께 성장하는 가치를 중요하게 생각하며, <code>SM C&C</code>의 개발 문화에 긍정적인 시너지를 더하고 싶습니다.',
    '<br />',
    '<br />',
    '저의 문제 해결 능력과 시스템 설계 역량을 바탕으로 <code>SM C&C</code>의 다양한 비즈니스를 안정적으로 뒷받침하고, K-Culture를 선도하는 기술적 기반을 함께 만들어가겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
