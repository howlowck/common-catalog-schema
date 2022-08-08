# Common Schema for Catalog Data

This is a json schema declaration for a fully relational data structure designed for catalog data

## Motivation
* Full taxonomy of all base items
* Information about base items
* Group abstract concepts for richer information on base items
* Provide sufficient relational information for:
  * Identifying missing attributes in order to derive to a base item
  * Transforming one base item to another base item by applying operations on its components or addOns
  * Finding minimal operations to transform one base item to another base item

## Core Concepts
**Classification**:
A `classfication` is the type of a base item.  
A classification object can have a `parent` property that points to another classification object.
For Example: a classification path for the Tesla car would be `[Tesla] => [Sedan] => [Model 3]`.

**ItemDefinition**:
A `ItemDefinition` is the base item.  A base item is usually an item in a catalog that has a specific sku.
For Example: a base item for a Tesla car would be a "Tesla Model 3 P100D"

**Concept**:
A `Concept` is an abstract grouping of discrete values or collection of base items.
Concepts are used within the ItemDefinitions to augment the base item's `choices` or `addOns`, and to provide logical relational mapping of same concepts to different base items.

## To See the docs:
1. clone the repo
2. `npm install`
3. `pip install json-schema-for-humans` (Yes, it's a python package 😬, because I can't find a good nodejs tool for generating docs from JSON Schemas)
4. `npm start`

> To generate the docs separatly use `generate-schema-doc ./json-schema/ docs/spec`

5. Follow the URL in the output to see the docs.
