function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let resultString = `Post: ${this.title}\nContent: ${this.content}\nRating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                resultString += `\nComments:\n * ${this.comments.join('\n * ')}`;
            }
            return resultString;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }
        view(){
            this.views++;
            return this;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }
    return {Post, SocialMediaPost, BlogPost}
}

let posts = solve();

// let post = new posts.Post('jojo', 'jojoba');
// console.log(post.toString())
let scm = new posts.SocialMediaPost('typ post', 'ot typ user tolkoz', 33, 123);
scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
