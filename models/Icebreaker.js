'use strict';


class Icebreaker{
  question(){
    Question.Find()
  }
}

module.exports = IceBreaker;

const Question = require('models/Question.js');
