/**
 * CBRAIN API
 * Interface to control CBRAIN operations
 *
 * OpenAPI spec version: 4.5.1
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
  if (typeof define === 'function' && false) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Group'));
  } else {
    // Browser globals (root is window)
    if (!root.CbrainApi) {
      root.CbrainApi = {};
    }
    root.CbrainApi.GroupsApi = factory(root.CbrainApi.ApiClient, root.CbrainApi.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 4.5.1
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the groupsGet operation.
     * @callback module:api/GroupsApi~groupsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Group>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of the Groups (projects) available to the current user.
     * This method returns a list of all of the groups that the current user has access to. 
     * @param {module:api/GroupsApi~groupsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Group>}
     */
    this.groupsGet = function(callback) {
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
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = [Group];

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsIdDelete operation.
     * @callback module:api/GroupsApi~groupsIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a Group (project).
     * This method allows the removal of Groups (projects) that are no longer necessary. Groups that have Userfiles associated with them may not be deleted. 
     * @param {Number} id ID of the Group to delete.
     * @param {String} authenticityToken The token returned by /session/new
     * @param {module:api/GroupsApi~groupsIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsIdDelete = function(id, authenticityToken, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsIdDelete");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling groupsIdDelete");
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
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsIdGet operation.
     * @callback module:api/GroupsApi~groupsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information on a Group (project).
     * This method returns information on a single Group (project), specified by the ID parameter. Information returned includes the list of Users who are members of the group, the ID of the Site the Group is part of, and whether or not the group is visible to Regular Users. 
     * @param {Number} id ID of the Group to get information on.
     * @param {module:api/GroupsApi~groupsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.groupsIdGet = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsIdGet");
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
      var contentTypes = [];
      var accepts = ['application/json', 'application/xml'];
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsIdPut operation.
     * @callback module:api/GroupsApi~groupsIdPutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the properties of a Group (project).
     * This method allows the properties of a Group (project) to be updated. This includes the User membership, the ID of the site the Group belongs to, and the visibility status of the group to Regular Users. 
     * @param {Number} id ID of the Group to be updated.
     * @param {Object} opts Optional parameters
     * @param {String} opts.groupName The new name of the Group. (default to NewGroupName)
     * @param {String} opts.groupDescription The description of the new Group. (default to This project will group all of the files for a large neuroscience study to figure out how the brain works once and for all.)
     * @param {Number} opts.groupSiteId The ID of the site associated with the Group.
     * @param {Boolean} opts.groupInvisible Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources. (default to false)
     * @param {Array.<Number>} opts.groupUserIds An array of IDs of Users that will be members of the new Group. (default to [1])
     * @param {module:api/GroupsApi~groupsIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsIdPut = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsIdPut");
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
        'group[name]': opts['groupName'],
        'group[description]': opts['groupDescription'],
        'group[site_id]': opts['groupSiteId'],
        'group[invisible]': opts['groupInvisible'],
        'group[user_ids]': this.apiClient.buildCollectionParam(opts['groupUserIds'], 'multi')
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/{id}', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsPost operation.
     * @callback module:api/GroupsApi~groupsPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new Group.
     * This method creates a new Group, which allows users to organize their files and tasks. 
     * @param {String} groupName The name of the new Group.
     * @param {String} groupDescription The description of the new Group.
     * @param {String} authenticityToken The token returned by /session/new
     * @param {Object} opts Optional parameters
     * @param {Number} opts.groupSiteId The ID of the site associated with the Group.
     * @param {Boolean} opts.groupInvisible Specifies whether to make the group invisible or not. Invisible groups exist solely to control access to resources. (default to false)
     * @param {Array.<Number>} opts.groupUserIds An array of IDs of Users that will be members of the new Group. (default to [1])
     * @param {module:api/GroupsApi~groupsPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsPost = function(groupName, groupDescription, authenticityToken, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupName' is set
      if (groupName === undefined || groupName === null) {
        throw new Error("Missing the required parameter 'groupName' when calling groupsPost");
      }

      // verify the required parameter 'groupDescription' is set
      if (groupDescription === undefined || groupDescription === null) {
        throw new Error("Missing the required parameter 'groupDescription' when calling groupsPost");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling groupsPost");
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
        'group[name]': groupName,
        'group[description]': groupDescription,
        'group[site_id]': opts['groupSiteId'],
        'group[invisible]': opts['groupInvisible'],
        'group[user_ids]': this.apiClient.buildCollectionParam(opts['groupUserIds'], 'multi'),
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the groupsSwitchPost operation.
     * @callback module:api/GroupsApi~groupsSwitchPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Switches the active group.
     * This method switches the active Group to a new one. This is useful if the analysis that the user is performing is for different projects, and involves separate Userfiles and Tasks. 
     * @param {Number} id ID number of the Group to switch to
     * @param {String} authenticityToken The token returned by /session/new
     * @param {module:api/GroupsApi~groupsSwitchPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.groupsSwitchPost = function(id, authenticityToken, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling groupsSwitchPost");
      }

      // verify the required parameter 'authenticityToken' is set
      if (authenticityToken === undefined || authenticityToken === null) {
        throw new Error("Missing the required parameter 'authenticityToken' when calling groupsSwitchPost");
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
        'id': id,
        'authenticity_token': authenticityToken
      };

      var authNames = ['BrainPortalSession'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'application/xml'];
      var returnType = null;

      return this.apiClient.callApi(
        '/groups/switch', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
