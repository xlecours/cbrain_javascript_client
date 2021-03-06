/**
 * CBRAIN API
 * REST API for interacting with the CBRAIN Platform
 *
 * OpenAPI spec version: 5.0.2
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.CbrainApi) {
      root.CbrainApi = {};
    }
    root.CbrainApi.TagsApi = factory(root.CbrainApi.ApiClient, root.CbrainApi.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 5.0.2
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the tagsGet operation.
     * @callback module:api/TagsApi~tagsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Tag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of the tags currently in CBRAIN.
     * This method returns a list of tag objects. 
     * @param {module:api/TagsApi~tagsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Tag>}
     */
    this.tagsGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = [Tag];

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagsIdDelete operation.
     * @callback module:api/TagsApi~tagsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag.
     * Delete the tag specified by the ID parameter.
     * @param {Number} id ID of the tag to delete.
     * @param {module:api/TagsApi~tagsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.tagsIdDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tagsIdDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tags/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagsIdGet operation.
     * @callback module:api/TagsApi~tagsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get one tag.
     * Returns a single tag with the ID specified. 
     * @param {Number} id The ID of the tag to get.
     * @param {module:api/TagsApi~tagsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.tagsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tagsIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Tag;

      return this.apiClient.callApi(
        '/tags/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagsIdPut operation.
     * @callback module:api/TagsApi~tagsIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a tag.
     * Update the tag specified by the ID parameter. 
     * @param {Number} id ID of the tag to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.tagName The new name for the Tag. (default to NewTagName)
     * @param {Number} opts.tagGroupId The Group that the Tag will be used in. (default to 1)
     * @param {module:api/TagsApi~tagsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.tagsIdPut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling tagsIdPut");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'tag[name]': opts['tagName'],
        'tag[group_id]': opts['tagGroupId']
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/tags/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the tagsPost operation.
     * @callback module:api/TagsApi~tagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Tag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a tag.
     * Create a new tag in CBRAIN. 
     * @param {String} tagName The name of the Tag. No spaces or special chars allowed.
     * @param {Number} tagGroupId The Group that the Tag will be used in. All Users are part of Group 1
     * @param {module:api/TagsApi~tagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Tag}
     */
    this.tagsPost = function(tagName, tagGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling tagsPost");
      }

      // verify the required parameter 'tagGroupId' is set
      if (tagGroupId === undefined || tagGroupId === null) {
        throw new Error("Missing the required parameter 'tagGroupId' when calling tagsPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'tag[name]': tagName,
        'tag[group_id]': tagGroupId
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Tag;

      return this.apiClient.callApi(
        '/tags', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
