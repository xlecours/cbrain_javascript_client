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
    root.CbrainApi.Params1 = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Params1 model module.
   * @module model/Params1
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>Params1</code>.
   * @alias module:model/Params1
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Params1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params1} obj Optional instance to populate.
   * @return {module:model/Params1} The populated <code>Params1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authenticity_token')) {
        obj['authenticity_token'] = ApiClient.convertToType(data['authenticity_token'], 'String');
      }
    }
    return obj;
  }

  /**
   * The token returned by /session/new.
   * @member {String} authenticity_token
   */
  exports.prototype['authenticity_token'] = undefined;



  return exports;
}));


