import React from 'react';
import HttpUtil from '../Helper/HttpUtil';
import SearchBar from '../Components/SearchBar';
import UrlList from '../Helper/UrlList';

const So = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return {
            tab: 1,
            url:'/spider/list',
            keyWord:'',
            pageNum:1,
            list: [],
            firstInFlag:0,
            scrollCounter:0,
            prevScrollCounter:0
        }
    },


    onTouchEnd(){
        console.log("onTouchEnd");
    },

    onScrollEnd() {
        console.log("onScrollEnd");
    },

    jumpPage(){
        "use strict";
        this.context.router.push('/addFastDelegate');
    },
    componentDidMount(){
        let that = this;

        if(this.state.firstInFlag == 0){
            HttpUtil.post(UrlList.soList, null, this.loadData);
            this.state.firstInFlag =1;
        }
        HttpUtil.post(UrlList.soList, null, this.loadData);

        // 触发
        window.addEventListener('scroll', this.orderScroll);

    },

    orderScroll() {
        var header = this.refs.header;
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        console.log("scrollTop:"+scrollTop);
        if(scrollTop<700){
            console.log("trscroll");
        }else if(scrollTop>700){
            console.log("ryuxscroll");
        }
        if(scrollTop<-10){
            console.log("okilscroll");
        }

        let self = this;
        console.log("this.state.scrollCounter:"+this.state.scrollCounter);
        console.log("this.state.prevScrollCounter:"+this.state.prevScrollCounter);
        if((this.state.scrollCounter-this.state.prevScrollCounter)>100){
            this.state.prevScrollCounter= this.state.scrollCounter;
            this.myEntrust();
        }
        this.state.scrollCounter = scrollTop;
    },

    myEntrust(){
        "use strict";
        let self = this;
        let pageNumCal = self.state.pageNum+1;
        console.log("pageNumCal");
        console.log(pageNumCal);
        let url = self.state.url+"?keyWord="+self.state.keyWord+"&pageNum="+pageNumCal+"&subjectType=WEB";
        console.log("myEntrust url:"+url);
        HttpUtil.post(url, null, this.loadData);
        self.setState({ tab:1, pageNum:pageNumCal});
    },

    funny(){
        "use strict";
        let self = this;
        let pageNumCal = self.state.pageNum+1;
        console.log("pageNumCal");
        console.log(pageNumCal);
        let url = self.state.url+"?keyWord="+self.state.keyWord+"&pageNum="+pageNumCal+"&subjectType=FUN";
        HttpUtil.post(url, null, this.loadDataUnConcat);
        self.setState({ tab:2, pageNum:pageNumCal});
    },

    talkBar(){
        "use strict";
        this.setState({
            tab: 3,
        });
    },

    getListFuzzy(inputKeyWord){
        console.log("getListFuzzy:inputKeyWord"+inputKeyWord);
        "use strict";
        let self = this;
        let pageNumCal = self.state.pageNum+1;
        let url = self.state.url+"?keyWord="+inputKeyWord+"&pageNum="+pageNumCal+"&subjectType=WEB";
        console.log("getListFuzzy url:"+url);
        HttpUtil.post(url, null, this.loadDataUnConcat);
        self.setState({ tab:1, pageNum:1, keyWord:inputKeyWord});
    },
    nullValueCallback(){
        "use strict";
        let self = this;
        self.setState({tab:1, keyWord:'', pageNum:0});
        this.myEntrust();
    },

    loadData(result, data){
        let self = this;
        console.log("loadData result:", result);
        console.log("data:", data)
        console.log("loadData data.body:", data.body);
        if (result) {
            this.setState({ list:self.state.list.concat(data.body)});
        }
    },

    loadDataUnConcat(result, data){
        let self = this;
        console.log("loadDataUnConcat result:", result);
        console.log("loadDataUnConcat data.body:", data.body);
        if (result) {
            console.log("data.body:"+data.body);
            console.log("data:"+data);
            this.setState({ list:data.body});
        }
    },
    render(){
        let sList = this.state.list;
        console.log("iuy");
        let list = sList.map((e, i)=> {
            "use strict";
            console.log("xiuytx");
            let imageSrc = "http://www.dahansoft.com:8041/spider-search/spider/soImage?imageId="+e.imageId;
            if(null != e.imageId){
                return (
                    <section className="crmhome mt10" key={i}>
                        <div className="w100 p15">
                            <a href={e.url}><span className="hometitle" >{e.title}</span></a>
                        </div>
                        <div className="w100 p15">
                            <div className="left w20">
                                <img src={imageSrc} className="photoStyle"/>
                            </div>
                            <div className="right w80">
                                <p className="homesubtitle">{e.summary}</p>
                            </div>
                        </div>
                        <div className="w100 p15">
                            <a href={e.url}><span className="homeurl" href={e.url}>{e.url}</span></a>
                        </div>

                        <div id="userOrder" ref="userOrder">
                            <div></div>
                        </div>

                    </section>
                )
            }else{
                return (
                    <section className="crmhome mt10" key={i}>
                        <div className="w100 p15">
                            <a href={e.url}><span className="hometitle" >{e.title}</span></a>
                        </div>
                        <div className="w100 p15">
                            <div className="right w100">
                                <p className="homesubtitle">{e.summary}</p>
                            </div>
                        </div>
                        <div className="w100 p15">
                            <a href={e.url}><span className="homeurl" href={e.url}>{e.url}</span></a>
                        </div>
                    </section>
                )
            }

        });

        return (
            <div>




                <div className="fast_nav_height">
                    <SearchBar searchCallback={this.getListFuzzy} nullValueCallback={this.nullValueCallback}/>
                    <section className="delegate_search">
                        <div className="flux h25 ">
                            <div
                                className={(this.state.tab == 1 ? "item_focus " : "item_unFocus ") + ("flex-item item1 rline line_h30 fastF12")}
                                onClick={this.myEntrust}>搜索结果
                            </div>
                            <div
                                className={(this.state.tab == 2 ? "item_focus " : "item_unFocus ") + ("flex-item item1 rline line_h30 fastF12")}
                                onClick={this.funny}>个性推荐
                            </div>
                            <div
                                className={(this.state.tab == 3 ? "item_focus " : "item_unFocus ") + ("flex-item item1 rline line_h30 fastF12")}
                                onClick={this.funny}>历史足迹
                            </div>
                            <div
                                className={(this.state.tab == 4 ? "item_focus " : "item_unFocus ") + ("flex-item item1  line_h30 fastF12")}
                                onClick={this.talkBar}>收藏夹
                            </div>
                        </div>
                    </section>
                </div>

                <div className="mt60">
                    {list}
                </div>
            </div>
        );
    }
});

export default So;