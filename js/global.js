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