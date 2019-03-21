(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConceptType;
    (function (ConceptType) {
        ConceptType["discrete"] = "discrete";
        ConceptType["ordered"] = "discrete-ordered";
        ConceptType["quantity"] = "quantity";
    })(ConceptType = exports.ConceptType || (exports.ConceptType = {}));
    /**
     * Represents a Collection Type
     */
    var CollectionType;
    (function (CollectionType) {
        CollectionType["item"] = "item";
    })(CollectionType = exports.CollectionType || (exports.CollectionType = {}));
    var AddOnChoiceType;
    (function (AddOnChoiceType) {
        AddOnChoiceType["option"] = "option";
        AddOnChoiceType["range"] = "range";
    })(AddOnChoiceType = exports.AddOnChoiceType || (exports.AddOnChoiceType = {}));
    var Target;
    (function (Target) {
        Target["supplement"] = "supplement";
        Target["replace"] = "replace";
    })(Target = exports.Target || (exports.Target = {}));
    var ComponentType;
    (function (ComponentType) {
        ComponentType["quantity"] = "quantity";
        ComponentType["concept"] = "concept";
    })(ComponentType = exports.ComponentType || (exports.ComponentType = {}));
    var SelectType;
    (function (SelectType) {
        SelectType["single"] = "single";
        SelectType["multiple"] = "multiple";
    })(SelectType = exports.SelectType || (exports.SelectType = {}));
});
//# sourceMappingURL=schema.js.map