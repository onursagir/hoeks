import * as React from 'react';
import useAbortableFetch from '../../src';

const JsonPlaceHolder: React.FunctionComponent = () => {
  const [message, setMessage] = React.useState('');

  const [fetch, abort] = useAbortableFetch();
  const [url, setUrl] = React.useState('https://reqres.in/api/users');

  const onUrlChange = React.useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setUrl(e.target.value);
    },
    [setUrl]
  );

  const call = React.useCallback(async () => {
    try {
      const res = await fetch(url, {});
      const json = await res.json();
      setMessage(JSON.stringify(json));
    } catch (e) {
      setMessage(e.message);
    }
  }, [url]);

  return (
    <>
      <div id="message">{message}</div>
      <input id="url" value={url} onChange={onUrlChange} size={100} />
      <div>
        <button id="call-btn" onClick={call}>
          call
        </button>
        <button id="abort-btn" onClick={abort}>
          abort
        </button>
      </div>
    </>
  );
};

export default JsonPlaceHolder;
