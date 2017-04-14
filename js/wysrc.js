/**
 * wysrc
 * @authors lize 
 * @date    2017-03-06 10:54:55
 * @version 1.0.0
 */

$(function(){
	var Main={
		init: function(){
			this.modifyInfo();
			this.occurAlert();
			this.closeAlert();
			this.bugSubmitAlert();
			this.newListRank();
			this.goBack();
		},
		//修改个人信息
		modifyInfo: function(){
			$('#J_MemberCenter .J_ModifyInfo').on('click',function(){
				$(this).hide();
				$('#J_MemberCenter .J_InfoShow').hide();
				$('#J_MemberCenter .J_InfoModifyArea').show();
				$('#J_MemberCenter .J_SelfInfo').css('margin-top','70px');
			});
			$('#J_MemberCenter .J_CancelInfoModify').on('click',function(){
				$(this).parent().hide();
				$('#J_MemberCenter .J_InfoShow').show();
				$('#J_MemberCenter .J_ModifyInfo').show();
			});

		},
		//全部提现弹框
		occurAlert: function(){
			$('#J_MemberCenter .J_Withdraw').on('click',function(){
				$('#J_WithModal').show();
			});
		},
		//关闭弹框
		closeAlert: function(){
			$('.J_Close').on('click',function(){
				$(this).parent().parent().hide();
			});
			$('#J_WithModal .J_WithdrawCancel').on('click',function(){
				$('#J_WithModal').hide();
			});
		},
		//提交漏洞没有登录则弹出提示,判断登录状态
		bugSubmitAlert: function(){
			$('.J_BugSubmit').on('click',function(){
				$('#J_BugMask').show();
			});
		},
		//精选新闻排序前三加logo
		newListRank: function(){
			var numbers = $('.J_SelectList .number-tag');
			if(numbers && numbers.length > 0){
				for (var i = 0; i<3; i++) {
					numbers[i].innerText = "";
					var no = i + 1;
					numbers[i].style.backgroundImage = 'url(./img/'+ no +'.png)';
				}
			}
		},
		//点击新闻详情页返回按钮回到新闻列表主页
		goBack: function(){
			$('.J_BackToNews').on('click',function(){
				window.location.href = "file:///Users/lizhien/src-lize/news.html";
			});
		}


	};
	Main.init();
});