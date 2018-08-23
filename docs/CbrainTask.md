# CbrainApi.CbrainTask

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | Unique identifier for the Task. | [optional] 
**batchId** | **Number** | ID of the batch this task was launched as part of. Batches of tasks consist of the same task, with the same parameters, being run on many different input files. | [optional] 
**clusterJobid** | **String** | ID of the task on the cluster associated with this task. | [optional] 
**clusterWorkdir** | **String** | Path on the cluster to the working directory. | [optional] 
**params** | **String** | Parameters used as inputs to the scientific calculation associated with the task. | [optional] 
**status** | **String** | Current status of the task. | [optional] 
**createdAt** | **String** | Date created. | [optional] 
**updatedAt** | **String** | Last updated. | [optional] 
**userId** | **Number** | ID of the User who created the Task. | [optional] 
**bourreauId** | **Number** | ID of the Bourreau the Task was launched on. | [optional] 
**prerequisites** | **String** | List of prerequisites. | [optional] 
**shareWdTid** | **Number** | share_wd_tid | [optional] 
**runNumber** | **Number** | The number of attempts that it has taken to run the task. | [optional] 
**groupId** | **Number** | ID of the group that this task is being run in. | [optional] 
**toolConfigId** | **Number** | ID number that specifies which Tool Config to use. The Tool Config specifies environment variables and other system-specific scripts necessary for the Task to be run in the target environment. | [optional] 
**level** | **Number** | level | [optional] 
**rank** | **Number** | rank | [optional] 
**resultsDataProviderId** | **Number** | ID of the Data Provider that contains the Userfile that represents the results of the task. | [optional] 
**workdirArchived** | **String** | Boolean variable that indicates whether the working directory of the task is available on the processing server or has been archived and is no longer accessible. | [optional] 
**workdirArchiveUserfileId** | **Number** | ID of the userfile created as part of the archival process, if the task&#39;s working directory has been archived. | [optional] 


