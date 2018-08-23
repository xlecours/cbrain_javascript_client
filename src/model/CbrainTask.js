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
    root.CbrainApi.CbrainTask = factory(root.CbrainApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CbrainTask model module.
   * @module model/CbrainTask
   * @version 4.5.1
   */

  /**
   * Constructs a new <code>CbrainTask</code>.
   * @alias module:model/CbrainTask
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>CbrainTask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CbrainTask} obj Optional instance to populate.
   * @return {module:model/CbrainTask} The populated <code>CbrainTask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('batch_id')) {
        obj['batch_id'] = ApiClient.convertToType(data['batch_id'], 'Number');
      }
      if (data.hasOwnProperty('cluster_jobid')) {
        obj['cluster_jobid'] = ApiClient.convertToType(data['cluster_jobid'], 'String');
      }
      if (data.hasOwnProperty('cluster_workdir')) {
        obj['cluster_workdir'] = ApiClient.convertToType(data['cluster_workdir'], 'String');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
      }
      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
      }
      if (data.hasOwnProperty('bourreau_id')) {
        obj['bourreau_id'] = ApiClient.convertToType(data['bourreau_id'], 'Number');
      }
      if (data.hasOwnProperty('prerequisites')) {
        obj['prerequisites'] = ApiClient.convertToType(data['prerequisites'], 'String');
      }
      if (data.hasOwnProperty('share_wd_tid')) {
        obj['share_wd_tid'] = ApiClient.convertToType(data['share_wd_tid'], 'Number');
      }
      if (data.hasOwnProperty('run_number')) {
        obj['run_number'] = ApiClient.convertToType(data['run_number'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('tool_config_id')) {
        obj['tool_config_id'] = ApiClient.convertToType(data['tool_config_id'], 'Number');
      }
      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'Number');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
      if (data.hasOwnProperty('results_data_provider_id')) {
        obj['results_data_provider_id'] = ApiClient.convertToType(data['results_data_provider_id'], 'Number');
      }
      if (data.hasOwnProperty('workdir_archived')) {
        obj['workdir_archived'] = ApiClient.convertToType(data['workdir_archived'], 'String');
      }
      if (data.hasOwnProperty('workdir_archive_userfile_id')) {
        obj['workdir_archive_userfile_id'] = ApiClient.convertToType(data['workdir_archive_userfile_id'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for the Task.
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * ID of the batch this task was launched as part of. Batches of tasks consist of the same task, with the same parameters, being run on many different input files.
   * @member {Number} batch_id
   */
  exports.prototype['batch_id'] = undefined;
  /**
   * ID of the task on the cluster associated with this task.
   * @member {String} cluster_jobid
   */
  exports.prototype['cluster_jobid'] = undefined;
  /**
   * Path on the cluster to the working directory.
   * @member {String} cluster_workdir
   */
  exports.prototype['cluster_workdir'] = undefined;
  /**
   * Parameters used as inputs to the scientific calculation associated with the task.
   * @member {String} params
   */
  exports.prototype['params'] = undefined;
  /**
   * Current status of the task.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date created.
   * @member {String} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Last updated.
   * @member {String} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * ID of the User who created the Task.
   * @member {Number} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * ID of the Bourreau the Task was launched on.
   * @member {Number} bourreau_id
   */
  exports.prototype['bourreau_id'] = undefined;
  /**
   * List of prerequisites.
   * @member {String} prerequisites
   */
  exports.prototype['prerequisites'] = undefined;
  /**
   * share_wd_tid
   * @member {Number} share_wd_tid
   */
  exports.prototype['share_wd_tid'] = undefined;
  /**
   * The number of attempts that it has taken to run the task.
   * @member {Number} run_number
   */
  exports.prototype['run_number'] = undefined;
  /**
   * ID of the group that this task is being run in.
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * ID number that specifies which Tool Config to use. The Tool Config specifies environment variables and other system-specific scripts necessary for the Task to be run in the target environment.
   * @member {Number} tool_config_id
   */
  exports.prototype['tool_config_id'] = undefined;
  /**
   * level
   * @member {Number} level
   */
  exports.prototype['level'] = undefined;
  /**
   * rank
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;
  /**
   * ID of the Data Provider that contains the Userfile that represents the results of the task.
   * @member {Number} results_data_provider_id
   */
  exports.prototype['results_data_provider_id'] = undefined;
  /**
   * Boolean variable that indicates whether the working directory of the task is available on the processing server or has been archived and is no longer accessible.
   * @member {String} workdir_archived
   */
  exports.prototype['workdir_archived'] = undefined;
  /**
   * ID of the userfile created as part of the archival process, if the task's working directory has been archived.
   * @member {Number} workdir_archive_userfile_id
   */
  exports.prototype['workdir_archive_userfile_id'] = undefined;



  return exports;
}));

