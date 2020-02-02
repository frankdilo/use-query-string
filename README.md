# useQueryString

#### 🙋‍♂️ Made by [@frankdilo](https://twitter.com/frankdilo)

## Install

```
npm install use-query-string
yard add use-query-string
```

## Basic usage

```jsx
import useQueryString from "use-query-string";

const username = useQueryString("username");
```

## Transformers

Transformers allow you to modify the value you get from `useQueryString`. They are functions that receive the raw query string value and return a transformed version.

Here is an example:

```jsx
import useQueryString from "use-query-string";

const id = useQueryString("id", parseInt);
```
