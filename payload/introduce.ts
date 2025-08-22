import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요, 7년차 백엔드 개발자 지중구입니다. 수만 명이 동시에 접속하는 평가 환경일수록 서비스의 안정성과 데이터 정합성이 가장 중요하다고 생각합니다. 저는 <strong style="font-weight: bold;">대규모 트래픽 병목을 해결하고 서비스의 신뢰를 지켜낸</strong> 두 가지 핵심 경험을 통해 `평가솔루션팀`의 기술적 기반을 다지는 데 기여하고 싶습니다.',
    '<br />',
    '<br />',
    '첫째, 점진적 아키텍처 개선을 통해 <strong style="font-weight: bold;">챗봇 응답 속도를 5분에서 3초로 단축</strong>했습니다.',
    '사용자 급증으로 AI 챗봇의 응답이 5분이상 지연되는 문제가 발생했을 때, 서비스 중단 없이 3단계에 걸쳐 아키텍처 개선을 주도했습니다. 최종적으로 AWS SQS 기반의 비동기 구조를 도입하여 <strong style="font-weight: bold;">응답 속도를 99% 단축</strong>시켰고, <strong style="font-weight: bold;">피크타임 분당 6,000건</strong>의 요청을 안정적으로 처리하는 시스템을 구축했습니다.',
    '<br />',
    '<br />',
    '둘째, <strong style="font-weight: bold;">Redis 분산 락으로 데이터 정합성을 100% 확보</strong>하고 팀의 기술 역량 강화에 기여했습니다.',
    '분산 서버 환경에서 동시 결제 요청으로 데이터가 유실되는(Last update) 치명적 오류를 Redis 분산 락으로 해결하여 <strong style="font-weight: bold;">데이터 불일치 발생률 0건</strong>을 달성했습니다. 이 해결 과정을 기술 세미나와 블로그로 <a href="https://jungguji.github.io/2024/12/24/%EB%8F%99%EC%8B%9C%EC%84%B1-%EC%9D%B4%EC%8A%88%EC%99%80-Redis-Redisson-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%ED%95%B4%EA%B2%B0%EB%B0%A9%EB%B2%95/" target="_blank" rel="noopener noreferrer">공유</a>하여 동료들이 분산 환경의 동시성 문제를 함께 해결할 수 있도록 도우며 팀의 성장을 이끌었습니다.',
    '<br />',
    '<br />',
    '<strong style="font-weight: bold;">대규모 트래픽 처리와 데이터 무결성 확보</strong>는 저의 가장 큰 강점입니다. 저의 경험을 바탕으로 `프로그래머스`의 평가 서비스가 어떤 상황에서도 흔들리지 않는, 가장 신뢰받는 서비스로 성장하는 데 기여하겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
