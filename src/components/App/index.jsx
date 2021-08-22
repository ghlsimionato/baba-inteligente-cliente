import React, { useEffect, useState } from "react";

import webSocketClient from "../../api/webSocketClient";

const App = () => {
  // we use this state to avoid interacting with the socket while
  // the connection is still being established
  const [isSocketEstablished, setIsSocketEstablished] = useState(false);
  // state used to store input value
  const [inputTextValue, setInputTextValue] = useState('');

  // in this case, useEffect will trigger twice, once when the component is mounted on the DOM
  // and again when isSocketEstablished changes value
  useEffect(() => {
    if (!isSocketEstablished) {
      webSocketClient.onopen = () => {
        console.log('Connection with BE server established');

        setIsSocketEstablished(true);
      };

      webSocketClient.onmessage = (message) => {
        console.log(`Message received from BE server, message = ${message.data}`);
      };
    } else {
      // connection is established, okay to send messages
      webSocketClient.send('Hello from client to BE server');
    }
  }, [isSocketEstablished]); // we pass isSocketEstablished to the useEffect dependency array so it triggers when the value changes

  const onClick = () => {
    console.log('Sending message to server');
    webSocketClient.send(inputTextValue);
    setInputTextValue(''); // reset the input value
  };

  const onInputChange = (event) => {
    const { target } = event;
    const { value } = target;
    setInputTextValue(value);
  };

  return (
    <div>
      <label htmlFor="message-input">Type message to send to server: </label>
      <input type="text" id="message-input" value={inputTextValue} onChange={onInputChange} />
      <button type="button" onClick={onClick}>Send Message</button>
    </div>
  );
};

export default App;
