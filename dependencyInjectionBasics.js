'use strict'
const assert = require('assert')

console.log('main.js')

function getAnimals(fetch, id) {
  return fetch('http://api.animalfarmgame.com/animals/' + id)
    .then(response => response.json())
    .then(data => data.results[0])
}

describe('getAnimals', () => {
  it('calls fetch with the correct url', () => {
    const fakeFetch = url => {
      assert(
        url ===
        'http://api.animalfarmgame.com/animals/123'
      )
      return new Promise(function(resolve) {})
    }

    getAnimals(fakeFetch, 123)
  })

  it('parse the response of fetch correctly', (done) => {
    const fakeFetch = () => {
      return Promise.resolve({
        json: () => Promise.resolve({
          results: [
            {
              name: 'fluffykins',
              type: 'robotdrabon'
            }
          ]
        })
      })
    }

    getAnimals(fakeFetch, 123)
      .then(result => {
        assert(result.name === 'fluffykins')
        done()
      })
  })
})
