/**
 * Represents a Common Schema for any Catalog Data
 * This is used for a full relationship declaration in the menu service
 */
interface CatalogSchema {
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
     * Abstract Groupings of various base items
     */
    collections: Collection[]

    /**
     * All abstract concepts that ties different concrete items or abstract values together
     * this is also used to create complex mappings between different concrete items
     */
    concepts: Concept[],
  }
  
/**
 * Represents a specific classification
 */
interface Classification {
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

enum ConceptType {
  discrete = 'discrete',
  quantity = 'quantity'
}

/**
 * Represents a Concept
 */
interface Concept {
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

interface QuantityValue {
  minQuantity: number,
  maxQuantity: number,
  incrementBy: number
}

/**
 * Represents a Collection Type
 */
enum CollectionType {
  item = 'item'
}

/**
 * Represents an item Grouping
 */
interface Collection {
  /**
   * An unique id for the concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  id: string,

  /**
   * Proper name
   */
  displayName: string,

  type: CollectionType,

  values: ItemValue[]
}

/**
 * Represents a Text Value in a Concept
 */
interface DiscreteItem {
    value: string,
    synonyms?: string[]
}

/**
 * Represents an Item Value in a Concept
 */
interface ItemValue {
  /**
   * Id of an Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string
}

/**
 * Represents a concrete item and all its attributes and relationships
 */
interface ItemDefinition {
  /**
   * Id of the item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  id: string,
  displayName: string,
  commonNames: string[],
  disambiguationAttributes: Attribute[]
  classification: ClassificationItem,
  metadata: Metadata[],
  components: Component[],
  addOns: AddOn[],
  customizations: Customization[],
  choices: Choice[]
}

interface Metadata {
  name: string,
  value: string | number | boolean
}

/**
 * Represents a Choice in a Item Definition
 */
interface Choice {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  required: boolean,
  type: ChoiceType,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
  attributes: Attribute[]
}

/**
 * Represents an Attribute
 */
interface Attribute {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  value: string | boolean | number
}

enum AddOnChoiceType {
  option = 'option',
  range = 'range'
}

enum AddOnType {
  supplement = 'supplement',
  replace = 'replace'
}

/**
 * Represents an AddOn in an Item Definition
 */
interface AddOn {
  /**
   * Id of the Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string,
  type: AddOnType,
  choiceType: AddOnChoiceType
  attributes: Attribute[],
  option: RangeOption | Customization
}

/**
 * Represents a Range Option
 */
interface RangeOption {
  incrementBy: number,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
}

/**
 * Represents a Customization Option which points to a Concept
 */
interface Customization {
  /**
   * Id of the Concept
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  conceptId: string,
  minQuantity: number,
  defaultQuantity: number,
  maxQuantity: number
}

enum ComponentType {
  quantity = 'quantity',
  concept = 'concept'
}

/**
 * Represents a Component
 * A Component is a concrete item that makes up another concrete item
 */
interface Component {
  /**
   * Id of the Item
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  itemId: string,
  type: ComponentType,
  attribute: QuantityAttribute | ConceptAttribute
}

interface QuantityAttribute {
  defaultQuantity: number,
  minQuantity: number,
  maxQuantity: number
}

interface ConceptAttribute {
  conceptId: string,
  defaultValue: string
}

enum ChoiceType {
  single = 'single',
  multiple = 'multiple'
}

interface ClassificationItem {
  /**
   * Id of the Classification
   * @pattern ^[A-Za-z0-9_\-]+$
   */
  classificationId: string
}

interface Attribute {
  name: string,
  value: string | boolean | number,
}