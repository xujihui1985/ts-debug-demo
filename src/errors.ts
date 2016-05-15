'use strict';
export class MyError extends Error {
  code: number;
  description: string;
  
  constructor(message?: string) {
    super(message);
    this.description = 'this is a description';
  }
}
