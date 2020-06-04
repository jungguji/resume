import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    { content: '(2020. 05. 30) Spring Controller Junit으로 Test하기 ',
      href: 'https://jungguji.github.io/2020/05/30/Spring-Controller-Junit-Test/',
    },
    {
      content: '(2020. 05. 05) Ajax http status 415 Unsupported Media Type',
      href: 'https://jungguji.github.io/2020/05/05/ajax-content-type-error/',
    },
    {
      content: '(2020. 04. 15) Spring boot + thymeleaf custom error page 적용',
      href: 'https://jungguji.github.io/2020/04/15/custom-error-page/',
    },
  ],
};

export default article;
