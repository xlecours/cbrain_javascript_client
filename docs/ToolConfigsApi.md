# CbrainApi.ToolConfigsApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**toolConfigsGet**](ToolConfigsApi.md#toolConfigsGet) | **GET** /tool_configs | Get a list of tool versions installed.
[**toolConfigsIdGet**](ToolConfigsApi.md#toolConfigsIdGet) | **GET** /tool_configs/{id} | Get information about a particular tool configuration


<a name="toolConfigsGet"></a>
# **toolConfigsGet**
> [ToolConfig] toolConfigsGet()

Get a list of tool versions installed.

This method returns a list of tool config objects. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.ToolConfigsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolConfigsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ToolConfig]**](ToolConfig.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="toolConfigsIdGet"></a>
# **toolConfigsIdGet**
> ToolConfig toolConfigsIdGet(id)

Get information about a particular tool configuration

Returns the information about how a particular configuration of a tool on an execution server. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.ToolConfigsApi();

var id = 56; // Number | the ID of the configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.toolConfigsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| the ID of the configuration | 

### Return type

[**ToolConfig**](ToolConfig.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

