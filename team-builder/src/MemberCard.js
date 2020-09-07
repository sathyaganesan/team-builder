import React from 'react';

const MemberCard = (props) => {
    console.log("Props are", props);
    // const {form} = props;
    return(
      <div>
          <h2>List of Team Members</h2>
          {/* {props.form.map(item => {
               return <div key = {item.id}> 
                <h2>{item.name}</h2>
                <p>{item.email}</p>
                <p>{item.role}</p>
            </div>
        })}  */}
      </div>  
    );
};

export default MemberCard;