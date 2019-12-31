class EntityExtension < Entity
  attr_accessor :extendedEntityName
  attr_accessor :name

  def initialize(inheritedEntities, extendedEntityName, contentsCodeString)
    super(inheritedEntities, "extension", contentsCodeString)

    @extendedEntityName = extendedEntityName
    @name = extendedEntityName
  end
end
