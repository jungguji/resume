import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
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
  contact: [
    {
      title: 'junggu.ji.dev@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/jungguji',
      link: 'https://github.com/jungguji',
      icon: faGithub,
    },
    {
      title: 'https://jungguji.github.io/',
      link: 'https://jungguji.github.io/',
      icon: faBloggerB,
    },
  ],
  notice: {
    title: '문의사항은 Email로 부탁드립니다. 감사합니다.',
    icon: faBell,
  },
};

export default profile;
