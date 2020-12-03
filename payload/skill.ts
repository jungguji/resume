import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring-Boot',
      level: 3,
    },
    {
      title: 'Mybatis',
      level: 2,
    },
    {
      title: 'Hibernate',
      level: 3,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 3,
    },
    {
      title: 'MariaDB',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'MSSQL',
      level: 2,
    },
    {
      title: 'PostgreSQL',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
    {
      title: 'Thymeleaf',
      level: 1,
    },
    {
      title: 'jQuery',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
  ],
};

const cloud: ISkill.Skill = {
  category: 'Cloud',
  items: [
    {
      title: 'Heroku',
      level: 1,
    },
    {
      title: 'AWS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Redmine',
    },
    {
      title: 'SVN',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Travis CI',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, cloud, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
