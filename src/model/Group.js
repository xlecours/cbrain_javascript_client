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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CbrainApi) {
      root.CbrainApi = {};
    }
    root.CbrainApi.Group = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Group model module.
   * @module model/Group
   * @version 5.0.2
   */

  /**
   * Constructs a new <code>Group</code>.
   * @alias module:model/Group
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'Number');
      }
      if (data.hasOwnProperty('creator_id')) {
        obj['creator_id'] = ApiClient.convertToType(data['creator_id'], 'Number');
      }
      if (data.hasOwnProperty('invisible')) {
        obj['invisible'] = ApiClient.convertToType(data['invisible'], 'Boolean');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID number of the group.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the group.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Type of group.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * ID of the site associated with the group.
   * @member {Number} site_id
   */
  exports.prototype['site_id'] = undefined;
  /**
   * ID of the User who created the group. 
   * @member {Number} creator_id
   */
  exports.prototype['creator_id'] = undefined;
  /**
   * Specifies whether or not the group is visible to Normal Users. Invisible groups exist to specify levels of access to Userfiles, DataProviders and Bourreaux. 
   * @member {Boolean} invisible
   */
  exports.prototype['invisible'] = undefined;
  /**
   * Description of the group.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


