import favicon from '../asset/favicon.ico';
import previewImage from '../asset/JGJI_2.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '지중구 이력서';
const description = '';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: '증명 사진',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Jung gu',
        lastName: 'Ji',
        username: 'junggu.ji.dev',
        gender: 'male',
      },
    },
  },
};
