var expect = require('chai').expect;
var starWars = require('./index');

describe('starwars-name', function(){
    describe('all', function(){
        it('should be an array strings',function(){
            expect(starWars.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(array){
                return array.every(function(item){
                    return typeof item === 'string';
                })
            }
        });

        it('should contain `Coffee',function(){
            expect(starWars.all).to.include('Coffee');
        })
    });

    describe('random',function(){
        it('should return a random item from the starWars.all',function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        })
    })
})