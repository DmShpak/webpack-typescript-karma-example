import helloWord from '../src/helloWord'

describe('hello word', () => {
    it('hello word should return hello word', () => {
        expect(helloWord()).toEqual('hello word')
    })
})