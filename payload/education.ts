import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '국가평생교육진흥원 학점은행제',
      subTitle: '컴퓨터공학 전공(학사)',
      startedAt: '2017-10',
      endedAt: '2018-03',
    },
    {
      title: '경민대학교',
      subTitle: '인터넷정보 전공(전문학사)',
      startedAt: '2012-02',
      endedAt: '2017-02',
    },
  ],
};

export default education;
