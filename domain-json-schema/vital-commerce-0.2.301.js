if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_commerce_0_2_301_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-commerce",
  "name" : "vital-commerce-0.2.301",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-commerce#CreditCard",
    "parent" : "http://vital.ai/ontology/vital-commerce#PaymentMethod",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#CreditCard",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#CreditCard",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#CreditCard" ]
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
      "http://vital.ai/ontology/vital-commerce#hasCardType" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasExpirationDate" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasMaskedNumber" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#isDefaultPaymentMethod" : {
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
      "http://vital.ai/ontology/vital-commerce#hasAccountStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreeCustomerID" : {
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
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentMethod",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasPaymentMethod",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasPaymentMethod" ]
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
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasPlan",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasPlan",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasPlan",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#Plan" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasPlan" ]
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
    "id" : "http://vital.ai/ontology/vital-commerce#Edge_hasSelectedPaymentMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Edge_hasSelectedPaymentMethod",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Edge_hasSelectedPaymentMethod",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Edge_hasSelectedPaymentMethod" ]
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
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasCurrentBillingCycle" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-commerce#hasAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreeSubscriptionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreeTransactionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasCreatedAt" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasCurrencyIsoCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPaymentMethod" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPaymentStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasUpdatedAt" : {
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
    "id" : "http://vital.ai/ontology/vital-commerce#PaymentMethod",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#PaymentMethod",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#PaymentMethod",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod" ]
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
      "http://vital.ai/ontology/vital-commerce#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#isDefaultPaymentMethod" : {
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
    "id" : "http://vital.ai/ontology/vital-commerce#Plan",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-commerce#Plan",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-commerce#Plan",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-commerce#Plan" ]
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
      "http://vital.ai/ontology/vital-commerce#hasBillingDayOfMonth" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingFrequency" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreePlanID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasCreatedAt" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasCurrencyIsoCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasDescription" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasImageURL" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasNumberOfBillingCycles" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasPrice" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialDuration" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialDurationUnit" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialPeriod" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-commerce#hasUpdatedAt" : {
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
      "http://vital.ai/ontology/vital-commerce#hasBalance" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingDayOfMonth" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodEndDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBillingPeriodStartDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreePlanID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasBraintreeSubscriptionID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasCreatedAt" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasCurrentBillingCycle" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasDaysPastDue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasFailureCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasFirstBillingDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasNextBillingDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasNextBillingPeriodAmount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasNumberOfBillingCycles" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasPaidThroughDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasPaymentMethodToken" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasPrice" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasSubscriptionStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasSubscriptionStatusHistory" : {
        "type" : "array",
        "items" : {
          "type" : "string"
        }
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialDuration" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialDurationUnit" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-commerce#hasTrialPeriod" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-commerce#hasUpdatedAt" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-commerce#isNeverExpires" : {
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasAccountStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "accountStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "shortName" : "amount",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBalance",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "balance",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBillingDayOfMonth",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "billingDayOfMonth",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBillingFrequency",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan" ],
    "shortName" : "billingFrequency",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBillingPeriodEndDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem", "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "billingPeriodEndDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBillingPeriodStartDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem", "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "billingPeriodStartDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBraintreeCustomerID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "braintreeCustomerID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBraintreePlanID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "braintreePlanID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBraintreeSubscriptionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "braintreeSubscriptionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasBraintreeTransactionID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "shortName" : "braintreeTransactionID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCardType",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#CreditCard" ],
    "shortName" : "cardType",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCity",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ShippingInfo" ],
    "shortName" : "city",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCreatedAt",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "createdAt",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCurrencyIsoCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#Plan" ],
    "shortName" : "currencyIsoCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasCurrentBillingCycle",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "currentBillingCycle",
    "multipleValues" : false,
    "type" : "IntegerProperty"
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasDaysPastDue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "daysPastDue",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasDescription",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#Product" ],
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasExpirationDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#CreditCard" ],
    "shortName" : "expirationDate",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasFailureCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "failureCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasFirstBillingDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "firstBillingDate",
    "multipleValues" : false,
    "type" : "DateProperty"
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
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod", "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#Product" ],
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasMaskedNumber",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#CreditCard" ],
    "shortName" : "maskedNumber",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasMobilePhone",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "mobilePhone",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasNextBillingDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "nextBillingDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasNextBillingPeriodAmount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "nextBillingPeriodAmount",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasNumberOfBillingCycles",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "numberOfBillingCycles",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPaidThroughDate",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "paidThroughDate",
    "multipleValues" : false,
    "type" : "DateProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPaymentMethod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "shortName" : "paymentMethod",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPaymentMethodToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "paymentMethodToken",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPaymentStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo" ],
    "shortName" : "paymentStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasPrice",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem", "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#Product", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasSubscriptionStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "subscriptionStatus",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasSubscriptionStatusHistory",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "subscriptionStatusHistory",
    "multipleValues" : true,
    "type" : "StringProperty"
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
    "URI" : "http://vital.ai/ontology/vital-commerce#hasToken",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod" ],
    "shortName" : "token",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTotalPrice",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#InvoiceItem" ],
    "shortName" : "totalPrice",
    "multipleValues" : false,
    "type" : "FloatProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTrialDuration",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "trialDuration",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTrialDurationUnit",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "trialDurationUnit",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasTrialPeriod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "trialPeriod",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#hasUpdatedAt",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentInfo", "http://vital.ai/ontology/vital-commerce#Plan", "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "updatedAt",
    "multipleValues" : false,
    "type" : "DateProperty"
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
    "URI" : "http://vital.ai/ontology/vital-commerce#isDefaultPaymentMethod",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#PaymentMethod" ],
    "shortName" : "defaultPaymentMethod",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#isLocked",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#Customer" ],
    "shortName" : "locked",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-commerce#isNeverExpires",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-commerce#ServiceContract" ],
    "shortName" : "neverExpires",
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