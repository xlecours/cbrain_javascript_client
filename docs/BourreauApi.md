# CbrainApi.BourreauApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bourreauxGet**](BourreauApi.md#bourreauxGet) | **GET** /bourreaux | Get a list of the Bourreaux available to be used by the current user.
[**bourreauxIdGet**](BourreauApi.md#bourreauxIdGet) | **GET** /bourreaux/{id} | Get information about a Bourreau.


<a name="bourreauxGet"></a>
# **bourreauxGet**
> [Bourreau] bourreauxGet()

Get a list of the Bourreaux available to be used by the current user.

This method returns a list of Bourreau objects. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.BourreauApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bourreauxGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Bourreau]**](Bourreau.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="bourreauxIdGet"></a>
# **bourreauxIdGet**
> Bourreau bourreauxIdGet(id)

Get information about a Bourreau.

This method returns a single Bourreau object based on the ID parameter. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.BourreauApi();

var id = 56; // Number | ID of the Bourreau to get information on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bourreauxIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the Bourreau to get information on. | 

### Return type

[**Bourreau**](Bourreau.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

