if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_commerce_0_2_301_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-commerce",
  "name" : "vital-commerce-0.2.301",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-commerce#Customer",
    "parent" : "http://vital.ai/ontology/vital#Account",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Customer",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Customer",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Customer" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBusinessCategory" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBusinessName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBusinessURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasCustomerID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasMobilePhone" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasTelephone" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#isLocked" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-commerce#isRetired" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasInvoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasInvoice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasInvoice",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasInvoice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasItem",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasItem",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasItem" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentInfo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasPaymentInfo",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentInfo" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasProduct",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasProduct",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasProduct",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasProduct" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasServiceContract",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasServiceContract",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasServiceContract",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasServiceContract" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasShippingInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasShippingInfo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasShippingInfo",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasShippingInfo" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasSubscription",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasSubscription",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasSubscription",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital#Account" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasSubscription" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeDestination" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasEdgeSource" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasListIndex" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Invoice",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Invoice",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Invoice",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasDiscount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasGrandTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasSubTotal" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasTax" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#InvoiceItem",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#InvoiceItem",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#InvoiceItem",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPrice" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasQuantity" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasTotalPrice" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#PaymentInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#PaymentInfo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#PaymentInfo",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPaymentMethod" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#Product",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Product",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Product",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Product" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPrice" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasProductID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasShortDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#isProductActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#ResetPasswordRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasRandomCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasUsername" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#ServiceContract",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#ServiceContract",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#ServiceContract",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-commerce#ShippingInfo",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#ShippingInfo",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#ShippingInfo",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ]
      },
      "types" : {
        "type" : "array",
        "minItems" : 1,
        "items" : {
          "type" : "string"
        },
        "uniqueItems" : true
      },
      "http://vital.ai/ontology/vital#hasCertainty" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasDegree" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasPageRank" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasCity" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasFullName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasState" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasStreetAddress1" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasStreetAddress2" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasZipCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBusinessCategory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "businessCategory",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBusinessName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "businessName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBusinessURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "businessURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "city",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCustomerID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "customerID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest" ],
    "shortName" : "date",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "description",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasDiscount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "shortName" : "discount",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasFullName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "fullName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasGrandTotal",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "shortName" : "grandTotal",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasImageURL",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "imageURL",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest" ],
    "shortName" : "loginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasMobilePhone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "mobilePhone",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPaymentMethod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "shortName" : "paymentMethod",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPrice",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem", "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "price",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasProductID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "productID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasQuantity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "shortName" : "quantity",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasRandomCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest" ],
    "shortName" : "randomCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasShortDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "shortDescription",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasState",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "state",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasStreetAddress1",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "streetAddress1",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasStreetAddress2",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "streetAddress2",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasSubTotal",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "shortName" : "subTotal",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTax",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Invoice" ],
    "shortName" : "tax",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTelephone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "telephone",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTotalPrice",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "shortName" : "totalPrice",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ResetPasswordRequest" ],
    "shortName" : "username",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasZipCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "zipCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#isLocked",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "locked",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#isProductActive",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Product" ],
    "shortName" : "productActive",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#isRetired",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "retired",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_commerce_0_2_301_schema);