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
    root.CbrainApi.User = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('password_confirmation')) {
        obj['password_confirmation'] = ApiClient.convertToType(data['password_confirmation'], 'String');
      }
      if (data.hasOwnProperty('full_name')) {
        obj['full_name'] = ApiClient.convertToType(data['full_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('site_id')) {
        obj['site_id'] = ApiClient.convertToType(data['site_id'], 'Number');
      }
      if (data.hasOwnProperty('last_connected_at')) {
        obj['last_connected_at'] = ApiClient.convertToType(data['last_connected_at'], 'String');
      }
      if (data.hasOwnProperty('account_locked')) {
        obj['account_locked'] = ApiClient.convertToType(data['account_locked'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique numerical ID for the user.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * UNIX-style username.
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * Password field
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * Password field
   * @member {String} password_confirmation
   */
  exports.prototype['password_confirmation'] = undefined;
  /**
   * Full name of the user.
   * @member {String} full_name
   */
  exports.prototype['full_name'] = undefined;
  /**
   * email address of the user.
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Class of the user, one of CoreAdmin, AdminUser, SiteManager or NormalUser.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * ID of the site affiliation for the user. Can be nil.
   * @member {Number} site_id
   */
  exports.prototype['site_id'] = undefined;
  /**
   * time of last connection by the user.
   * @member {String} last_connected_at
   */
  exports.prototype['last_connected_at'] = undefined;
  /**
   * Whether or not the account is locked.
   * @member {String} account_locked
   */
  exports.prototype['account_locked'] = undefined;



  return exports;
}));

