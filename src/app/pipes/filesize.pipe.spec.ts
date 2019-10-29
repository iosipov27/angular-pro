import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesizePipe } from './filesize.pipe';

describe('FilesizePipe', () => {

  describe('Isolate FilesizePipe Test:', () => {
    const pipe = new FilesizePipe();

    it('should convert bytes to megabytes', () => {
      expect(pipe.transform(100, 'MB')).toBe('10000 MB');
    });
    it('should use default extension when not specified', () => {
      expect(pipe.transform(100)).toBe('10000 MB');
    });
    it('should override default extension', () => {
      expect(pipe.transform(100, 'Ext')).toBe('10000 Ext');
    });
  });

});
