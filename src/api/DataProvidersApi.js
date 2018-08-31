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
    define(['ApiClient', 'model/DataProvider', 'model/FileInfo', 'model/InlineResponse2002'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DataProvider'), require('../model/FileInfo'), require('../model/InlineResponse2002'));
  } else {
    // Browser globals (root is window)
    if (!root.CbrainApi) {
      root.CbrainApi = {};
    }
    root.CbrainApi.DataProvidersApi = factory(root.CbrainApi.ApiClient, root.CbrainApi.DataProvider, root.CbrainApi.FileInfo, root.CbrainApi.InlineResponse2002);
  }
}(this, function(ApiClient, DataProvider, FileInfo, InlineResponse2002) {
  'use strict';

  /**
   * DataProviders service.
   * @module api/DataProvidersApi
   * @version 5.0.2
   */

  /**
   * Constructs a new DataProvidersApi. 
   * @alias module:api/DataProvidersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the dataProvidersGet operation.
     * @callback module:api/DataProvidersApi~dataProvidersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/DataProvider>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of the Data Providers available to the current user.
     * This method returns a list of Data Provider objects that represent servers with disk space accessible for storing Userfiles. 
     * @param {module:api/DataProvidersApi~dataProvidersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/DataProvider>}
     */
    this.dataProvidersGet = function(callback) {
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
      var returnType = [DataProvider];

      return this.apiClient.callApi(
        '/data_providers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdBrowseGet operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdBrowseGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FileInfo>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List the files on a Data Provider.
     * This method allows the inspection of what files are present on a Data Provider specified by the ID parameter. Files that are not yet registered as Userfiles are visible using this method, as well as regularly accessible Userfiles. 
     * @param {Number} id The ID of the Data Provider to browse.
     * @param {module:api/DataProvidersApi~dataProvidersIdBrowseGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FileInfo>}
     */
    this.dataProvidersIdBrowseGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdBrowseGet");
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
      var returnType = [FileInfo];

      return this.apiClient.callApi(
        '/data_providers/{id}/browse', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdDeletePost operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdDeletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes unregistered files from a CBRAIN Data provider.
     * This method allows files that have not been registered from CBRAIN to be deleted. This may be necessary if files were uploaded in error, or if they were unregistered but not immediately deleted. 
     * @param {Number} id The ID of the Data Provider to delete files from.
     * @param {Array.<String>} basenames An array containing the filenames to delete.
     * @param {String} authenticityToken The token returned by /session/new
     * @param {Object} opts Optional parameters
     * @param {Number} opts.asUserId The ID of the user to delete files as.
     * @param {module:api/DataProvidersApi~dataProvidersIdDeletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.dataProvidersIdDeletePost = function(id, basenames, authenticityToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdDeletePost");
      }

      // verify the required parameter 'basenames' is set
      if (basenames === undefined || basenames === null) {
        throw new Error("Missing the required parameter 'basenames' when calling dataProvidersIdDeletePost");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling dataProvidersIdDeletePost");
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
        'basenames[]': this.apiClient.buildCollectionParam(basenames, 'multi'),
        'as_user_id': opts['asUserId'],
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data_providers/{id}/delete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdGet operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DataProvider} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information on a particular Data Provider.
     * This method returns a single Data Provider specified by the ID parameter 
     * @param {Number} id ID of the Data Provider to get information on.
     * @param {module:api/DataProvidersApi~dataProvidersIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DataProvider}
     */
    this.dataProvidersIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdGet");
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
      var returnType = DataProvider;

      return this.apiClient.callApi(
        '/data_providers/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdIsAliveGet operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdIsAliveGetCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pings a Data Provider to check if it&#39;s running.
     * This method allows the querying of a Data Provider specified by the ID parameter to see if it&#39;s running or not. 
     * @param {Number} id The ID of the Data Provider to query.
     * @param {module:api/DataProvidersApi~dataProvidersIdIsAliveGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.dataProvidersIdIsAliveGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdIsAliveGet");
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
      var returnType = 'String';

      return this.apiClient.callApi(
        '/data_providers/{id}/is_alive', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdRegisterPost operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers a file as a Userfile in CBRAIN.
     * This method allows new files to be added to CBRAIN. The files must first be transfered to the Data Provider via SFTP. For more information on SFTP file transfers, consult the CBRAIN Wiki documentation. Once files are present on the Data Provider, this method registers them in CBRAIN by specifying the file type. You can also specify to copy/move the files to another Data Provider after file registration. 
     * @param {Number} id The ID of the Data Provider to register files on.
     * @param {Array.<String>} basenames An array containing the filenames to register.
     * @param {Array.<String>} filetypes An array containing the filetypes associated with the files to register
     * @param {String} authenticityToken The token returned by /session/new
     * @param {module:api/DataProvidersApi~dataProvidersIdRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.dataProvidersIdRegisterPost = function(id, basenames, filetypes, authenticityToken, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdRegisterPost");
      }

      // verify the required parameter 'basenames' is set
      if (basenames === undefined || basenames === null) {
        throw new Error("Missing the required parameter 'basenames' when calling dataProvidersIdRegisterPost");
      }

      // verify the required parameter 'filetypes' is set
      if (filetypes === undefined || filetypes === null) {
        throw new Error("Missing the required parameter 'filetypes' when calling dataProvidersIdRegisterPost");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling dataProvidersIdRegisterPost");
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
        'basenames[]': this.apiClient.buildCollectionParam(basenames, 'multi'),
        'filetypes[]': this.apiClient.buildCollectionParam(filetypes, 'multi'),
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/data_providers/{id}/register', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the dataProvidersIdUnregisterPost operation.
     * @callback module:api/DataProvidersApi~dataProvidersIdUnregisterPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unregisters files as Userfile in CBRAIN.
     * This method allows files to be unregistered from CBRAIN. This will not delete the files, but removes them from the CBRAIN database, so Tools may no longer be run on them. 
     * @param {Number} id The ID of the Data Provider to unregister files from.
     * @param {Array.<String>} basenames An array containing the filenames to unregister.
     * @param {String} authenticityToken The token returned by /session/new
     * @param {Object} opts Optional parameters
     * @param {Number} opts.asUserId The ID of the user to unregister files as.
     * @param {Boolean} opts._delete Specifies to delete the files once they are unregistered. (default to true)
     * @param {module:api/DataProvidersApi~dataProvidersIdUnregisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.dataProvidersIdUnregisterPost = function(id, basenames, authenticityToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling dataProvidersIdUnregisterPost");
      }

      // verify the required parameter 'basenames' is set
      if (basenames === undefined || basenames === null) {
        throw new Error("Missing the required parameter 'basenames' when calling dataProvidersIdUnregisterPost");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling dataProvidersIdUnregisterPost");
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
        'basenames[]': this.apiClient.buildCollectionParam(basenames, 'multi'),
        'as_user_id': opts['asUserId'],
        'delete': opts['_delete'],
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/data_providers/{id}/unregister', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
