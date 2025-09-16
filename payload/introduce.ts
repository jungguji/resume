import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '"평범하고 적당히만 추구해서는 절대 높은 곳에 있는 목적에 가까워질 수 없다"는 `강남언니`의 핵심가치는, 지난 7년간 <strong style="font-weight: bold;">기술을 통해 비즈니스의 한계를 극복해 온 저의 개발 신념</strong>과 정확히 일치합니다. 기술을 위한 기술이 아닌, 고객의 문제를 해결하고 비즈니스를 성장시키는 위대한 성취를 동료들과 함께 만들어가고 싶어 지원하게 되었습니다.',
    '<br /><br />',
    '저는 "높은 기준"을 말로만 외치는 것이 아니라, <strong style="font-weight: bold;">구체적인 결과로 증명</strong>해왔습니다. 5분이 넘어가던 채팅 응답 속도를 <strong style="font-weight: bold;">3초 이내로 단축</strong>하고, 5시간 걸리던 19만 건의 푸시 발송을 <strong style="font-weight: bold;">30분 만에 끝내는</strong> 등, 사용자가 체감할 수 있는 극적인 성능 개선을 이끌었습니다. 문제의 본질을 파고들어 아키텍처의 한계를 근본적으로 해결했던 경험은, `강남언니`가 더 큰 성장을 이뤄내는 과정에서 마주할 기술적 난관들을 해결하는 튼튼한 기반이 될 것입니다.',
    '<br /><br />',
    '저는 "극도의 솔직함과 투명함"이 팀을 성장시키는 가장 강력한 무기라고 믿습니다. Redis 분산 락을 이용해 동시성 문제를 해결했던 복잡한 과정을 숨기지 않고, <strong style="font-weight: bold;">기술 블로그와 사내 세미나를 통해 의도와 맥락, 과정까지 투명하게 공유</strong>했습니다. 이처럼 함께 배우고 성장하는 문화 속에서 "소신 있게 반대하고, 결정되면 전적으로 헌신"했던 경험들을 바탕으로, `강남언니`의 동료들과 가장 빠르고 효율적으로 위대한 결과물을 만들어 낼 준비가 되어 있습니다.',
    '<br /><br />',
    '저에게 `강남언니`는 단순히 이직할 회사가 아니라, 저의 일하는 방식과 성장 철학을 마음껏 펼치고 <strong style="font-weight: bold;">동료들과 함께 "위대함"에 도전할 수 있는 최고의 무대</strong>입니다. 지금까지 쌓아온 경험들을 바탕으로 `강남언니`의 기술적 성장에 기여하고, 저 또한 동료들에게 좋은 자극을 주며 함께 성장하고 싶습니다.',
    '<br /><br />',
  ],
  sign: 'Junggu Ji',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
