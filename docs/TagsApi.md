# CbrainApi.TagsApi

All URIs are relative to *https://portal.cbrain.mcgill.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tagsGet**](TagsApi.md#tagsGet) | **GET** /tags | Get a list of the tags currently in CBRAIN.
[**tagsIdDelete**](TagsApi.md#tagsIdDelete) | **DELETE** /tags/{id} | Delete a tag.
[**tagsIdGet**](TagsApi.md#tagsIdGet) | **GET** /tags/{id} | Get one tag.
[**tagsIdPut**](TagsApi.md#tagsIdPut) | **PUT** /tags/{id} | Update a tag.
[**tagsPost**](TagsApi.md#tagsPost) | **POST** /tags | Create a tag.


<a name="tagsGet"></a>
# **tagsGet**
> [Tag] tagsGet()

Get a list of the tags currently in CBRAIN.

This method returns a list of tag objects. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TagsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Tag]**](Tag.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tagsIdDelete"></a>
# **tagsIdDelete**
> tagsIdDelete(id, opts)

Delete a tag.

Delete the tag specified by the ID parameter.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TagsApi();

var id = 56; // Number | ID of the tag to delete.

var opts = { 
  'params': new CbrainApi.Params1() // Params1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tagsIdDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the tag to delete. | 
 **params** | [**Params1**](Params1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tagsIdGet"></a>
# **tagsIdGet**
> Tag tagsIdGet(id)

Get one tag.

Returns a single tag with the ID specified. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TagsApi();

var id = 56; // Number | The ID of the tag to get.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagsIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| The ID of the tag to get. | 

### Return type

[**Tag**](Tag.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="tagsIdPut"></a>
# **tagsIdPut**
> tagsIdPut(authenticityToken, id, opts)

Update a tag.

Update the tag specified by the ID parameter. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TagsApi();

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new

var id = 56; // Number | ID of the tag to update.

var opts = { 
  'tagName': "NewTagName", // String | The new name for the Tag.
  'tagGroupId': 1 // Number | The Group that the Tag will be used in.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tagsIdPut(authenticityToken, id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticityToken** | **String**| The token returned by /session/new | 
 **id** | **Number**| ID of the tag to update. | 
 **tagName** | **String**| The new name for the Tag. | [optional] [default to NewTagName]
 **tagGroupId** | **Number**| The Group that the Tag will be used in. | [optional] [default to 1]

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

<a name="tagsPost"></a>
# **tagsPost**
> Tag tagsPost(tagName, tagGroupId, authenticityToken)

Create a tag.

Create a new tag in CBRAIN. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.TagsApi();

var tagName = "NewTag"; // String | The name of the Tag. No spaces or special chars allowed.

var tagGroupId = 1; // Number | The Group that the Tag will be used in. All Users are part of Group 1

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tagsPost(tagName, tagGroupId, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagName** | **String**| The name of the Tag. No spaces or special chars allowed. | [default to NewTag]
 **tagGroupId** | **Number**| The Group that the Tag will be used in. All Users are part of Group 1 | [default to 1]
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

[**Tag**](Tag.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json, application/xml

