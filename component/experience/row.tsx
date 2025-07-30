import { DateTime } from 'luxon';
import { PropsWithChildren, Fragment } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item.startedAt, item.endedAt)}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li key={descIndex.toString()}>{parseMarkdownText(description)}</li>
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function parseMarkdownText(text: string) {
  // **text** 형태의 볼드 마크다운을 파싱
  const boldRegex = /\*\*(.*?)\*\*/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    // 매치 이전의 일반 텍스트 추가
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    
    // 볼드 텍스트 추가
    parts.push(<strong key={`bold-${match.index}`} style={{ fontWeight: 'bold' }}>{match[1]}</strong>);
    
    lastIndex = boldRegex.lastIndex;
  }

  // 마지막 남은 텍스트 추가
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 && typeof parts[0] === 'string' ? parts[0] : <Fragment>{parts}</Fragment>;
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(startedAtString: string, endedAtString?: string) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(startedAtString, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!endedAtString) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
      };
    }

    const _endedAt = DateTime.fromFormat(endedAtString, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
    </Row>
  );
}
