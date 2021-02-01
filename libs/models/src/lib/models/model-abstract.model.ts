// CUSTOM INTERFACES
import { ModelInterface } from "../interfaces/model.interface";

export abstract class ModelAbstract implements ModelInterface {
  #id: string = null;
  get id(): string {
    return this.#id;
  }
  set id(id: string) {
    this.#id = id;
  }

  #scenario: string = null;
  get scenario(): string {
    return this.#scenario;
  }
  set scenario(scenario: string) {
    this.#scenario = scenario;
    this._assignDeepScenario();
  }

  get isNew(): boolean {
    return !!this.#id;
  }

  // Position of the document on the total of documents.
  public position: number;

  /**
   * Properties to exclude when calling the class getInformation() method 
   * which returns the name of the properties with their respective values.
   */
  public static propertiesToExclude: string[] = [
    'id',
    'scenario',
    'isNew'
  ]

  /**
   * Controls to exclude when declaring a form through the model..
   */
  public static controlsToExclude: string[] = ModelAbstract.propertiesToExclude;

  private _assignDeepScenario(): void {
    let context: any = this;
    Object.getOwnPropertyNames(context).forEach((propertyName: string) => {
      if (context[propertyName] instanceof ModelAbstract)
        (<ModelAbstract>context[propertyName]).scenario = this.scenario;
      else if (Array.isArray(context[propertyName]))
        context[propertyName].forEach((value: string, position: number) => {
          if (context[propertyName][position] instanceof ModelAbstract)
            (<ModelAbstract>context[propertyName][position]).scenario = this.scenario;
        });
    });
  }

  protected _removeAssignmentOfIllegalValues(values: any): any {
    /*
     * Scenario change in assigning values to the model is not allowed
     * for instance behavior safety, such assignment must be done 
     * through the constructor or directly through its scenarioproperty.
     */
    if (values && values.scenario)
      delete values.scenario;

    return values;
  }

  public setValues(values: any): void {
    if (values) {
      values = this._removeAssignmentOfIllegalValues(values);
      Object.assign(this, values);
    }
  }

  public getInformation(level: number = 0, propertiesToExclude: Array<string> = [], namePropertyFather: string = null): any {
    const context: any = this;
    let data: any = {};

    /**
     * Unwanted properties to exclude when calling the static property 
     * class-only propertiesToExclude static property.
     */
    if (level == 0
      && context.constructor.propertiesToExclude)
      propertiesToExclude = context.constructor.propertiesToExclude;

    const getValue: Function = (value: any, namePropertyFather: string = null): any => {
      let mappedValue: any = ['string'].includes(typeof value) && !value.length ? null : value;

      if (value != null) {
        if (value instanceof ModelAbstract)
          mappedValue = value.getInformation(++level, propertiesToExclude, namePropertyFather);
        else if (value instanceof Date)
          mappedValue = value.toISOString();
        else if (Array.isArray(value)) {
          mappedValue = [];

          if (value.length)
            value.forEach((positionValue: any) => {
              let valor: any = getValue(positionValue, namePropertyFather);

              if (valor)
                mappedValue.push(valor);
            });
          else
            mappedValue = null;
        } else if (['object'].includes(typeof value)) {
          mappedValue = {};

          Object.keys(value).forEach((propertyName: string) => {
            if (!['_', '#'].includes(propertyName.substring(0, 1))) {
              let obtainedValue: any = getValue(value[propertyName], namePropertyFather);

              if (obtainedValue != null)
                mappedValue[propertyName] = obtainedValue;
            }
          });

          mappedValue = Object.keys(mappedValue).length ? mappedValue : null;
        }
      }

      return mappedValue;
    }

    Object.getOwnPropertyNames(context).forEach((propertyName: string) => {
      /**
       * Full name of the property where the different levels are chained
       * example grandfather.father.son.grandson
       * 
       * Property required to exclude unwanted properties when calling the
       * static property propertiesToExclude properties.
       */
      let nameFullProperty: string = namePropertyFather ? `${namePropertyFather}.${propertyName}` : propertyName;

      // Only properties of level zero are excluded.
      if (!propertiesToExclude.includes(nameFullProperty)
        // Properties that start with a hyphen on the floor are removed as they represent private class properties.
        && !['_', '#'].includes(propertyName.substring(0, 1))) {
        let obtainedValue: any = getValue(context[propertyName], nameFullProperty);

        if (obtainedValue != null)
          data[propertyName] = obtainedValue;
      }
    });

    return Object.keys(data).length ? data : null;
  }
}