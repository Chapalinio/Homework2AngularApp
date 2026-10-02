import { PasswordHeshingPipe } from './password-heshing-pipe';

describe('PasswordHeshingPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordHeshingPipe();
    expect(pipe).toBeTruthy();
  });
});
