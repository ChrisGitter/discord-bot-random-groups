# Discord Bot Random Groups

Randomly groups together people from your current discord channel

## how to install

1. Create a discord app at https://discord.com/developers/applications
2. Add a bot to your application to get your `TOKEN`
3. `yarn build` the app on your server
4. Start the node server (`yarn start` or `node lib`), passing the token through one of the following
    - .env file at root level with a `TOKEN=...` value
    - environment variable, e.g. `TOKEN=... node lib`
    - node cli argument, e.g. `node lib --TOKEN ...`
5. Invite the bot to your server, using the bot ID from your discord developers console

## how to use

After inviting the bot, type this command in your discord channel

```
!rgroups
```

This will create group all the people of the channel together in groups with size of two.

### how to change the group size

```
!rgroups -s 5
```

### how to omit people from grouping

```
!rgroups -e Person1 Person2
```

This will group everyone _except_ Person1 and Person2 together. When using spaces or special chars in names, wrap the name in quotes. E.e.

```
!rgroups -e "Person One" "Person Two"
```
