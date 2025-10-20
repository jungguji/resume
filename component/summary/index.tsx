import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import Markdown from 'markdown-to-jsx';
import { Style } from '../common/Style';
import { ISummary } from './ISummary';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = ISummary.Payload;

export const Summary = {
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
          <h2 style={Style.blue}>SUMMARY</h2>
        </Col>
        <Col sm={12} md={9}>
          <ul style={{ marginTop: 0, paddingLeft: '1.2rem', listStyleType: 'disc' }}>
            {payload.contents.map((content, index) => (
              <li
                key={index.toString()}
                style={{
                  marginBottom: index === payload.contents.length - 1 ? 0 : '0.3rem',
                  lineHeight: '1.5'
                }}
              >
                <Markdown
                  options={{
                    overrides: {
                      strong: {
                        props: {
                          style: Style.strongText,
                        },
                      },
                    },
                  }}
                >
                  {content}
                </Markdown>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </div>
  );
}
