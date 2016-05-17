if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_ibm_watson_0_2_304_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-ibm-watson",
  "name" : "vital-ibm-watson-0.2.304",
  "vitalsignsVersion" : "0.2.304",
  "parents" : [ "http://vital.ai/ontology/vital-nlp" ],
  "schemas" : [ {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Agreeableness",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Agreeableness",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Agreeableness",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAgreeablenessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAltruismValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasCooperationValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasModestyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSympathyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasTrustValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasUncompromisingValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Big5",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Big5" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
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
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Conscientiousness",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAchievementStrivingValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasCautiousnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasConscientiousnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasDutifulnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasOrderlinessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfDisciplineValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfEfficacyValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Edge_hasPersonalityInsight",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Edge_hasPersonalityInsight",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Edge_hasPersonalityInsight",
    "type" : "object",
    "sourceDomains" : [ "http://vital.ai/ontology/vital-nlp#Document" ],
    "destinationDomains" : [ "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight" ],
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Edge_hasPersonalityInsight" ]
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
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
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
    "id" : "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#EmotionalRange",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasEmotionalRangeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasFieryValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasImmoderationValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasMelancholyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasProneToWorryValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfConsciousnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSusceptibleToStressValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Extraversion",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Extraversion",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Extraversion",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasActivityLevelValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAssertivenessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasCheerfulnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasExcitementSeekingValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasExtraversionValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasGregariousnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasOutgoingValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Needs",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Needs",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Needs",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasChallengeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasClosenessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasCuriosityValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasExcitementValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasHarmonyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasIdealValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasLibertyValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasLoveValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasPracticalityValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfExpressionValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasStabilityValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasStructureValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Openness",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#Big5",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Openness",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Openness",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAdventurousnessValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasArtisticInterestsValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasAuthorityChallengingValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasEmotionalityValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasImaginationValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasIntellectValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasOpennessValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  }, {
    "id" : "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "parent" : "http://vital.ai/ontology/vital-core#VITAL_Node",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
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
    "id" : "http://vital.ai/ontology/vital-ibm-watson#Values",
    "parent" : "http://vital.ai/ontology/vital-ibm-watson#PersonalityInsight",
    "$schema" : "http://json-schema.org/draft-04/schema#",
    "title" : "http://vital.ai/ontology/vital-ibm-watson#Values",
    "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-ibm-watson#Values",
    "type" : "object",
    "properties" : {
      "URI" : {
        "type" : "string"
      },
      "type" : {
        "enum" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ]
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
      "http://vital.ai/ontology/vital-core#hasName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasOntologyIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasProvenance" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasUpdateTime" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasConservationValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasHedonismValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasOpennessToChangeValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfEnhancementValue" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-ibm-watson#hasSelfTranscendenceValue" : {
        "type" : "number"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAchievementStrivingValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "achievementStrivingValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasActivityLevelValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "activityLevelValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAdventurousnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "adventurousnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAgreeablenessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "agreeablenessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAltruismValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "altruismValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasArtisticInterestsValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "artisticInterestsValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAssertivenessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "assertivenessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasAuthorityChallengingValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "authorityChallengingValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasCautiousnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "cautiousnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasChallengeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "challengeValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasCheerfulnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "cheerfulnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasClosenessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "closenessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasConscientiousnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "conscientiousnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasConservationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ],
    "shortName" : "conservationValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasCooperationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "cooperationValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasCuriosityValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "curiosityValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasDutifulnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "dutifulnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasEmotionalRangeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "emotionalRangeValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasEmotionalityValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "emotionalityValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasExcitementSeekingValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "excitementSeekingValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasExcitementValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "excitementValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasExtraversionValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "extraversionValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasFieryValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "fieryValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasGregariousnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "gregariousnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasHarmonyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "harmonyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasHedonismValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ],
    "shortName" : "hedonismValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasIdealValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "idealValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasImaginationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "imaginationValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasImmoderationValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "immoderationValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasIntellectValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "intellectValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasLibertyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "libertyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasLoveValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "loveValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasMelancholyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "melancholyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasModestyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "modestyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasOpennessToChangeValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ],
    "shortName" : "opennessToChangeValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasOpennessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Openness" ],
    "shortName" : "opennessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasOrderlinessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "orderlinessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasOutgoingValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Extraversion" ],
    "shortName" : "outgoingValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasPracticalityValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "practicalityValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasProneToWorryValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "proneToWorryValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfConsciousnessValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "selfConsciousnessValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfDisciplineValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "selfDisciplineValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfEfficacyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Conscientiousness" ],
    "shortName" : "selfEfficacyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfEnhancementValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ],
    "shortName" : "selfEnhancementValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfExpressionValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "selfExpressionValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSelfTranscendenceValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Values" ],
    "shortName" : "selfTranscendenceValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasStabilityValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "stabilityValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasStructureValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Needs" ],
    "shortName" : "structureValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSusceptibleToStressValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#EmotionalRange" ],
    "shortName" : "susceptibleToStressValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasSympathyValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "sympathyValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasTrustValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "trustValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-ibm-watson#hasUncompromisingValue",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-ibm-watson#Agreeableness" ],
    "shortName" : "uncompromisingValue",
    "multipleValues" : false,
    "type" : "DoubleProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_ibm_watson_0_2_304_schema);