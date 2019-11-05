import React from 'react';

const ApprovalCard = () => {
  return (
    <div className="ui card">
      <div className="content">Some dummy text</div>
      <div className="extra content">
        <div className="ui two buttons">
          <button className="button green">Accept</button>
          <button className="button red">Decline</button>
        </div>
      </div>
    </div>  
  );
}

export default ApprovalCard;