import React from 'react';

const SearchBar = React.createClass({
    componentDidMount(){
        let self = this;

        // $('#container').on('focus', '#search_input', function () {
        //     var $weuiSearchBar = $('#search_bar');
        //     $weuiSearchBar.addClass('weui_search_focusing');
        // }).on('blur', '#search_input', function () {
        //     var $weuiSearchBar = $('#search_bar');
        //     $weuiSearchBar.removeClass('weui_search_focusing');
        //     if ($(this).val()) {
        //         $('#search_text').hide();
        //     } else {
        //         $('#search_text').show();
        //     }
        // }).on('input', '#search_input', function (e) {
        //     console.log("test8901");
        //     console.log(e.target.value);
        //     if (e.target.value == '') {
        //         // 输入框空值回调
        //         if (self.props.nullValueCallback) {
        //             self.props.nullValueCallback(e.target.value);
        //         } else {
        //             return;
        //         }
        //     } else {
        //         let value = '';
        //         let penddingHandleValue = $('#search_input').val();
        //         value = penddingHandleValue
        //         let selectionStart = e.target.selectionStart;
        //         let selectionEnd = e.target.selectionEnd;
        //         if (selectionStart == selectionEnd){
        //             let mid = value.replace(/[^\a-zA-Z\u4E00-\u9FA5\d]/g,'');
        //             $('#search_input').val(mid)
        //         }
        //         let searchText = $('#search_input').val();
        //         self.props.searchCallback(searchText);
        //         return;
        //     }
        // }).on('touchend', '#search_confirm', function (e) {
        //     // e.preventDefault();
        //     console.log("test0090");
        //     let searchText = $('#search_input').val();
        //     self.props.searchCallback(searchText);
        //     // return false;
        // }).on('touchend', '#search_clear', function (e) {
        //     console.log("test0091");
        //     // 输入框空值回调
        //     if (self.props.nullValueCallback) {
        //         self.props.nullValueCallback('');
        //     }
        //     $("#search_show").hide();
        //     $('#search_input').val('');
        // });
        // $('form').submit(this.onSubmit);
    },

    onSubmit(e) {
        e.preventDefault();
        // let self=this;
        // let searchText = $('#search_input').val();
        // self.props.searchCallback(searchText);
        return false;
    },

    render(){
        let self = this;
        return (
            <div id="container" className="searchbararea">
                <div className="weui_search_bar" id="search_bar">
                    <form className="weui_search_outer">
                        <div className="weui_search_inner">
                            <i className="weui_icon_search"></i>
                            <input className="weui_search_input" id="search_input"
                                   placeholder="搜索"/>
                            <a href="javascript:" className="weui_icon_clear" id="search_clear"></a>
                        </div>
                        <label htmlFor="search_input" className="weui_search_text" id="search_text">
                            <i className="weui_icon_search"></i>
                            <span>搜索</span>
                        </label>
                    </form>
                    <a href="javascript:" className="weui_search_cancel" id="search_confirm">确定</a>
                </div>
            </div>
        );
    }
});

export default SearchBar;
