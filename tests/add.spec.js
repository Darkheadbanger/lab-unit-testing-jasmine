describe("Iteration 1 | Getting Started", () => {
  describe("Function add", () => {
    it("should be defined", () => {
      expect(add).toBeDefined();
    });

    it("should take two arguments", () => {
      expect(add.length).toBe(2);
    });

    it("should return the sum of the two numbers", () => {
      expect(add(1, 2)).toEqual(3);
      expect(add(3, 4)).toEqual(7);
      expect(add(100, 47)).toEqual(147);
    });

    it("should return undefined if any of the arguments is not provided", () => {
      expect(add(1)).toEqual(undefined);
      expect(add()).toEqual(undefined);
      expect(add(undefined, 1)).toEqual(undefined);
    });
  });
});

/*

Review the Tests

    1. How many tests are there for the add function in the add.spec.js file?
        First we must create two tests for the declaration of each arguments , then create a test to test if each arguments 
        defined or not and we must create a test to define that numOne and numTwo are numbers. 
        Then we must test that we return the right result that is a number and not others types.
        We can tests them separately so we can have 8 tests, but it's not necessary, we can tests them at the same time so 4 tests are sufficients.
        
    2. How are the blocks describe and it being used in the tests? What is the purpose of each?
      The blocks "describe" like it's name, will describe what our funciton wil do. The "it", it will tell what we the function really do.

    3. How are the test descriptions phrased? Are there any keywords that stand out?
        Yes, the word "describe", "it", then "expect" and "toBeDefined" methods are stand out because theses words are very clear and understandable.
        Easy to understand and straightforward what will they do in code.

    4. What do the expect functions do, and what input do they take?
      The function expect to be add and defined first.
    */

      