

const MessageList = ({massages}) => {
  
  return <div>
        {massages.map((element, index) => (
        <div key={index}>
          <p>{element.text}</p>
          <sup>{element.author}</sup>
        </div>       
      ))} 
    </div>;
};

export default MessageList;