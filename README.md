# FS1010: Pokédex

In this assignment you are given a partially complete web page used to search for images of exact names of Pokémon. For example if `ditto` is searched for, an image of Ditto should appear as well as its name underneath. If a search is made that yields no results, the page's image and label underneath it should reset back to its original state.

***The only file that requires modification is [`public/main.js`](https://github.com/York-U-Fullstack-FS1010/pokedex/blob/master/public/main.js).***


## Setup

1. Fork this repository by clicking on the _Fork_ button on the top right of this repositories GitHub page. ([Forking a repo](https://help.github.com/articles/fork-a-repo/#fork-an-example-repository))
1. [Clone the repository](https://help.github.com/articles/cloning-a-repository/)
1. Run `npm install` in the repository from the command line.
1. Run `npm start` whenever you wish to start work on the project and navigate to the provided URLs.


## Instructions

Modify the [`public/main.js`](https://github.com/York-U-Fullstack-FS1010/pokedex/blob/master/public/main.js) and complete each task mentioned in comments beginning with _TODO_. Each requirement is also listed here to ensure none are overlooked:
1. Get DOM node for `<img>` element **(1 mark)**
1. Get DOM node for `<h1>` under `<img>` **(1 mark)**
1. Get value from search input **(1 mark)**
1. Use `query` to create valid URL as seen in above example **(2 marks)**
1. On success use the data from the response to:
	1. Change `pokemonImage` `src` attribute to the `front_default` sprite **(1 mark)**
	1. Change `pokemonImage` `alt` attribute to the pokemon name **(1 mark)**
	1. Change `pokemonLabel` text to the pokemon name **(1 mark)**

### **Total:** 8 marks


## Resources

- [Using Fetch](https://devdocs.io/dom/fetch_api/using_fetch)
- [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
