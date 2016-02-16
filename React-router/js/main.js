/**
 * Created by AnhDuc on 2/16/16.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var Application = React.createClass({
    render: function() {
        switch (this.props.path) {
            case '/' :
                return <div><h1>Index Page</h1></div>;
            case '/page1' :
                return <div><h1>Page1</h1></div>
            case '/page2':
                return <div><h1>Page2</h1></div>
            default:
                return <div>Error Page</div>
        }
    }
});

function renderElement(path)
{
    ReactDOM.render(<Application path={path} />, document.getElementById('app'));
}

var Link = React.createClass({

    handleClick: function(event) {
        console.log(this.props.path);
        renderElement(this.props.path);
        history.pushState(null, null, this.props.path);
    },
    render: function() {
        return (
            <a onClick={this.handleClick} path={this.props.path}>
                {this.props.text}
            </a>
        )
    }
});

var Menu = React.createClass({
    render: function() {
        return (
            <ul>
                <li><Link path="/" text="/homepage"/></li>
                <li><Link path="/page1" text="/page1"/></li>
                <li><Link path="/page2" text="/page2"/></li>
            </ul>
        );
    }
});
ReactDOM.render(<Menu />, document.getElementById('menu'));




