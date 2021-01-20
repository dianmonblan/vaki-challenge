export interface ModelInterface {
    /**
     * Custom use of group validations for different scenarios.
     */
    scenario: string;

    /**
     * Controls if the model is new to be created or existing to be modified
     * if there is a value of _id
     */
    isNew: boolean;
}