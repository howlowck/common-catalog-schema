/**
 * Represents a Common Schema for any Catalog Data
 * This is used for a full relationship declaration in the menu service
 */
export interface CatalogSchema {
    /**
     * Title of the data
     */
    title: string,
    
    /**
     * Classification Data and how different classifications relates to one another
     */
    classifications: Classification[],
    
    /**
     * All concrete items in a catalog (usually each item tied to a specific sku)
     */
    items: ItemDefinition[],
    
    /**
     * All abstract concepts that ties different concrete items or abstract values together
     * this is also used to create complex mappings between different concrete items
     */
    concepts: Concept[],
  }
  
/**
 * Represents a specific classification
 */
export interface Classification {
  /**
   * An unique id for the classification
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  id: string,

  /**
   * Proper classification name
   */
  name: string,
  
  /**
   * The Id of its parent classification
   * If parent is not present, that means the classification is a top-level classification
   */
  parent?: string,
  
  /**
   * A list of common names for this classification
   */
  synonyms: string[]
}

export enum ConceptType {
  discrete = 'discrete',
  ordered = 'discrete-ordered',
  quantity = 'quantity'
}

/**
 * Represents a Concept
 */
export interface Concept {
  /**
   * An unique id for the concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  id: string,
  
  /**
   * Proper name
   */
  displayName: string,

  /**
   * The type of concept values
   */
  type: ConceptType,

  /**
   * The list of values
   */
  values?: DiscreteItem[]

  quantity?: QuantityValue
}

export interface QuantityValue {
  minQuantity: number,
  maxQuantity: number,
  incrementBy: number
}

/**
 * Represents a Collection Type
 */
export enum CollectionType {
  item = 'item'
}

/**
 * Represents a Text Value in a Concept
 */
export interface DiscreteItem {
  value: string,
  synonyms?: string[],
  /**
   * An unique id for the item associated with the item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  associatedItemId?: string 
}

/**
 * Represents an Item Value in a Concept
 */
export interface ItemValue {
  /**
   * Id of an Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string
}

/**
 * Represents a concrete item and all its attributes and relationships
 */
export interface ItemDefinition {
  /**
   * Id of the item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  id: string,
  displayName: string,
  commonNames: string[],
  disambiguationAttributes: Attribute[]
  classifications: ClassificationItem[],
  metadata: Metadata[],
  components: Component[],
  addOns: AddOn[],
  customizations: Customization[],
  choices: Choice[]
}

export interface Metadata {
  name: string,
  value: string | number | boolean
}

/**
 * Represents a Choice in a Item Definition
 */
export interface Choice {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  required: boolean,
  target: Target,
  selectType: SelectType,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
  choiceValues: ChoiceValue[]
}

export interface ChoiceValue {
  /**
   * `value` is the associated value in the concept (pointed by the `conceptId`)
   */
  value: string,

  /**
   * This is a data object that is tied to the value, for the item
   */
  data: { [key: string]: string | number | boolean }
}

/**
 * Represents an Attribute
 */
export interface Attribute {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  value: string | boolean | number
}

export enum AddOnChoiceType {
  option = 'option',
  range = 'range'
}

export enum Target {
  supplement = 'supplement',
  replace = 'replace'
}

/**
 * Represents an AddOn in an Item Definition
 */
export interface AddOn {
  /**
   * Id of the Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string,
  target: Target,
  choiceType: AddOnChoiceType
  attributes: Attribute[],
  option: RangeOption | ConceptOption
}

export interface ConceptOption {
  conceptId: string,
  defaultValue: string,
  optionValues: OptionValue[]
}

export interface OptionValue {
  value: string,
  data: { [key: string]: string | number | boolean }
}

/**
 * Represents a Range Option
 */
export interface RangeOption {
  incrementBy: number,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
}

/**
 * Represents a Customization Option which points to a Concept
 * Customization changes the aspect (associated concept) of a Component or an AddOn
 */
export interface Customization {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
}

export enum ComponentType {
  quantity = 'quantity',
  concept = 'concept'
}

/**
 * Represents a Component
 * A Component is a concrete item that makes up another concrete item
 */
export interface Component {
  /**
   * Id of the Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string,
  type: ComponentType,
  attribute: QuantityAttribute | ConceptAttribute
}

export interface QuantityAttribute {
  defaultQuantity: number,
  minQuantity: number,
  maxQuantity: number
}

export interface ConceptAttribute {
  conceptId: string,
  defaultValue: string
}

export enum SelectType {
  single = 'single',
  multiple = 'multiple'
}

export interface ClassificationItem {
  /**
   * Id of the Classification
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  classificationId: string
}
