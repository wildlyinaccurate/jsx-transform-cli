# jsx-transform-cli

[![Build Status](https://travis-ci.org/wildlyinaccurate/jsx-transform-cli.svg?branch=master)](https://travis-ci.org/wildlyinaccurate/jsx-transform-cli)

A command line interface for [jsx-transform](https://github.com/alexmingoia/jsx-transform).

## Installation

Install it globally with:

```
$ npm install -g jsx-transform-cli
```

Or within a project for use as an NPM script:

```
$ npm install --save-dev jsx-transform-cli
```

## Usage

JSX is read from STDIN. Compiled JS is written to STDOUT.

```
$ echo '<div>Hello, world!</div>' | jsx-transform
h('div', null, ["Hello, world!"])
```

Specify a factory function with `-f` or `--factory`.

```
$ echo '<div>Hello, world!</div>' | jsx-transform --factory React.createElement
React.createElement('div', null, ["Hello, world!"])
```
