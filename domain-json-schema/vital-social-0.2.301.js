if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_social_0_2_301_schema = [ {
  "id" : "http://vital.ai/ontology/vital-social#Tweet",
  "parent" : "http://vital.ai/ontology/vital-nlp#Document",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-social#Tweet",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-social#Tweet",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-social#Tweet" ]
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
    "authorID" : {
      "type" : "number"
    },
    "authorName" : {
      "type" : "string"
    },
    "body" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "dmozPath" : {
      "type" : "string"
    },
    "extractedText" : {
      "type" : "string"
    },
    "extractedTitle" : {
      "type" : "string"
    },
    "favoriteCount" : {
      "type" : "number"
    },
    "lang" : {
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
    "publicationDate" : {
      "type" : "number"
    },
    "sentimentMixed" : {
      "type" : "boolean"
    },
    "sentimentScore" : {
      "type" : "number"
    },
    "sourceDomain" : {
      "type" : "string"
    },
    "sourceName" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "tweetID" : {
      "type" : "number"
    },
    "url" : {
      "type" : "string"
    },
    "urlRoot" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
}, {
  "id" : "http://vital.ai/ontology/vital-social#YouTubeComment",
  "parent" : "http://vital.ai/ontology/vital-nlp#Document",
  "$schema" : "http://json-schema.org/draft-04/schema#",
  "title" : "http://vital.ai/ontology/vital-social#YouTubeComment",
  "description" : "Auto-generated schema for owl class: http://vital.ai/ontology/vital-social#YouTubeComment",
  "type" : "object",
  "properties" : {
    "URI" : {
      "type" : "string"
    },
    "type" : {
      "enum" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ]
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
    "authorName" : {
      "type" : "string"
    },
    "body" : {
      "type" : "string"
    },
    "channelID" : {
      "type" : "string"
    },
    "commentID" : {
      "type" : "string"
    },
    "degree" : {
      "type" : "number"
    },
    "dmozPath" : {
      "type" : "string"
    },
    "extractedText" : {
      "type" : "string"
    },
    "extractedTitle" : {
      "type" : "string"
    },
    "lang" : {
      "type" : "string"
    },
    "likeCount" : {
      "type" : "number"
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
    "publicationDate" : {
      "type" : "number"
    },
    "sentimentMixed" : {
      "type" : "boolean"
    },
    "sentimentScore" : {
      "type" : "number"
    },
    "sourceDomain" : {
      "type" : "string"
    },
    "sourceName" : {
      "type" : "string"
    },
    "timestamp" : {
      "type" : "number"
    },
    "title" : {
      "type" : "string"
    },
    "url" : {
      "type" : "string"
    },
    "urlRoot" : {
      "type" : "string"
    },
    "versionIRI" : {
      "type" : "string"
    },
    "videoID" : {
      "type" : "string"
    }
  },
  "required" : [ "URI", "type" ],
  "additionalProperties" : false
} ];

 VITAL_JSON_SCHEMAS.push(vital_social_0_2_301_schema);