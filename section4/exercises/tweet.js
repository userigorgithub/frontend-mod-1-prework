/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  moreLikes() {
    this.numberOfLikes = 888;
  }
  moreComments() {
    this.comments = "Hello?";
  }
};
var generalTweet = new Tweet("Igor", "My Day", "July 23, 2021, 6:30 PM", "777", []);

generalTweet.moreLikes();
generalTweet.moreComments();
console.log(generalTweet);
