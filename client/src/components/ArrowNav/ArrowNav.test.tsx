import { render, screen } from '@testing-library/react';
import ArrowNav from './index';

test('renders sharks button', () => {
  render(
    <ArrowNav
        direction='left'
        index={0}
        photoNum={1}
        setIndex={() => {}}
        setSlideDirection={() => {}}
        setSlideIn={() => {}}
    />);
  const element = screen.getByRole('button');
  expect(element).toBeInTheDocument();
});
