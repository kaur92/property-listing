import renderer from "react-test-renderer";
import Header from "../index";

describe("<Header /> tests", () => {
  it("renders correctly", () => {
    const cardComponent = renderer.create(<Header />).toJSON();
    expect(cardComponent).toMatchSnapshot();
  });
});
