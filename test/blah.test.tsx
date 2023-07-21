// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { AnilistProvider } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const provider = AnilistProvider({});
    expect(provider).toBe({});
    // const div = document.createElement('div');
    // ReactDOM.render(<Thing />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
});
