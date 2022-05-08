import renderer from "react-test-renderer";
import ErrorMessage from "../index";

describe("<ErrorMessage /> tests", () => {
  it("renders correctly", () => {
    const cardComponent = renderer.create(<ErrorMessage />).toJSON();
    expect(cardComponent).toMatchSnapshot();
  });
});
