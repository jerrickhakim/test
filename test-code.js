// Test file for parseFileAST

import { useEffect } from 'react';
export { TestComponent };

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }
}

function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

export function TestComponent() {
  const { count, setCount } = useCounter();
  return <div>{count}</div>;
}

const config = {
  name: 'test',
  version: '1.0.0'
};

interface ITest {
  name: string;
  id: number;
}
