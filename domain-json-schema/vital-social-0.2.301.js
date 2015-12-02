if(typeof(VITAL_JSON_SCHEMAS) == 'undefined') {
 throw ("No VITAL_JSON_SCHEMAS list defined - vital-core domain unavailable");
}

var vital_social_0_2_301_schema = {
  "domainURI" : "http://vital.ai/ontology/vital-social",
  "name" : "vital-social-0.2.301",
  "parents" : [ "http://vital.ai/ontology/vital-nlp" ],
  "schemas" : [ {
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasDmozPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLang" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceDomain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrlRoot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorID" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasFavoriteCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasTweetID" : {
        "type" : "number"
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
      "http://vital.ai/ontology/vital-core#hasTimestamp" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-core#hasVersionIRI" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-core#isActive" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-nlp#hasBody" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasDmozPath" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedText" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasExtractedTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasLang" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasPublicationDate" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSentimentScore" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceDomain" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasSourceName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasTitle" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrl" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#hasUrlRoot" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-nlp#isSentimentMixed" : {
        "type" : "boolean"
      },
      "http://vital.ai/ontology/vital-social#hasAuthorName" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasChannelID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasCommentID" : {
        "type" : "string"
      },
      "http://vital.ai/ontology/vital-social#hasLikeCount" : {
        "type" : "number"
      },
      "http://vital.ai/ontology/vital-social#hasVideoID" : {
        "type" : "string"
      }
    },
    "required" : [ "URI", "type" ],
    "additionalProperties" : false
  } ],
  "properties" : [ {
    "URI" : "http://vital.ai/ontology/vital-social#hasAuthorID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "authorID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasAuthorName",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet", "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "authorName",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasChannelID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "channelID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasCommentID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "commentID",
    "multipleValues" : false,
    "type" : "StringProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasFavoriteCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "favoriteCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasLikeCount",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "likeCount",
    "multipleValues" : false,
    "type" : "IntegerProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasTweetID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#Tweet" ],
    "shortName" : "tweetID",
    "multipleValues" : false,
    "type" : "LongProperty"
  }, {
    "URI" : "http://vital.ai/ontology/vital-social#hasVideoID",
    "domainClassesURIs" : [ "http://vital.ai/ontology/vital-social#YouTubeComment" ],
    "shortName" : "videoID",
    "multipleValues" : false,
    "type" : "StringProperty"
  } ]
};

 VITAL_JSON_SCHEMAS.push(vital_social_0_2_301_schema);