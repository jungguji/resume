import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: '단어장',
      descriptions: [
        { content: '자신이 공부한 단어를 입력받아 저장하고 망각곡선 주기에 맞춰 시험보게 함' },
        { content: 'Spring boot, Hibernate, thymeleaf를 이용해 개발' },
        { content: '단어 저장은 view에서 key-in 하거나 txt 파일 업로드 기능을 통해 저장' },
        {
          content:
            '유저 마다 당일 시험봐야 하는 단어 검색해서 시험보게 하고 틀린 단어는 새로 insert',
        },
        { content: '오픈소스인 JUI Framework를 활용해 Grid와 Chart 기능 개발' },
        { content: 'AWS EC2 + travis CI를 통한 자동 빌드/배포' },
        { content: 'Owner & Maintainer' },
        { content: 'Spring boot, Hibernate, AWS, Travis CI' },
        {
          content: 'http://ec2-18-191-18-43.us-east-2.compute.amazonaws.com/',
          href: 'http://ec2-18-191-18-43.us-east-2.compute.amazonaws.com/',
        },
        {
          content: 'https://github.com/jungguji/wordbook',
          href: 'https://github.com/jungguji/wordbook',
        },
      ],
    },
    {
      title: 'Give me a mask',
      descriptions: [
        { content: '주소를 입력받고 지도에 주변 공적 마스크 판매처 표시' },
        { content: '카카오 우편 서비스를 활용해 주소 검색 서비스 제공' },
        { content: '심평원에서 제공하는 데이터를 RESTful API를 이용해 가져옴' },
        { content: '데이터를 카카오 MAP API를 이용해 가까운 순으로 Map에 마킹해서 보여줌' },
        { content: 'Owner & Maintainer' },
        { content: 'Spring boot, RESTful-API, Kakao-API' },
        {
          content: 'https://give-me-a-mask.herokuapp.com/',
          href: 'https://give-me-a-mask.herokuapp.com/',
        },
        {
          content: 'https://github.com/jungguji/give-me-a-mask',
          href: 'https://github.com/jungguji/give-me-a-mask',
        },
      ],
    },
  ],
};

export default openSource;
