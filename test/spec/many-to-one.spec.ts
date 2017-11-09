import {} from 'jasmine';
import { CapivaraManyToOne } from '../../src/index'

describe('first test', () => {    
    it('test', () => {
        expect(true).toBe(true);
    });
    
    it('test class', () => {
        expect(new CapivaraManyToOne().test()).toBe('test');
    })
});