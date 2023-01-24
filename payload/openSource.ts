import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: '우리끼리 속닥속닥 (개발중)',
      descriptions: [
        { content: '친한 사람들, 혹은 모임원들 끼리 함께한 추억과 장소를 공유하는 서비스' },
        { content: '인터넷에 있는 불특정 다수가 아닌, 친한친구들끼리 자기가 가봤던 맛집, 장소를 공유할 수 있는 서비스로 아직 개발 진행 중' },
        { content: '계획중인 기능으로는 회원별로 모임을 만들거나, 초대장을 통해 기존 모임에 가입하고, 자신이 가봤던 장소에 대해 별점과 코멘트를 남겨서 해당 모임의 인원들과 공유하고, 모임 일정등도 생성하여 공유 할 수 있도록 계획' },
        { content: 'Github의 project와 issue 기능을 이용해 프로젝트 관리하며 혼자 진행 중' },
        { content: 'Back-end는 Spring boot를 이용하고, Front-end는 Flutter를 고려중' },
        {
          content: 'https://github.com/jungguji/sokdak-sokdak',
          href: 'https://github.com/jungguji/sokdak-sokdak',
        },
      ],
    },
    {
      title: '백준 Java Input code 생성기',
      descriptions: [
        { content: '백준 알고리즘 트레이닝 시 기본적으로 작성해야 하는 Input code를 대신 생성' },
        { content: '알고리즘 문제 풀이 사이트인 백준은 입력값과 결괏값을 직접 입력 출력하여야 하는데 이때 자주 반복되는 입력 조건에 따라 입력 코드를 생성해 주는 서비스' },
        { content: 'Back-end는 Spring boot, Front-end는 Vue.js를 이용해 개발하고 Heroku에 배포하여 서비스' },
        { content: '현재는 Heroku가 무료 서비스를 중지하여 서비스 이용 불가능' },
        {
          content: 'https://github.com/jungguji/backjoon-frame-automatic-generator',
          href: 'https://github.com/jungguji/backjoon-frame-automatic-generator',
        },
      ],
    },
    {
      title: 'Insert query to Java object',
      descriptions: [
        { content: 'Insert query를 입력하면 빌더패턴으로 java object 생성하는 코드를 출력해주는 서비스' },
        { content: '테스트 코드 등 java object를 여러 개 생성해서 테스트해야 하는 경우 매번 코드 작성하기가 귀찮으므로, database에서 data를 insert query 로 dump 후 java object 생성하는 코드로 변경하여 사용하기 위해 개발' },
        { content: '추후 웹 화면 혹은 실행파일로 만들어 release 할 예정' },
        {
          content: 'https://github.com/jungguji/insert-query-to-java-object',
          href: 'https://github.com/jungguji/insert-query-to-java-object',
        },
      ],
    },
    {
      title: '단어장',
      descriptions: [
        { content: '자신이 공부한 단어를 입력하면, 기억을 위한 주기에 맞춰서 시험보게 하는 단어 공부 서비스' },
        { content: 'Spring boot, Hibernate, thymeleaf를 이용해 개발' },
        { content: '단어추가는 화면에서 직접 한 단어씩 입력하거나 업로드 포맷에 맞게 txt 파일을 작성해서 파일업로드 기능을 통해 추가할 수 있음' },
        { content: '유저 마다 당일 시험봐야 하는 단어 검색해서 시험보게 하고 틀린 단어는 자동으로 추가하여 다시 시험볼 수 있도록 함'},
        { content: '오픈소스인 JUI Framework를 활용해 Grid와 Chart 기능 개발' },
        { content: 'AWS EC2 + travis CI를 통한 자동 빌드/배포' },
        { content: '현재는 AWS 프리티어 종료로 서비스 이용 불가능' },
        {
          content: 'https://github.com/jungguji/wordbook',
          href: 'https://github.com/jungguji/wordbook',
        },
      ],
    },
  ],
};

export default openSource;
