if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_generic_app_0_2_302_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-generic-app",
  "name" : "vital-generic-app-0.2.302",
  "vitalsignsVersion" : "0.2.302",
  "parents" : [ "http://vital.ai/ontology/vital" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#AppConfiguration",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#AppConfiguration" ]
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
      },
      "http://vital.ai/ontology/vital-generic-app#isInvitationCodeRequestsEnabled" : {
        "type" : "boolean"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ]
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
      },
      "http://vital.ai/ontology/vital-generic-app#hasAccountURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasLoginURI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasRandomCode" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasStatus" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-generic-app#hasUsername" : {
        "type" : "string"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasAccountURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "accountURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasLoginURI",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "loginURI",
    "multipleValues" : false,
    "type" : "URIProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasRandomCode",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "randomCode",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasStatus",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "status",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#hasUsername",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#InvitationCodeRequest" ],
    "shortName" : "username",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-generic-app#isInvitationCodeRequestsEnabled",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-generic-app#AppConfiguration" ],
    "shortName" : "invitationCodeRequestsEnabled",
    "multipleValues" : false,
    "type" : "BooleanProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_generic_app_0_2_302_schema);