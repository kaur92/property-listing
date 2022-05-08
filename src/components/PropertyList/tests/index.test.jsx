import renderer from "react-test-renderer";
import PropertyList from "../index";
import * as hooks from "../../../hooks/usePropertySearch";
import ErrorMessage from "../../ErrorMessage";

describe("<PropertyList /> tests", () => {
  describe("Empty property list", () => {
    it("should render correctly", async () => {
      jest.spyOn(hooks, "usePropertySearch").mockImplementation(() => ({
        properties: [],
        loading: false,
        serverError: null,
      }));

      const listComponent = renderer.create(<PropertyList />).toJSON();
      expect(listComponent).toMatchSnapshot();
    });
  });

  describe("Loading true", () => {
    it("should render correctly", async () => {
      jest.spyOn(hooks, "usePropertySearch").mockImplementation(() => ({
        properties: [],
        loading: true,
        serverError: null,
      }));

      const listComponent = renderer.create(<PropertyList />).toJSON();
      expect(listComponent).toMatchSnapshot();
    });
  });

  describe("Return error", () => {
    it("should render correctly", async () => {
      jest.spyOn(hooks, "usePropertySearch").mockImplementation(() => ({
        properties: [],
        loading: true,
        serverError: "error",
      }));

      const listComponent = renderer.create(<PropertyList />).toJSON();
      expect(listComponent).toMatchSnapshot();
    });
  });

  describe("Two properties in list", () => {
    it("should render correctly", async () => {
      jest.spyOn(hooks, "usePropertySearch").mockImplementation(() => ({
        properties: [
          {
            id: "bb32dc153a844c01a051ab48fa543c6f",
            address: "Gloucester Road, London SW7 4RT",
            image:
              "https://lid.zoocdn.com/u/1024/768/2b3d21c22e792b3093479bed79b84b931e4cc062.jpg:p",
            askingPrice: 50000,
            status: true,
            numberOfBedrooms: 1,
            propertyType: "flat",
          },
          {
            id: "bb32dc153a844c01a051ab48fa544r9y",
            address: "Princes Gate, London SW7 9FT",
            image:
              "https://lid.zoocdn.com/u/1024/768/c0ecdf355a66d5c571fe35773084cb7a64dc2907.jpg:p",
            askingPrice: 24750000,
            status: true,
            numberOfBedrooms: 7,
            propertyType: "flat",
          },
        ],
        loading: false,
        serverError: null,
      }));

      const listComponent = renderer.create(<PropertyList />).toJSON();
      expect(listComponent).toMatchSnapshot();
    });
  });
});
