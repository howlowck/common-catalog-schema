"use strict";
var ConceptType;
(function (ConceptType) {
    ConceptType["discrete"] = "discrete";
    ConceptType["ordered"] = "discrete-ordered";
    ConceptType["quantity"] = "quantity";
})(ConceptType || (ConceptType = {}));
/**
 * Represents a Collection Type
 */
var CollectionType;
(function (CollectionType) {
    CollectionType["item"] = "item";
})(CollectionType || (CollectionType = {}));
var AddOnChoiceType;
(function (AddOnChoiceType) {
    AddOnChoiceType["option"] = "option";
    AddOnChoiceType["range"] = "range";
})(AddOnChoiceType || (AddOnChoiceType = {}));
var Target;
(function (Target) {
    Target["supplement"] = "supplement";
    Target["replace"] = "replace";
})(Target || (Target = {}));
var ComponentType;
(function (ComponentType) {
    ComponentType["quantity"] = "quantity";
    ComponentType["concept"] = "concept";
})(ComponentType || (ComponentType = {}));
var SelectType;
(function (SelectType) {
    SelectType["single"] = "single";
    SelectType["multiple"] = "multiple";
})(SelectType || (SelectType = {}));
//# sourceMappingURL=schema.js.map