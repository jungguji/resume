import { Row, Col, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropsWithChildren } from 'react';
import ProfileContact from './contact';
import ProfileImage from './image';
import { EmptyRowCol } from '../common';
import { IProfile } from './IProfile';
import { Style } from '../common/Style';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProfile.Payload;

export const Profile = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const { image, contact, name, notice, basicInfo } = payload;
  return (
    <div className="mt-5">
      <Row>
        <Col md={3} sm={12}>
          <ProfileImage src={image} />
        </Col>
        <Col md={9} sm={12}>
          {createNameArea(name)}
          {basicInfo && createBasicInfoArea(basicInfo)}
          {createProfileContactMap(contact)}
          {createNoticeArea(notice)}
        </Col>
      </Row>
    </div>
  );
}

function createNameArea(name: Payload['name']) {
  return (
    <Row>
      <Col className="text-center text-md-left">
        <h1 style={Style.blue}>
          {name.title} <small>{name.small || ''}</small>
        </h1>
      </Col>
    </Row>
  );
}

function createBasicInfoArea(basicInfo: NonNullable<Payload['basicInfo']>) {
  return (
    <Row className="mt-3">
      <Col>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {basicInfo.map((info, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>
              <strong>{info.label}:</strong> {info.value.split('\n').map((line, lineIndex) => (
                <span key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line.startsWith('http') ? (
                    <a href={line} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
                      {line}
                    </a>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}

function createProfileContactMap(contacts: Payload['contact']) {
  if (!contacts || contacts.length === 0) {
    return null;
  }
  
  return (
    <Row>
      <Col className="pt-3">
        {contacts.map((contact, index) => (
          <ProfileContact key={index.toString()} payload={contact} />
        ))}
      </Col>
    </Row>
  );
}

function createNoticeArea(notice: Payload['notice']) {
  return null;
  // return (
  //   <EmptyRowCol>
  //     <Alert color="secondary" role="alert" className="mt-3">
  //       {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
  //       {notice.title}
  //     </Alert>
  //   </EmptyRowCol>
  // );
}
