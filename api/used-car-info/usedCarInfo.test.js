/* eslint-disable import/first */
jest.mock("../utils/setup.js", () => ({
  SentryNode: {
    logger: {
      error: jest.fn(),
      info: jest.fn(),
      warn: jest.fn(),
    },
    flush: jest.fn().mockResolvedValue(true),
  },
}));

import { getUsedCarImages } from "../utils/usedCarImagesGetter.js";
import { getUsedCarData } from "../utils/usedCarsDataGetter.js";
import { 
  COMFORT_AND_INTERIOR_TABLE,
  EMISSIONS_AND_CONSUMPTION_TABLE,
  ENGINE_AND_PERFORMANCE_TABLE,
  EXTERIOR_TABLE,
} from "./const.js";
import handler from "./usedCarInfo.js";
import { SentryNode } from "../utils/setup.js";

// Mock the Supabase client
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      select: jest.fn().mockResolvedValue({ data: [], error: null }),
    })),
  })),
}));

// Mock the data retrieval functions
jest.mock('../utils/usedCarsDataGetter.js', () => ({
  getUsedCarData: jest.fn(),
}));
jest.mock('../utils/usedCarImagesGetter.js', () => ({
  getUsedCarImages: jest.fn(),
}));

/**
 * Test suite for the handler function in usedCarInfo.js. 
 * This suite includes:
 * 1. A test for successful retrieval of used car info, ensuring that 
 *   the correct data is returned and the correct functions are called.
 * 2. A test for error handling, ensuring that errors are logged with 
 *   Sentry and the correct error response is returned.
 * 3. A test for handling missing ID in the request, ensuring that the 
 *   handler returns an empty used car info object without throwing an error.
 * 4. A test for partial data retrieval, ensuring that the handler correctly 
 *   merges available data and returns it without throwing an error.
 * 5. A test for no images found, ensuring that the handler returns an empty 
 *   images array without throwing an error.
 * 6. A test for failure of getUsedCarImages, ensuring that the handler handles
 *   the error gracefully and returns the available data with an empty images array.
 * 7. A test for all tables returning empty, ensuring that the handler returns an empty
 *   used car info object with an empty images array without throwing an error.
 */
