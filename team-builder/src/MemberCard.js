import React from 'react';
import ReactDOM from 'react-dom';

const MemberCard = (props) => {
    console.log("Props are", props);
    return(
      <div>
          <h2>List of Team Members</h2>
          {/* {props.form.map((item) => (
            <div>
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.role}</p>
            </div>
        ))} */}
      </div>  
    );
};

export default MemberCard;