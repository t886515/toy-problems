/**
 * Initialize your data structure here.
 */

 // TODO: COME BACK TO DO THIS IN class FORMAT
 // ALSO DO THIS W/ User class, Tweet class, Linked List class
 
var Twitter = function() {
  this.tweetCollection = {};
  this.tweetFollowerCollection = {};
  this.allTweetsInOrderCollection = [];
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.tweetCollection[userId] = this.tweetCollection[userId] || [];
  const tweetObject = {
    tweetId,
    timestamp: new Date(),
    userId
  }
  this.tweetCollection[userId].push(tweetObject);
  this.allTweetsInOrderCollection.push(tweetObject);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const allFollowees = this.tweetFollowerCollection[userId] || [];
  const allCandidates = [userId].concat(allFollowees);

  const lastTenRelatedFeeds = [];
  let lastPointer = this.allTweetsInOrderCollection.length - 1;
  while (lastTenRelatedFeeds.length < 9 && this.allTweetsInOrderCollection[lastPointer]) {
    const currTweet = this.allTweetsInOrderCollection[lastPointer];
    if (allCandidates.includes(currTweet.userId)) {
      lastTenRelatedFeeds.push(currTweet);
    }
    lastPointer--;
  }

  return lastTenRelatedFeeds;
  // this.tweetCollection[userId] = this.tweetCollection[userId] || [];
  // const ownNewsFeed = this.tweetCollection[userId];
  // const followeeNewsFeedCollection = this.getFolloweeNewsFeed(userId);
  // return this.getLastTenNewsFeed(ownNewsFeed, followeeNewsFeedCollection);
};

Twitter.prototype.getLastTenNewsFeed = function(
  ownNewsFeed,
  followeeNewsFeedCollection
) {
  const allTweets = followeeNewsFeedCollection.reduce((acc, col) => {
    return acc.concat(col);
  }, ownNewsFeed);
  if (allTweets.length === 0) return [];
  const allTweetsSorted = allTweets
    .sort((a, b) => {
      console.log(a, b, a.timestamp.getTime(), b.timestamp.getTime());
      b.timestamp.getTime() - a.timestamp.getTime();
    })
    .slice(0, 10);

  return allTweetsSorted.map(({ tweetId }) => tweetId);
};

Twitter.prototype.getFolloweeNewsFeed = function(userId) {
  const allFollowees = this.tweetFollowerCollection[userId] || [];
  return allFollowees.map(followeeId => this.tweetCollection[followeeId] || []);
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  this.tweetFollowerCollection[followerId] =
    this.tweetFollowerCollection[followerId] || [];
  this.tweetFollowerCollection[followerId].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  const followersList = this.tweetFollowerCollection[followerId];
  if (followersList && followersList.includes(followeeId)) {
    followersList.splice(followersList.indexOf(followeeId), 1);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
