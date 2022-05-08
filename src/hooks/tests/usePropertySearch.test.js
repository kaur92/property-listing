import { usePropertySearch } from "../usePropertySearch";
import { renderHook, waitFor } from "@testing-library/react";

describe("usePropertySearch tests", () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it("should be loading while fetching", async () => {
    function fetchMock() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            json: () =>
              Promise.resolve([]),
          });
        }, 200)
      );
    }
    jest.spyOn(global, "fetch").mockImplementation(fetchMock);

    const { result } = renderHook(() => usePropertySearch());
    const currentResult = result.current;
    expect(currentResult.isLoading).toEqual(true);
    expect(currentResult.properties).toEqual([]);
    expect(currentResult.error).toBeNull();
    await waitFor(() => {
      expect(result.current).not.toBe(currentResult);
    });
  });

  it("should return properties for successful fetch", async () => {
    const sampleResponse = [
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
    ];
    function fetchMock() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            json: () =>
              Promise.resolve(sampleResponse),
          });
        }, 200)
      );
    }
    jest.spyOn(global, "fetch").mockImplementation(fetchMock);

    const { result } = renderHook(() => usePropertySearch());
    const currentResult = result.current;
    await waitFor(() => {
      expect(result.current).not.toBe(currentResult);
    });
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.properties).toBe(sampleResponse);
    expect(result.current.error).toBeNull();
  });

  it("should return error", async () => {
    function fetchMock() {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve({
            json: () =>
              Promise.reject("error"),
          });
        }, 200)
      );
    }
    jest.spyOn(global, "fetch").mockImplementation(fetchMock);

    const { result } = renderHook(() => usePropertySearch());
    const currentResult = result.current;
    await waitFor(() => {
      expect(result.current).not.toBe(currentResult);
    });
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.properties).toEqual([]);
    expect(result.current.error).not.toBeNull();
  });
});
