import {Nullish, render} from '@testing-library/react';

import {App} from './App';

describe('App', () => {
  it('renders hot reload explanation', async () => {
    const {getByText} = render(<App />);

    expect(
      getByText((_, element) => {
        const hasText = (node: Nullish<Element>): boolean =>
          node?.textContent === 'Edit src/App.tsx and save to reload.';
        const nodeHasText = hasText(element);
        const childrenDoNotHaveText = Array.from(element?.children ?? []).every(
          (child) => !hasText(child)
        );

        return nodeHasText && childrenDoNotHaveText;
      })
    ).toBeInTheDocument();
  });
});
