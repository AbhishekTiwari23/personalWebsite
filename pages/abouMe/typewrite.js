import React, { useEffect, useRef, useState } from 'react';

const Typewriter = () => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const textArray = ['Abhishek', 'fun', 'a journey', 'LIFE'];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    function type() {
      const currentText = textArray[textIndex];
      if (text.length < currentText.length) {
        setText(currentText.substring(0, text.length + 1));
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (text.length > 0) {
        setText(text.substring(0, text.length - 1));
        setTimeout(erase, erasingDelay);
      } else {
        setTextIndex((textIndex + 1) % textArray.length);
        setTimeout(type, typingDelay);
      }
    }

    type();
  }, [text, textIndex]);

  return (
    <div className="type-wrap">
      <div className="type">
        I am <span className="type-text" ref={textRef}>{text}</span> <span className="cursor">&nbsp;</span>
      </div>
    </div>
  );
};

export default Typewriter;
