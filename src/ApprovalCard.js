import React from 'react';

const ApprovalCard = props => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="ui button green">Accept</button>
          <button className="ui button red">Decline</button>
        </div>
      </div>
    </div>  
  );
}

export default ApprovalCard;