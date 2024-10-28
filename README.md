# Backend API Specification


## REST Endpoints

|Sr. No. | Endpoint Name | Path | Method |
|---|----|--|--|
|1 | Singup|          `/signup`| - POST|
|2. |Login       |     - `/login`| - POST|
|3. |Create Task|- `/tasks` |  - POST
|4. |List all tasks| - `/tasks`| - GET
|5. |edit/update tasks| - `/tasks`| - PUT
|6. |Delete Tasks| - `/tasks` |     - DELETE
|7. |Filter tasks| - `/tasks?type=complete`| - GET


### Create Tasks

- PATH -  `/tasks`
- METHOD - POST
- BODY 
  
```json
{
    "title": "Buy Milk", // string
    "description":"",
    "priority":"Enum[High, Middle, Low]",
    "dueDate" : "date&time", // ISO Date Time
  
}
 ```

- RESPONSE
```json
{
    "success": true, // false
    "message" :  "Request successful.",
    "data": {
        "id": "task_id",
        "title": "Buy Milk",
        "description":"abc",
        "priority": "High",
        "dueDate": "",
    }
}
```

### GetTask
- PATH `/task`
- METHOD - GET
- RESPONSE 
```json
{
    "success":true,
    "tasks":[
     {
        "id":"task_id",
        "title":"Buy Milk",
        "description":"abc",
        "priority": "High",
        "dueDate":" ",
     },
    {
        "id": "task_id_2",
        "title": "Prepare Meeting",
        "description":"abc",
        "priority": "Low",
        "dueDate": " "
    }]

}
```
### Update-Task
- PATH: `/Task/:id`
- METHOD : PUT
- BODY :
```json
{     
     "id":"task_id",
     "title":"Buy Milk",
     "description":"abc",
     "priority": "High",
     "dueDate":" ",
}
```
-RESPONSE:
```json 
 {
       "success": true,   
       "message": "Task updated  successfully",
    "data": {
      "id": "task_1",
      "title": "Buy Milk",
      "description": "Buy milk from the grocery store",
      "priority": "High",
      "dueDate": "2024-10-22T12:00:00.000Z"
    }
}  
```
- ERROR RESPONSE
```json
{
  "success": false,
  "message": "Task not found"
}
```

### DELETE TASK
- PATH: `/task/:id`
- METHOD: DELETE
- RESPONSE
```json
{  
     "success": true,        
     "message": "Task deleted successfully",
   "data": {
     "id": "task_1",           
     "title": "Buy Milk",
     "description": "Buy milk from the grocery store",
     "priority": "High",
     "dueDate": "2024-10-22T12:00:00.000Z"
  }
}
```
- ERROR RESPONSE
```json
{
  "success": false,
  "message": "Task not found"
}
```


## Database Design

Task's collection : `tasks`
```json
{
    "_id": "ObjectId",  // related to collection user 
    "createdOn": "Date & time",
}
```



## Quereis




## UI Design

Tasks list

![task list](./src/docs/tasks_list.png)