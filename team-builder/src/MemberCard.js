import React from 'react';

const MemberCard = props => {
    console.log("Props are", props);
    return (
      <div className = "App-header" >
        <h2>List of Team Members</h2>
        {props.MemberCardattr.map(item => (
          <div className = "card" key = {item.id}> 
          <h2>{item.name}</h2>
          <p>{item.email}</p>
          <p>{item.role}</p>
      </div>
      ))} 
      </div>  
    );
};

export default MemberCard;