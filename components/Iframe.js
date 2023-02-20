import React, { useState, useRef, useEffect } from 'react';

const Iframe = ({ src, width, height, allowFullScreen, frameBorder }) => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef();

  const handleLoad = () => {
    setLoading(false);
  };

  const handleMessage = event => {
    if (event.origin !== window.location.origin) {
      return;
    }
    const message = event.data;
    // handle the message received from the iframe
  };

  useEffect(() => {
    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <iframe
        ref={iframeRef}
        title="iframe"
        src={src}
        width={width}
        height={height}
        onLoad={handleLoad}
        allowFullScreen={allowFullScreen}
        frameBorder={frameBorder}
      />
    </>
  );
};

Iframe.defaultProps = {
  width: '100%',
  height: '300px',
  allowFullScreen: false,
  frameBorder: 0
};

export default Iframe;
