
# Task List MERN App

This is a web-based Task List application built using the MERN (MongoDB, Express.js, React, Node.js) stack


## Table of Contents
- [Description](#description)
- [Dependencies](#dependencies)
- [Local Deployment](#deployment)
- [Features](#features)


### Description
I rely heavily on Todoist app as a part of my daily routine. It has been my primary tool for managing tasks and staying organized.The concept and design of this tasklist website were heavily inspired by Todoist. The app's simplicity and effectiveness motivated me to create a similar experience for myself and others.
In this app, I covered some advanced topics like JWT Authentication with AccessToken and RefreshToken ,Axios interceptor , caching ,toast notifiaction ,react-hook-form validation with zod , datepicker,search,filtering etc









### Dependencies
| Frontend Packages           | Backend Packages        |
|-----------------------------|-------------------------|
| @hookform/resolvers: 3.3.2  | bcrypt: 5.1.1           |
| @tailwindcss/forms: 0.5.6   | cookie-parser: 1.4.6    |
| @tanstack/react-query: 5.4.3 | cors: 2.8.5             |
| axios: 1.6.0               | dotenv: 16.3.1          |
| date-fns: 2.30.0           | express: 4.18.2         |
| lucide-react: 0.291.0      | jsonwebtoken: 9.0.2     |
| next: 14.0.1              | mongoose: 8.0.0         |
| react: 18                  | pino: 8.16.1            |
| react-cookie: 6.1.1        | pino-pretty: 10.2.3     |
| react-day-picker: 8.9.1   |                         |
| react-dom: 18              |                         |
| react-hook-form: 7.47.0   |                         |
| react-toastify: 9.1.3     |                         |
| tailwind-merge: 2.0.0     |                         |
| zod: 3.22.4                |                         |
| zustand: 4.4.6             |                         |

| Dev Dependencies              | Dev Dependencies       |
|------------------------------|------------------------|
| @hookform/devtools: 4.3.1    | nodemon: 3.0.1        |
| @tanstack/eslint-plugin-query: 5.0.5 |                   |
| autoprefixer: 10.0.1         |                       |
| daisyui: 3.9.4               |                       |
| eslint: 8                    |                       |
| eslint-config-next: 14.0.1   |                       |
| postcss: 8                   |                       |
| tailwindcss: 3.3.0           |                       |

### Local Deployment
- __clone the github link__
```bash
  git clone https://github.com/SheikhArman100/Task-List-MERN-App.git
```
- __go to the project folder__
```bash
  cd Task-List-MERN-App
```
- __For frontend part__
```bash
  cd frontend
  npm intsall
```
&nbsp; &nbsp; &nbsp; __create .env.local file.Add this__

`NEXT_PUBLIC_BASE_URL`=http://localhost:3500/api &nbsp; &nbsp; &nbsp;**Note: backend url**

&nbsp; &nbsp; &nbsp; __run the frontend__
```bash
  npm run dev
```
- __For backend part__
```bash
  cd backend
  npm install
  
```
&nbsp; &nbsp; &nbsp; __create .env file  and add these values__

`PORT`=3500

`ORIGIN`=http://localhost:3000 &nbsp; &nbsp; &nbsp; **Note: frontend url**

`MONGO_URL`= 

`ACCESS_TOKEN_SECRET`=6ec8bbaf361fa7fe3227768a792aff420bf9746befaeed9fe9c375a5ba2d7440
`REFRESH_TOKEN_SECRET`=1bbfd8aa2421b99e43a0d406c2632cb48d5f892460c36beee164aa9764a58ffd

`NODE_VERSION`=18.18.0

&nbsp; &nbsp; &nbsp; __Now run the backend__
```bash
 npm run dev
```







## Features

__Backend__

- MongoDB for data storage ad mongoose for schema
- Password hashing
- Using JSONWEBTOKEN to create access token and refresh token
- storing cookie in httpOnly secured stoarage
- frontend httpOnly cookie access
- update access token using refresh token
- Dynamically access user info using middleware by decoding access token
- Role Authorization
- see all the routes [Postman link](https://warped-zodiac-72434.postman.co/workspace/New-Team-Workspace~492f40e7-418b-4f1a-ab4d-7ad4fd632812/collection/20344907-6dd3714d-aab2-415b-8551-324933421c80?action=share&creator=20344907)

__Frontend__
- making sure only verified user can access dashboard
- Nextjs new server and client components
- Signup and Signin page with validation using react-hook-form and zod
- Axios interceptors to send access token with every request to access personal tasks and info .This make sure that coreect person gets correct dat.It also automatically update accesstokenater expiration using refresh token
- create task with validation using react-hook-form and zod. Here i used beautiful DatePicker with customize DatePicker
- pop-up modal using daisyui
- show update info and error using react-toastify
- add to completed task
- add to imortant task
- delete task with confirmation modal
- filtering tasks
- search task using backend query perameter
- used react-query to fetch and mutation suing its caching ability
- signout feature
- zustand for state management
- react-hook-form advanced feature Controller to get datepicker value




## Screenshots

![Sign in](https://drive.google.com/uc?export=view&id=1hvoI53Tv8fjtcafoiSUxuNocBwFIdUSG)

![My Image](https://drive.google.com/uc?export=view&id=1MCXDh3aBhv_Rb_t1-kmlhfY-AW4sJOt-)




## Contact Me

If you have any questions, suggestions, or need assistance with this project, feel free to reach out to me. I'm always happy to help.

- **Email**: [sheikharman100@gmail.com](sheikharman100@gmail.com)
- **GitHub**: [https://github.com/SheikhArman100](https://github.com/SheikhArman100)
- **LinkedIn**: [www.linkedin.com/in/sheikharman100](www.linkedin.com/in/sheikharman100)

