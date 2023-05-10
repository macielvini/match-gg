## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

`@POST /players`

create a new player or update an existing one by its name and tag

required body

```json
{
  "name": "john",
  "tag": "doe",
  "rankId": "uuid"
}
```

`@GET /players/all`

returns a list of all players

`@PATCH /players`

update player activity, should be updated every minute to keep the player active for other players when searching

> required headers:

```
id: playerId
```

`@GET /ranks`

returns a list of all ranks

`@GET /matches`

returns a list of matches history

- optional headers:

  ```
  id: playerId
  ```

  returns a list of matches history by player's id
