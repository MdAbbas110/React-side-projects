//* Why to choose react and how react is fast (Dff algo Ui sync)
//  Why react app is fast
//* react useState use Effect and

import { useState } from 'react';

const Study = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(5)}>Count: {count}</button>
    </div>
  );
};

export default Study;
