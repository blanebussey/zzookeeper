app.get("/animals", (req, res) => {
    const { query, params } = req;
    const animals = Animal.find();
    const filterAnimals = filterByQuery(query, animals);
    return filterAnimals;
  });
  
  /**
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  
  /**
   * filter helper function will get a query object passed in from a controller
   * @param {{query: {diet?: string, species?: string, name?: string}}} query 
   * @param {Array<{diet: string, species: string, name: string}>} animalsArray 
   * @returns {Array<{diet: string, species: string, name: string}>}
   */
  function filterByQuery(query, animalsArray) {
    // 
    let filteredResults = animalsArray;
    if (query.diet) {
      // array.filter()
      //reassign filteredResults with animals where the animal.diet is the same as the query.diet
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
      filteredResults = filteredResults.filter(function(animal) {
        return animal.diet === query.diet
      });
    }
    if (query.species) {
      //reassign filteredResults with animals where the animal.species is the same as the query.species
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      //return animals where the animal.name is the same as the query.name
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    // return the filtered results to whoever asked for it...
    return filteredResults;
  }