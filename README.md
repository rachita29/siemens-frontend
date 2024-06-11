# SchoolExamApp
====================
## Description
  1. ## { path: 'login', component: LoginComponent } 
  Redirects to login component: user gets authenticated if correct credentials are provided and gets redirected either to student-home or teacher-home depending on the role selected during registration

  2. ## { path: 'register', component: RegisterComponent }
  Redirects to registration component: user needs to fill basic details to register

  3. ## { path: 'teacher-home', component: TeacherHomeComponent }
  Redirects to teacher's component: Home screen for examiner/teacher, user with role as teacher can add classes and subject and upload question bank as csv in the application
  
  4. ## { path: 'student-home', component: StudentHomeComponent }
  Redirects to student's component: Home screen for student, user with role as student can view question bank and see results as pdf in the application


## High-Level Design
Frontend: Angular for UI, Angular Material for styling.

## Frontend Setup
1. Navigate to the frontend directory.
2. Install dependencies: npm install
3. Start the development server: ng serve

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
