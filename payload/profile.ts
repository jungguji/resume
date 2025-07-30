import { faCheckCircle, faEnvelope, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBloggerB } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/JGJI_2.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '지중구',
    small: '(Junggu Ji)',
  },
  basicInfo: [
    {
      label: '생년월일',
      value: '1993년 생 (만 31세)',
    },
    {
      label: '군복무',
      value: '육군병장 만기제대, 2013.04~2015.01',
    },
    {
      label: '직전연봉',
      value: '4700 만원',
    },
    {
      label: '희망연봉',
      value: '협의 가능',
    },
    {
      label: '추가정보',
      value: '\nhttps://github.com/jungguji\nhttps://jungguji.github.io/',
    }
  ],
  contact: [],
  notice: {
    title: '문의사항은 Email로 부탁드립니다. 감사합니다.',
    icon: faBell,
  },
};

export default profile;

