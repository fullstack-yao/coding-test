// import { render, screen } from '@testing-library/react';
// import TopBar from './index';

// test('renders sharks button', () => {
//   render(<TopBar />);
//   const element = screen.getByText(/sharks/i);
//   expect(element).toBeInTheDocument();
// });

// test('renders cats button', () => {
//   render(<TopBar />);
//   const element = screen.getByText(/cats/i);
//   expect(element).toBeInTheDocument();
// });
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TopBar from './index';

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with cats and sharks buttons", () => {
  act(() => {
    render(<TopBar />, container);
  });
  expect(container.textContent).toBe("SharksCats");
});
