import renderer from "react-test-renderer";
import PropertyCard from "../index";

const testProperty = {
  id: "bb32dc153a844c01a051ab48fa543c6f",
  address: "Gloucester Road, London SW7 4RT",
  image:
    "https://lid.zoocdn.com/u/1024/768/2b3d21c22e792b3093479bed79b84b931e4cc062.jpg:p",
  askingPrice: 50000,
  status: true,
  numberOfBedrooms: 1,
  propertyType: "flat",
};

describe("<PropertyCard /> tests", () => {
  it("renders correctly", () => {
    const cardComponent = renderer
      .create(<PropertyCard property={testProperty} />)
      .toJSON();
    expect(cardComponent).toMatchSnapshot();
  });
});
