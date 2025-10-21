import { ICommon } from '../common/ICommon';

export declare namespace ISummary {
  /**
   * ### Sample Rendering
   *
   * Summary section with bullet points highlighting key achievements
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/summary.ts
   */
  export interface Payload extends ICommon.Payload {
    /**
     * ### 요약 제목 (선택)
     *
     * @description bullet points 위에 표시되는 부제목
     */
    subTitle?: string;

    /**
     * ### 요약 내용
     *
     * @description `string` 배열이다. 요소 하나가 하나의 `<li>` 태그가 된다.
     */
    contents: string[];
  }
}
