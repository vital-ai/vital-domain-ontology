if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_commerce_0_2_300_schema = [ {
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "businessCategory" : {
      "type" : "string"
    },
    "businessName" : {
      "type" : "string"
    },
    "businessURL" : {
      "type" : "string"
    },
    "customerID" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "locked" : {
      "type" : "boolean"
    },
    "mobilePhone" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "retired" : {
      "type" : "boolean"
    },
    "telephone" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "versionIRI" : {
      "type" : "string"
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
    "URIProp" : {
      "type" : "string"
    },
    "active" : {
      "type" : "boolean"
    },
    "date" : {
      "type" : "number"
    },
    "degree" : {
      "type" : "number"
    },
    "loginURI" : {
      "type" : "string"
    },
    "name" : {
      "type" : "string"
    },
    "ontologyIRI" : {
      "type" : "string"
    },
    "pageRank" : {
      "type" : "number"
    },
    "randomCode" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "username" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
} ];

 VITAL_JSON_SCHEMAS.push(vital_commerce_0_2_300_schema);