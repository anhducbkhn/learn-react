/**
 * Created by AnhDuc on 1/30/16.
 */
//Install marked https://github.com/chjj/marked
var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');

ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('example')
);

var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: false});
        return { __html: rawMarkup };
    },

    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt"> This is one comment </Comment>
                <Comment author="Jordan">This is another comment</Comment>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hello, world!, I am a CommentForm
            </div>
        );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(<CommentBox />, document.getElementById('comment-box'));
