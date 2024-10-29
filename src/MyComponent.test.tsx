import { render, screen } from '@testing-library/react';
import FuncLifeCycle from './funccomps/funclifecylce.jsx'
import { expect, describe, it } from 'vitest';
import React from 'react';

describe('FuncLifeCycle', () => {
  it('renders component with initial text', () => {
    render(<FuncLifeCycle />);
    expect(screen.getByText(/count:0/i)).toBeInTheDocument();
  });

  it('updates counter when clicked', async () => {
    render(<FuncLifeCycle />);
    const button = screen.getByRole('button');
    expect(screen.getByText(/Function component life cycle/i)).toBeInTheDocument();
    await button.click();
    expect(screen.getByText(/count:0/i)).toHaveStyle("color:#10d510");
  });

  it('unmounts properly', () => {
    const { unmount } = render(<FuncLifeCycle />);
    unmount();
    expect(screen.queryByText(/Hello, World/i)).not.toBeInTheDocument();
  });
});
