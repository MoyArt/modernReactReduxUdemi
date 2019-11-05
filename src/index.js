import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Max" commentTime="5:30PM" comment="Aguniguna!!" avatar={faker.image.avatar()}/>
      </ApprovalCard>
      <CommentDetail author="Clau" commentTime="5:34PM" comment="Muy Interesante!" avatar={faker.image.avatar()}/>
      <CommentDetail author="Duck" commentTime="5:55PM" comment="Chaparrooooooo!" avatar={faker.image.avatar()}/>
      <CommentDetail author="MoyArt" commentTime="6:30PM" comment="Bastante Cools!" avatar={faker.image.avatar()}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))