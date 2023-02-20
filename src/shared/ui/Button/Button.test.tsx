import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('button with text', () => {
    render(<Button theme={ThemeButton.STANDARD}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('button with theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
    screen.debug();
  });
});
