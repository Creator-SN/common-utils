import { expect } from 'chai';
import { DOMUtil } from '../src/DOMUtil';

describe('DomUtils', () => {
  describe('getBoundingComputer', () => {
    it('block', () => {
      let div = document.createElement('div');
      div.style.display = 'block';
      div.style.width = '50px';
      div.style.height = '500px';
      div.style.transform = 'scale(2)';
      document.body.appendChild(div);
      let rect = DOMUtil.getBoundingClientRect(div);
      expect(rect.width).to.equal(100);
      expect(rect.height).to.equal(1000);
      document.body.removeChild(div);
    });
    it('none', () => {
      let div = document.createElement('div');
      div.style.display = 'none';
      div.style.width = '50px';
      div.style.height = '500px';
      div.style.transform = 'scale(2)';
      document.body.appendChild(div);
      let rect = DOMUtil.getBoundingClientRect(div);
      expect(rect.width).to.equal(100);
      expect(rect.height).to.equal(1000);
      document.body.removeChild(div);
    });
  });
});
