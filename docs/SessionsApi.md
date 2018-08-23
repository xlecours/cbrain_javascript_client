# CbrainApi.SessionsApi

All URIs are relative to *https://portal.cbrain.mcgill.ca*

Method | HTTP request | Description
------------- | ------------- | -------------
[**sessionDelete**](SessionsApi.md#sessionDelete) | **DELETE** /session | Destroy the session
[**sessionGet**](SessionsApi.md#sessionGet) | **GET** /session | Get session information
[**sessionNewGet**](SessionsApi.md#sessionNewGet) | **GET** /session/new | New session initiator
[**sessionPost**](SessionsApi.md#sessionPost) | **POST** /session | Create a new session


<a name="sessionDelete"></a>
# **sessionDelete**
> sessionDelete()

Destroy the session

This destroys the current session, effectively terminating the API&#39;s access to the service. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.SessionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.sessionDelete(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="sessionGet"></a>
# **sessionGet**
> InlineResponse2001 sessionGet()

Get session information

This returns information about the current session. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.SessionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="sessionNewGet"></a>
# **sessionNewGet**
> InlineResponse200 sessionNewGet()

New session initiator

This returns an object with the information necessary to create a new session. 

### Example
```javascript
var CbrainApi = require('cbrain_api');

var apiInstance = new CbrainApi.SessionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionNewGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="sessionPost"></a>
# **sessionPost**
> InlineResponse2002 sessionPost(login, password, authenticityToken)

Create a new session

This is the main entry point to create a CBRAIN session. Note that if a user is currently logged in, a new session will not be available to be created, and the current session will be re-used. 

### Example
```javascript
var CbrainApi = require('cbrain_api');

var apiInstance = new CbrainApi.SessionsApi();

var login = "admin"; // String | The username of the User trying to connect.

var password = "password_example"; // String | The CBRAIN User's password

var authenticityToken = "authenticityToken_example"; // String | The token returned by /session/new


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.sessionPost(login, password, authenticityToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | **String**| The username of the User trying to connect. | [default to admin]
 **password** | **String**| The CBRAIN User&#39;s password | 
 **authenticityToken** | **String**| The token returned by /session/new | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, application/xml

