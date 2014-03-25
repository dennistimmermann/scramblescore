var assert = require('assert')
var scramblescore = require('../index')

describe('scramblescore', function () {
  describe('#score', function () {
    it('should return 0 when input and control are equal', function( ) {
      assert.equal(0, scramblescore.score('thisisjustatest', 'thisisjustatest'))
      assert.equal(0, scramblescore.score('this one got spaces', 'this one got spaces'))
      assert.equal(0, scramblescore.score('and double letttters', 'and double letttters'))
    })

    it('should return 1 when only two letters are swapped', function () {
      assert.equal(1, scramblescore.score('scramblescoer', 'scramblescore'))
    })

    // it('should return 2 when a letter is two away from its place', function () {
    //   assert.equal(2, scramblescore.score('scrambeslcore', 'scramblescore'))
    // })

    it('should return 2 when a there are two places with swapped letters', function () {
      assert.equal(2, scramblescore.score('srcamlbescore', 'scramblescore'))
    })
  })

  describe('#test', function () {
    it('should return false wenn there is a maxscore of 1 but there are two places with scrambled letters', function () {
      assert.equal(false, scramblescore.test('ocsmso', 'cosmos', 1))
    })

    it('should return true wenn there is a maxscore of 0 and there are no scrambled letters', function () {
      assert.equal(true, scramblescore.test('universe', 'universe', 0))
    })
  })
})
