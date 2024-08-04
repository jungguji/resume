import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'Spring / Spring Boot',
    },
    {
      title: 'MySQL, MariaDB / Hibernate / Querydsl',
    },
    {
      title: 'Junit4 / 5',
    },
    {
      title: 'Maven, Gradle',
    },
  ],
};

const devOps: ISkill.Skill = {
  category: 'DevOps',
  items: [
    {
      title: 'AWS EC2',
    },
    {
      title: 'AWS RDS',
    },
    {
      title: 'AWS S3',
    },
    {
      title: 'Linux Ubuntu',
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Git / Github / Bitbucket',
    },
    {
      title: 'Intelli J',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, devOps, etc],
};

export default skill;
