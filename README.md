<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# My CMS API - Based on NestJS

## Description

Api made with [Nest](https://github.com/nestjs/nest) for use in my personal projects.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Endpoints

### Users
- [ ] GET /users
- [ ] GET /users/:id
- [X] POST /users - Create a new user
- [ ] PUT /users/:id
- [ ] DELETE /users/:id

### Auth
- [X] POST /auth/login - Login and request a token
- [ ] POST /auth/logout

### Categories
- [ ] GET /categories
- [ ] GET /categories/:id
- [ ] POST /categories
- [ ] PUT /categories/:id
- [ ] DELETE /categories/:id

### Posts
- [ ] GET /posts
- [ ] GET /posts/:id
- [ ] POST /posts
- [ ] PUT /posts/:id
- [ ] DELETE /posts/:id

