import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '7년차 백엔드 개발자로서, 기술적 도전을 통해 <strong style="font-weight: bold;">비즈니스의 연속성을 확보</strong>하고 성장을 이끄는 데 가장 큰 가치를 둡니다. \'일하는 방식을 혁신한다\'는 <code>크몽</code>의 비전에 공감하며, 저의 경험이 <code>크몽</code>의 기술적 안정성과 서비스 확장의 <strong style="font-weight: bold;">핵심 동력</strong>이 될 것이라 확신합니다.',
    '<br />',
    '<br />',
    '첫째, <strong style="font-weight: bold;">레거시 시스템을 성공적으로 전환</strong>한 경험으로 <code>크몽</code>의 기술 혁신을 이끌겠습니다.',
    '<br />',
    '5분 이상 지연되던 동기 방식의 시스템을 AWS SQS 기반 비동기 구조로 점진적으로 전환하여, 응답 속도를 <strong style="font-weight: bold;">99% 단축</strong>하고 안정성을 확보한 경험이 있습니다. 기존 시스템의 병목 지점을 분석하고 안정적으로 아키텍처를 개선했던 이 경험은, <code>크몽</code>이 현재 마주한 PHP 서비스를 마이크로서비스로 전환하는 과제를 성공적으로 수행하는 데 <strong style="font-weight: bold;">핵심적인 역량</strong>이 될 것입니다.',
    '<br />',
    '<br />',
    '둘째, E-Commerce 플랫폼의 핵심인 <strong style="font-weight: bold;">데이터 무결성과 안정성</strong>을 보장하겠습니다.',
    '<br />',
    '여러 서버에서 동시 결제 요청 시 발생하던 치명적인 데이터 불일치 문제를 Redis 분산 락으로 해결하여 <strong style="font-weight: bold;">데이터 정합성을 100% 확보</strong>하고, 부하 테스트로 이를 검증했습니다. 전문가와 기업을 연결하는 <code>크몽</code> 플랫폼에서 가장 중요한 <strong style="font-weight: bold;">\'신뢰\'</strong>를 기술적으로 뒷받침하며, 모든 사용자가 믿고 거래할 수 있는 안정적인 서비스를 만들겠습니다.',
    '<br />',
    '<br />',
    '저의 시스템 아키텍처 개선 능력과 비즈니스 문제 해결 경험을 바탕으로 <code>크몽</code>의 기술 과제를 해결하고, 동료들과 지식을 공유하며 함께 성장하는 <strong style="font-weight: bold;">최고의 동료</strong>가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
