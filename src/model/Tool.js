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
    root.CbrainApi.Tool = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Tool model module.
   * @module model/Tool
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>Tool</code>.
   * @alias module:model/Tool
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Tool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tool} obj Optional instance to populate.
   * @return {module:model/Tool} The populated <code>Tool</code> instance.
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
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('cbrain_task_class_name')) {
        obj['cbrain_task_class_name'] = ApiClient.convertToType(data['cbrain_task_class_name'], 'String');
      }
      if (data.hasOwnProperty('select_menu_text')) {
        obj['select_menu_text'] = ApiClient.convertToType(data['select_menu_text'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the Tool.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name of the Tool.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Creator of the Tool.
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * Group that has access to the Tool.
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * Category of the Tool
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * The name of the Task class that will be created when jobs are launched using the Tool.
   * @member {String} cbrain_task_class_name
   */
  exports.prototype['cbrain_task_class_name'] = undefined;
  /**
   * Text that appears for Tool selection.
   * @member {String} select_menu_text
   */
  exports.prototype['select_menu_text'] = undefined;
  /**
   * Description of the Tool.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * URL of the website that describes the Tool and possibly has code for the Tool.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;



  return exports;
}));


