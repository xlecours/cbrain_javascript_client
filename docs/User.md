# CbrainApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique numerical ID for the user. | [optional] 
**login** | **String** | UNIX-style username. | [optional] 
**password** | **String** | Password field | [optional] 
**passwordConfirmation** | **String** | Password field | [optional] 
**fullName** | **String** | Full name of the user. | [optional] 
**email** | **String** | email address of the user. | [optional] 
**type** | **String** | Class of the user, one of CoreAdmin, AdminUser, SiteManager or NormalUser. | [optional] 
**siteId** | **Number** | ID of the site affiliation for the user. Can be nil. | [optional] 
**lastConnectedAt** | **String** | time of last connection by the user. | [optional] 
**accountLocked** | **String** | Whether or not the account is locked. | [optional] 


