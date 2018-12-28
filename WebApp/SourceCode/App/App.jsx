import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, IndexRoute, Route, Router} from 'react-router';
import HttpUtil from './Helper/HttpUtil';
import Strings from './Helper/Strings';
import Images from './Helper/Images';
import StorageUtil from './Helper/StorageUtil';
import UrlList from './Helper/UrlList';
import DateTimeTransForm from './Helper/DateTimeTransform';
import Preloader from './Helper/Preloader';
import SetTimeOut from './Mixin/SetTimeOut';
import TranslationText from './Helper/TranslationText';
import So from './Pages/So.jsx';

//duration
require('../../../UI/HTML/css/main.css');
require('../../../UI/HTML/css/css.css');
require('../../../UI/HTML/css/weui.min.css');

const appNode = document.getElementById('app');
window.mySpider = {
    Http: HttpUtil,
    Strings: Strings,
    Images: Images,
    StorageUtil: StorageUtil,
    UrlList : UrlList,
    DateTimeTransForm:DateTimeTransForm,
    Preloader:Preloader,
    TranslationText:TranslationText,
};

const App = React.createClass({

    mixins:[SetTimeOut],
   
    getInitialState(){
        return({
            login:0,
            text:''
        })
    },

    componentDidMount(){
        let self = this;
        let initialUrl = window.location.href;

        let index = initialUrl.indexOf('#');
        let url = initialUrl;
        if (index != -1){
            url = initialUrl.substring(0,index);
        }
        window.LoginUrl = url;
        window.canLoginForError = true;
        self.login();
    },

    showPreloader(){

    },

    hidePreloader(){

    },

    successCallBack(){
        let self = this
    },

    login(){
        let self = this;  
        self.showPreloader();
    },

    loadDate(result, data){
        console.log("data:");
        console.log(JSON.stringify(data));
    },

    render(){
            return (
                <div className="appContent">{this.props.children}</div>
            );
    }
});

const routes = (
    <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={So}/>
            <Route path="so" component={So}/>
        </Route>
    </Router>
);

ReactDOM.render(routes, appNode);