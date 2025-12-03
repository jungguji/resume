import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong style="font-weight: bold;">7년차 백엔드 개발자</strong>로서, 복잡한 기술 문제를 해결하여 시스템의 효율성을 극대화하고 데이터의 절대적인 무결성을 지키는 데 집중해왔습니다. 특히 <strong style="font-weight: bold;">대규모 트래픽을 감당하는 비동기 아키텍처 설계 역량</strong>과 <strong style="font-weight: bold;">분산 환경에서 트랜잭션 정합성을 보장</strong>했던 저의 두 가지 핵심 경험은, \'가장 안전하고 혁신적인 거래소\'를 지향하는 `코인원`의 기술적 과제를 해결하는 데 직접적으로 기여할 수 있다고 확신합니다.',
    '<br />',
    '<br />',
    '첫째, 기존 시스템의 구조적 한계를 분석하고 대규모 트래픽을 안정적으로 처리할 수 있는 아키텍처로 고도화한 경험이 있습니다.',
    '이전 프로젝트에서 동기 블로킹 방식의 구조적 한계로 인한 병목 현상을 해결하기 위해, <strong style="font-weight: bold;">AWS SQS 기반의 비동기 아키텍처</strong>로 전환을 주도했습니다. 이를 통해 시스템 결합도를 낮추고 <strong style="font-weight: bold;">분당 6,000건 이상의 요청을 지연 없이 처리</strong>하며, 트래픽 폭주 상황에서도 유연한 확장성(Scalability)을 확보했습니다. 이러한 경험은 실시간 시세 변동과 급격한 거래량 증가가 빈번한 `코인원`의 거래/체결 시스템이 어떠한 상황에서도 지연 없이 안정적으로 운영되도록 하는 데 기여할 것입니다.',
    '<br />',
    '<br />',
    '둘째, 분산 환경의 동시성 이슈를 완벽하게 제어하여 자산 데이터의 정합성을 100% 보장한 경험이 있습니다.',
    '신규 유료 재화 시스템 구축 당시, 분산된 서버 환경에서 발생할 수 있는 경쟁 상태(Race Condition)를 제어하기 위해 <strong style="font-weight: bold;">Redis로 Distributed Lock(Redisson)</strong>을 도입하여 임계 영역을 관리했습니다. 부하 테스트를 통해 <strong style="font-weight: bold;">데이터 불일치 \'0건\'을 달성</strong>하며, 금전적 가치가 있는 데이터의 무결성을 입증했습니다. <strong style="font-weight: bold;">11년 연속 보안 무사고</strong>를 자랑하는 `코인원`에서, 회원 자산과 직결되는 입출금 및 거래 도메인의 신뢰성을 유지하고 고객의 소중한 자산을 안전하게 보호하는 데 필수적인 역량이라 자부합니다.',
    '<br />',
    '<br />',
    '견고한 아키텍처 설계 역량과 데이터 무결성에 대한 타협 없는 태도를 바탕으로, `코인원`의 백엔드 Cell에서 회원, 거래, 입출금 등 핵심 도메인의 기술적 깊이를 더하는 전문가가 되겠습니다.',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
