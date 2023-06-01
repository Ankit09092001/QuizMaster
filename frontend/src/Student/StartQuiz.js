import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCard alignment='center'>
      <MDBCardHeader>QuizMaster</MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>Take the Quiz</MDBCardTitle>
        <MDBCardText>You can attend the quiz only once.</MDBCardText>
        <MDBBtn href='/studentdetails'>Start</MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
  );
}