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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CbrainApi) {
      root.CbrainApi = {};
    }
    root.CbrainApi.Tag = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tag model module.
   * @module model/Tag
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tag} obj Optional instance to populate.
   * @return {module:model/Tag} The populated <code>Tag</code> instance.
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
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the tag
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the tag. This holds all the information about what the tag is supposed to indicate about your files. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The ID of the user that the tag belongs to. 
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * The ID of the group that the tag belongs to. 
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;



  return exports;
}));


