# PostableModel #

PostableModel is a BaseModel mixin which adds posting capabilities to models you create.

```javascript
class Group extends PostableModel(BaseModel) {
    constructor(doc){
        super(doc);
    }
}
```
## Methods ##

**addPost(body)** - Add a post connected to the model.

**posts(options)** - Retrieve the posts for the model. Signature of `options` param is the same as you would pass to `Collection.find()`.


# Post #
***Extends [BaseModel][1], Implements [CommentableModel][2] and [LikeableModel][3]***

Model for the record of each post on a connected Model.

## Methods ##

**poster()** - The user who added the post to the feed. Poster may return the same as user if the user created the post in their own feed.

**canRemove()** - Check if the user is allowed to delete the post. The poster and the owner can both delete the post.

**canUpdate()** - Check if the user is allowed to update the post. Only poster can change a post.

[1]: https://github.com/copleykj/socialize-base-model
[2]: https://github.com/copleykj/socialize-commentable
[3]: https://github.com/copleykj/socialize-likeable
