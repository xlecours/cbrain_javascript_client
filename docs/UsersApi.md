# CbrainApi.UsersApi

All URIs are relative to *http://localhost:3001*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Returns all of the users in CBRAIN.
[**usersIdDelete**](UsersApi.md#usersIdDelete) | **DELETE** /users/{id} | Deletes a CBRAIN user
[**usersIdGet**](UsersApi.md#usersIdGet) | **GET** /users/{id} | Returns information about a user
[**usersIdPatch**](UsersApi.md#usersIdPatch) | **PATCH** /users/{id} | Update information about a user
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a new user in CBRAIN.


<a name="usersGet"></a>
# **usersGet**
> [User] usersGet()

Returns all of the users in CBRAIN.

Returns all of the users registered in CBRAIN, as well as information on their permissions and group/site memberships.

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="usersIdDelete"></a>
# **usersIdDelete**
> usersIdDelete(id)

Deletes a CBRAIN user

Deletes a CBRAIN User from the database 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UsersApi();

var id = 56; // Number | ID of user to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.usersIdDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user to update | 

### Return type

null (empty response body)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="usersIdGet"></a>
# **usersIdGet**
> User usersIdGet(id)

Returns information about a user

Returns the information about the user associated with the ID given in argument. A normal user only has access to her own information, while an administrator or site manager can have access to a larger set of users. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UsersApi();

var id = 56; // Number | ID of the user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of the user | 

### Return type

[**User**](User.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="usersIdPatch"></a>
# **usersIdPatch**
> User usersIdPatch(id, user, opts)

Update information about a user

Updates the information about a user 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UsersApi();

var id = 56; // Number | ID of user to update

var user = new CbrainApi.User1(); // User1 | An object representing any parameter of the user that you would like to alter, only put ones that you would like to change.

var opts = { 
  'forcePasswordReset': false // Boolean | Boolean to force a password change
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersIdPatch(id, user, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| ID of user to update | 
 **user** | [**User1**](User1.md)| An object representing any parameter of the user that you would like to alter, only put ones that you would like to change. | 
 **forcePasswordReset** | **Boolean**| Boolean to force a password change | [optional] [default to false]

### Return type

[**User**](User.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

<a name="usersPost"></a>
# **usersPost**
> User usersPost(opts)

Create a new user in CBRAIN.

Creates a new user in CBRAIN. 

### Example
```javascript
var CbrainApi = require('cbrain_api');
var defaultClient = CbrainApi.ApiClient.instance;

// Configure API key authorization: BrainPortalSession
var BrainPortalSession = defaultClient.authentications['BrainPortalSession'];
BrainPortalSession.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BrainPortalSession.apiKeyPrefix = 'Token';

var apiInstance = new CbrainApi.UsersApi();

var opts = { 
  'user': new CbrainApi.User(), // User | An object representing a new User and the autenticity token.
  'noPasswordResetNeeded': 0 // Number | Do you want to force the user to reset their password upon first login
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| An object representing a new User and the autenticity token. | [optional] 
 **noPasswordResetNeeded** | **Number**| Do you want to force the user to reset their password upon first login | [optional] [default to 0]

### Return type

[**User**](User.md)

### Authorization

[BrainPortalSession](../README.md#BrainPortalSession)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json, application/xml

