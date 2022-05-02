import React from "react";
const Message = ({text}) => {
   
    return (
     <>
     <div>{text.text}</div>
     <div>{text.author}</div>

     </>
    )       
}

export default Message