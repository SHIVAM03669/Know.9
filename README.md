Let's get started with the problem statement 

### Project Setup:
- Please clone this github repo link : [Link](https://github.com/Kalvium-Program/task_list)
- It contains two folders Frontend and backend.
- Please setup the complete project using `npm init` in your local system.


### Boiler plate code:
You are give an task management project where you display all your tasks.  

**Frontend:** 

- In frontend you are give an `Homepage.jsx` file inside components folder that contain home page code that will display All the tasks added and have an form to add new tasks.
- You have `TaskCard.jsx` that contain taskcard code to display all the tasks in homepage.
- Both `App.jsx` and `main.jsx` files are already completed you dont need to make any changes.

**Backend:**

- Inside `index.js` file you are given basic express server code running on port 3000.
- Given an code that will connect to mongodb atlas.
- Give an `get` endpoint that will send all the tasks to in response to display in homepage.
- You are give `TaskSchema` inside `Task.js` file inside `schemas` folder.


## deliverables

**Frontend:** 

- You are give and `TaskForm.jsx` file inside `components` folder.
-  Inside this file you need to create an Frontend form that will take the inputs for the `TaskCard`. 
- You need to write and `onsubmit` function for the form that will verify all the fields are not empty and  send all the input data to backend endpoint.
- Please refer to the Task schema inside backend to get idea about the input fields.
- You need to complete the `TaskForm` function inside `TaskForm.jsx` only.


**Backend:**
- Inside `.env` file you need to add MongoDB atlas connection string and verify MongoDB connected.
- Inside `index.js` file you need to create an new endpoint that will receive data from the form and store it inside MongoDB collection using Task schema.
- You just need to make sure that no field is empty.

Finally when you fill the form and click on submit the new task should be displayed on home screen if you made form and endpoint correctly .

## Submission Guidelines

1. **Initialize Git Repository** in your project folder.
2. **Create a `.gitignore`** file and add `node_modules/`.
3. **Commit and Push** your code to a GitHub repository.
4. **Verify** that `node_modules` is excluded.
5. **Download** the repository as a ZIP file from GitHub.
6. **Upload** the ZIP file to the submission portal.
