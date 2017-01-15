// tab切换
function Tab(option){
    this.root=$(option.root);
    this.tabTag=this.root.find('#tabon li');//菜单栏
    this.hidden=this.root.find('.J_tabcon_item');//隐藏内容
    this.init();
}
Tab.prototype={
    init:function(){
        var that=this;
        this.tabTag.each(function(i){
            $(this).click(function(){
                that.tabTag.removeClass('active');
                $(this).addClass('active');
                that.hidden.eq(i).show().siblings().hide();
            })
        })
    }
};

// 分页
// function paging(selector,perPageNum) {
//     $("div.holder").jPages({
//         containerID  : selector,
//         first: '第1页',
//         last: '最后1页',
//         previous: '上一页',
//         next: '下一页',
//         perPage: perPageNum,  // 每页条数
//         startPage: 1,
//         startRange: 0,
//         midRange: 4,
//         endRange: 0,
//         animation: 'wobble',
//         keyBrowse: true,
//         callback: function(pages, items){
//             $(".holder").find(".jp-last").css("border-right", "none");
//             if(pages.current == 1) {
//                 $(".jp-previous").addClass("jp-hidden");
//             }else{
//                 $(".jp-previous").removeClass("jp-hidden");
//             }
//             if(pages.current == pages.count) {
//                 $(".jp-next").addClass("jp-hidden");
//             } else{
//                 $(".jp-next").removeClass("jp-hidden");
//             }
//         }
//     });
// }
