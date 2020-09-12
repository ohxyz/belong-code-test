# Cell Simulator Test

The project is created by `create-react-app` with some settings untouched.

## Demo

http://www.runademo.com/belong-code-test/

## Improvement thoughts

* At the time it generates the next state of cells, it examines all positions of the board. Because a cell only spawns when there are neighbours, an improvement can be done by defining a boundary of existing cells.
* Can use event delegation to bind `click` event to cell's parent.
* When create a new immutable state, other methods e.g `for loop` can be used instead of `JSON.parse` to improve speed.

## Install
```
npm i
```

## Develop
```
npm start
```

## Test
```
npm test
```