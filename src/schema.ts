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
     * All abstract concepts that ties different concrete items or abstract values together
     * this is also used to create complex mappings between different concrete items
     */
    concepts: Concept[]
  }
  
  /**
   * Represents a specific classification
   */
  interface Classification {
    /**
     * An unique id for the classification
     */
    id: string,
  
    /**
     * Proper classification name
     */
    name: string,
    
    /**
     * The Id of its parent classification
     * If parent is null, that means the classification is a top-level classification
     */
    parent: string | null,
    
    /**
     * A list of common names for this classification
     */
    synonyms: string[]
  }
  
  enum ConceptType {
    discrete = 'discrete',
    item = 'item'
  }
  
  /**
   * Represents a Concept
   */
  interface Concept {
    /**
     * An unique id for the concept
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
      values: DiscreteValue[] | ItemValue[]
  }
  
  /**
   * Represents a Text Value in a Concept
   */
  interface DiscreteValue {
      value: string
  }
  
  /**
   * Represents an Item Value in a Concept
   */
  interface ItemValue {
    itemId: string
  }
  
  /**
   * Represents a concrete item and all its attributes and relationships
   */
  interface ItemDefinition {
      id: string,
      displayName: string,
      disambiguationAttributes: Attribute[]
      classification: ClassificationItem,
      attributes: Attribute[],
      components: Component[],
      addOns: AddOn[],
    customizations: Customization[],
    choices: Choice[]
  }
  
  /**
   * Represents a Choice in a Item Definition
   */
  interface Choice {
    conceptId: string,
    required: boolean,
    type: ChoiceType,
    minQuantity: number,
    maxQuantity: number
    attributes: Attribute[]
  }
  
  /**
   * Represents an Attribute
   */
  interface Attribute {
      name: string,
      value: string | boolean | number
  }
  
  enum AddOnType {
    option = 'option',
    range = 'range'
  }
  
  /**
   * Represents an AddOn in an Item Definition
   */
  interface AddOn {
    itemId: string,
    type: AddOnType
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
    conceptId: string,
    minQuantity: number,
    defaultQuantity: number,
    maxQuantity: number
  }
  
  /**
   * Represents a Component
   * A Component is a concrete item that makes up another concrete item
   */
  interface Component {
    itemId: string,
    defaultQuantity: number,
    minQuantity: number,
    maxQuantity: number
  }
  
  enum ChoiceType {
    single = 'single',
    multiple = 'multiple'
  }
  
  interface ClassificationItem {
      classificationId: string
  }
  
  interface Attribute {
      name: string,
      value: string | boolean | number,
  }