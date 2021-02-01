// CUSTOM MODELS
import { ModelAbstract } from "./model-abstract.model";

interface TestInterface {
  name: string;
  age: number;
}
interface TestChildInterface { }

class TestChildModel extends ModelAbstract { }
class TestModel extends ModelAbstract implements TestInterface {
  public name: string = "Test name";
  public age: number;
  public testChild: TestChildModel = new TestChildModel();
}

const TEST_SCENARIO: string = 'test-scenario';

describe('models', () => {
  describe('models', () => {
    describe('ModelAbstract', () => {
      let testModel: TestModel = new TestModel();

      it(`should create the instance and extending 'ServiceAbstractService'`, () =>
        expect(testModel).toBeInstanceOf(ModelAbstract)
      );

      it(`should have a property 'scenario' with value '${TEST_SCENARIO}'`, () => {
        expect(testModel).toHaveProperty('scenario');
        testModel.scenario = TEST_SCENARIO;
        expect(testModel.scenario).toEqual(TEST_SCENARIO);
        expect(testModel.testChild.scenario).toEqual(TEST_SCENARIO);
      });

      it(`should have a property 'isNew'`, () =>
        expect(testModel).toHaveProperty('isNew')
      );

      it(`should have a property 'position'`, () =>
        expect(testModel.position).toBeUndefined()
      );

      it(`should have a static property 'propertiesToExclude' type 'string[]'`, () => {
        expect(ModelAbstract).toHaveProperty('propertiesToExclude');
        expect(Array.isArray(ModelAbstract.propertiesToExclude)).toBeTruthy();
      });

      it(`should have a static property 'controlsToExclude' type 'string[]'`, () => {
        expect(ModelAbstract).toHaveProperty('controlsToExclude');
        expect(Array.isArray(ModelAbstract.controlsToExclude)).toBeTruthy();
      });

      it(`should have a method 'setValues' do not allow scenario assignment`, () => {
        let testModel: TestModel = new TestModel();
        testModel.setValues({
          name: "Test name two",
          scenario: TEST_SCENARIO
        })
        expect(testModel.name).toEqual("Test name two");
        expect(testModel.scenario).not.toEqual(TEST_SCENARIO);
      });

      it(`should have a method 'getInformation' that returning 'TestInterface' without property 'age'`, () => {
        const valuesTestModel: TestInterface = testModel.getInformation();
        expect(valuesTestModel).toHaveProperty('name');
        expect(valuesTestModel).not.toHaveProperty('age');
      });
    });
  });
});