describe("handler", () => {

  // Define behavior after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  /**
   * CASE 1: SUCCESSFUL RETRIEVAL OF USED CAR INFO
   * Given a used car ID, the handler should:
   * - Call getUsedCarData for each table with the correct ID.
   * - Call getUsedCarImages with the correct ID.
   * - Return a response with status 200 and a JSON object containing the combined
   *   used car info and images as expected.
   */
  it("should return used car info and status 200 if successful", async () => {

    // Define the used car ID
    const id = "12";

    // Mock the data retrieval functions to return sample data
    getUsedCarData
      .mockResolvedValueOnce({ 
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
      })
      .mockResolvedValueOnce({ 
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
       })
      .mockResolvedValueOnce({
        doors: 5,
        external_color: "Black",
        bodywork: "Van"
      })
      .mockResolvedValueOnce({
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
      });
    getUsedCarImages.mockResolvedValueOnce([
      "image1",
      "image2",
    ]);

    // Mock the response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Call the handler function with the mocked 
    // request and response
    await handler({ query: { id } }, res);

    // Assertions about the calls to the data retrieval functions
    expect(getUsedCarData).toHaveBeenCalledWith(ENGINE_AND_PERFORMANCE_TABLE, id);
    expect(getUsedCarData).toHaveBeenCalledWith(EMISSIONS_AND_CONSUMPTION_TABLE, id);
    expect(getUsedCarData).toHaveBeenCalledWith(EXTERIOR_TABLE, id);
    expect(getUsedCarData).toHaveBeenCalledWith(COMFORT_AND_INTERIOR_TABLE, id);
    expect(getUsedCarImages).toHaveBeenCalledWith(id);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      used_car_info: {
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
        doors: 5,
        external_color: "Black",
        bodywork: "Van",
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
        images: ["image2"],
      },
    });
  });

  /**
   * CASE 2: ERROR DURING DATA RETRIEVAL
   * If any of the data retrieval functions throw an error, the handler should:
   * - Log the error with Sentry, including the endpoint and request details.
   * - Return a response with status 500 and a JSON object containing the error message.
   */
  it("should log error and return status 500 on error", async () => {

    // Define the used car ID
    const id = "12";

    // Define an error to be thrown by the data retrieval function
    const error = new Error("Something went wrong");
    getUsedCarData.mockRejectedValueOnce(error);

    // Mock the response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Call the handler function with the mocked 
    // request and response
    await handler({ query: { id } }, res);

    // Assertions about the call to Sentry
    expect(SentryNode.logger.error).toHaveBeenCalledWith(
      expect.any(Error),
      expect.any(Object)
    );

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(500);
  });

  /**
   * CASE 3: MISSING ID IN REQUEST
   * If the request does not contain an ID, the handler should:
   * - Handle the error gracefully without throwing an unhandled exception.
   * - Return a response with status 200 and a JSON object containing an empty
   *   used car info object.
   */
  it("should handle missing id gracefully", async () => {

    // Mock the data retrieval functions to return empty data
    getUsedCarData.mockResolvedValue({});
    getUsedCarImages.mockResolvedValue([]);

    // Mock the response object
    const res = { 
      status: jest.fn().mockReturnThis(), 
      json: jest.fn() 
    };

    // Call the handler function with a
    //  request that has no ID
    await handler({ query: {} }, res);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ 
      used_car_info: { images: [] } 
    });
  });

  /**
   * CASE 4: PARTIAL DATA RETRIEVAL
   * If some of the data retrieval functions return empty data while 
   * others return valid data, the handler should:
   * - Merge the available data correctly without throwing an error.
   * - Return a response with status 200 and a JSON object containing 
   *   the merged used car info and images as expected.
   */
  it("should merge partial data correctly", async () => {
    
    // Define the used car ID
    const id = "12";

    // Mock the data retrieval functions to return sample data
    // with missing fields in some of the tables
    getUsedCarData
      .mockResolvedValueOnce({ 
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
      })
      .mockResolvedValueOnce({ 
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
       })
      .mockResolvedValueOnce({ })
      .mockResolvedValueOnce({
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
      });
    getUsedCarImages.mockResolvedValueOnce([
      "image1",
      "image2",
    ]);

    // Mock the response object
    const res = { 
      status: jest.fn().mockReturnThis(), 
      json: jest.fn() 
    };
    
    // Call the handler function with the 
    // mocked request and response
    await handler({ query: { id: id } }, res);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      used_car_info: {
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
        images: ["image2"],
      },
    });
  });

  /**
   * CASE 5: NO IMAGES FOUND
   * If the getUsedCarImages function returns an empty array, the handler should:
   * - Handle the case gracefully without throwing an error.
   * - Return a response with status 200 and a JSON object containing the used car
   *   info with an empty images array.
   */
  it("should return empty images array when no images are found", async () => {
    // Define the used car ID
    const id = "12";

    // Mock the data retrieval functions to return sample data
    // with missing images
    getUsedCarData
      .mockResolvedValueOnce({ 
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
      })
      .mockResolvedValueOnce({ 
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
       })
      .mockResolvedValueOnce({
        doors: 5,
        external_color: "Black",
        bodywork: "Van",
      })
      .mockResolvedValueOnce({
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
      });
    getUsedCarImages.mockResolvedValue([]);
    
    // Mock the response object
    const res = { 
      status: jest.fn().mockReturnThis(), 
      json: jest.fn() 
    };

    // Call the handler function with the mocked 
    // request and response
    await handler({ query: { id: id } }, res);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      used_car_info: {
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
        doors: 5,
        external_color: "Black",
        bodywork: "Van",
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
        images: [],
      },
    });
  });

  /**
   * CASE 6: FAILURE OF getUsedCarImages
   * If the getUsedCarImages function throws an error, the handler should:
   * - Handle the error gracefully without throwing an unhandled exception.
   * - Return a response with status 200 and a JSON object containing the used car
   *   info with an empty images array.
   * - Ensure that the error from getUsedCarImages does not affect the retrieval
   *   of other data and that the available data is still returned correctly.
   */
  it("should handle getUsedCarImages failure gracefully", async () => {
    // Define the used car ID
    const id = "12";

    // Mock the data retrieval functions to return sample data
    // with missing images
    getUsedCarData
      .mockResolvedValueOnce({ 
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
      })
      .mockResolvedValueOnce({ 
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
       })
      .mockResolvedValueOnce({
        doors: 5,
        external_color: "Black",
        bodywork: "Van"
      })
      .mockResolvedValueOnce({
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
      });
    getUsedCarImages.mockRejectedValue(new Error("Something went wrong"));
    
    // Mock the response object
    const res = { 
      status: jest.fn().mockReturnThis(), 
      json: jest.fn() 
    };

    // Call the handler function with the mocked 
    // request and response
    await handler({ query: { id: id } }, res);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ 
      used_car_info: {
        power: 160,
        engine_displacement: 2000,
        cylinders: 4,
        transmission: "Automatic",
        consumption: "4,5-7,5",
        emissions: "145-160",
        emission_class: "Euro 5",
        doors: 5,
        external_color: "Black",
        bodywork: "Van",
        seats: 7,
        internal_color: "Black",
        internal_material: "Leather",
        images: [],
      }
    });
  });

  /**
   * CASE 7: ALL TABLES RETURN EMPTY
   * If all getUsedCarData calls return empty objects and getUsedCarImages
   * returns an empty array, the handler should:
   * - Return a response with status 200
   * - Return a JSON object containing only an empty images array
   */
  it("should handle all tables empty gracefully", async () => {
    
    // Define the used car ID
    const id = "12";

    // Mock all data retrieval functions to return empty
    getUsedCarData
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({})
      .mockResolvedValueOnce({});
    getUsedCarImages.mockResolvedValue([]);

    // Mock the response object
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Call the handler function with the mocked 
    // request and response
    await handler({ query: { id } }, res);

    // Assertions about the response
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ 
      used_car_info: { images: [] } 
    });
  });
});