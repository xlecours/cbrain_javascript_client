# CbrainApi.TasksApi

All URIs are relative to *https://portal.cbrain.mcgill.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tasksGet**](TasksApi.md#tasksGet) | **GET** /tasks | Get the list of Tasks.
[**tasksIdDelete**](TasksApi.md#tasksIdDelete) | **DELETE** /tasks/{id} | Deletes a Task
[**tasksIdGet**](TasksApi.md#tasksIdGet) | **GET** /tasks/{id} | Get information on a Task.
[**tasksIdPut**](TasksApi.md#tasksIdPut) | **PUT** /tasks/{id} | Update information on a Task.
[**tasksPost**](TasksApi.md#tasksPost) | **POST** /tasks | Create a new Task.


<a name="tasksGet"></a>
# **tasksGet**
> [CbrainTask] tasksGet()

Get the list of Tasks.

This method returns the list of Tasks accessible to the current user. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TasksApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tasksGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[CbrainTask]**](CbrainTask.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tasksIdDelete"></a>
# **tasksIdDelete**
> tasksIdDelete(id, opts)

Deletes a Task

Deletes a Task from CBRAIN.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TasksApi();

var id = 56; // Number | The ID number of the Task to delete.

var opts = { 
  'authenticityToken': "authenticityToken_example" // String | The token returned by /session/new
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksIdDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Task to delete. | 
 **authenticityToken** | **String**| The token returned by /session/new | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tasksIdGet"></a>
# **tasksIdGet**
> tasksIdGet(id)

Get information on a Task.

This method returns information on a Task, including its status, Task restartability and information on where the results are kept. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TasksApi();

var id = 56; // Number | The ID number of the Task to delete.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Task to delete. | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tasksIdPut"></a>
# **tasksIdPut**
> tasksIdPut(id, cbrainTaskDescription, authenticityToken, opts)

Update information on a Task.

This method updates information about a Task in CBRAIN. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TasksApi();

var id = 56; // Number | The ID number of the Task to update.

var cbrainTaskDescription = "cbrainTaskDescription_example"; // String | Description of the Task.

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var opts = { 
  'cbrainTaskResultsDataProviderId': 1, // Number | ID of the DataProvider to store the results of the Task on.
  'cbrainTaskUserId': 56, // Number | ID of the User the Task should be associated with.
  'cbrainTaskGroupId': 1 // Number | ID of the Group the Task should be associated with.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksIdPut(id, cbrainTaskDescription, authenticityToken, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID number of the Task to update. | 
 **cbrainTaskDescription** | **String**| Description of the Task. | 
 **authenticityToken** | **String**| The token returned by /session/new | 
 **cbrainTaskResultsDataProviderId** | **Number**| ID of the DataProvider to store the results of the Task on. | [optional] [default to 1]
 **cbrainTaskUserId** | **Number**| ID of the User the Task should be associated with. | [optional] 
 **cbrainTaskGroupId** | **Number**| ID of the Group the Task should be associated with. | [optional] [default to 1]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tasksPost"></a>
# **tasksPost**
> tasksPost(parameters)

Create a new Task.

This method allows the creation of a new Task. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TasksApi();

var parameters = new CbrainApi.Parameters(); // Parameters | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tasksPost(parameters, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameters** | [**Parameters**](Parameters.md)|  | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

