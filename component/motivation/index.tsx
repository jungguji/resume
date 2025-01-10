import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx'; // Markdown-to-JSX 추가
import { Style } from '../common/Style';
import { IMotivation } from './IMotivation';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IMotivation.Payload;

export const Motivation = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {

  return (
    <div className="mt-5">
      <Row>
        <Col sm={12} md={3}>
          <h2 style={Style.blue}>MOTIVATION</h2>
        </Col>
        <Col sm={12} md={9}>
          {payload.contents.map((content, index) => (
            <span key={index.toString()}>
              <Markdown>{content}</Markdown>
            </span>
          ))}
        </Col>
      </Row>
    </div>
  );
}
