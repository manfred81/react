import { render } from "@testing-library/react";
import ForTest from "../ForTest";

describe('forTest render test', () => {
  it('snapshot test', () => {
      const component = render(<ForTest />);

      expect(component).toMatchSnapshot();
  });
});