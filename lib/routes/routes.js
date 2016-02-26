Router.route('/service/public',{where:'server'})
	// .option(function(req,resp){
	// 	resp.setHeader("Access-Control-Allow-Origin", "*");
	// 	resp.end('ok');
	// })
	.get(function(req,resp){
		resp.end('ok')
	})
	.post(function(req,resp){
		var resdata = {
		    "code": "0000",
		    "subcode": "",
		    "message": "",
		    "result": {
		        "productId": 13280095,
		        "code": "15112400097",
		        "productStatus": "DONE",
		        "amount": 300000,
		        "collectionMode": "每月等额本息",
		        "publishedAt": "2015-11-25 17:31:11",
		        "updatedAt": "2015-11-25 17:32:15",
		        "numOfInstalments": 36,
		        "intrestRateDisplay": 0.0861,
		        "newIntrestRateDisplay": "8.61%",
		        "productType": "LOAN_REQUEST",
		        "productNameDisplay": "稳盈-安e+",
		        "guaranteeType": "平安旗下担保",
		        "sourceType": "9",
		        "productCategory": "908",
		        "buyerTransactionFee": 0,
		        "investPeriodUnit": "个月",
		        "investPeriod": 36,
		        "remainingAmount": 0,
		        "minInvestAmount": 10000,
		        "maxInvestAmount": 300000,
		        "increaseInvestAmount": 1000,
		        "valueDate": "2015-11-24",
		        "lastCollectionDate": "",
		        "investPeriodDisplay": "36个月",
		        "shortPublishedAt": "2015-11-25",
		        "buyerUserName": "",
		        "lastUpdateTime": "2015-11-25 17:32:15",
		        "publishAtSecond": -7950570,
		        "salesChannel": "0",
		        "raisingHistory": [
		            {
		                "buyer": "a***s",
		                "amount": "300,000.00",
		                "time": "2015-11-25",
		                "flag": "0"
		            }
		        ],
		        "raisingStatement": "以下数据根据“投资金额30万元、期限36个月”计算，您的收益以实际到账为准。",
		        "tradingMode": "07",
		        "remainingSeconds": 0,
		        "adjustPrice": 0,
		        "priceAdjustmentFlag": "0",
		        "canTransferMinHoldingDays": 50,
		        "hidden": "true",
		        "investRewardInfo": [ ],
		        "newCoinProcessSwitch": "0",
		        "productFileList": [ ],
		        "progress": "1.0000",
		        "riskLevel": "1",
		        "riskLevelDisplay": "保守型",
		        "minInterestRate": 0,
		        "maxInterestRate": 1.25,
		        "disclaimer": "https://mapp.lu.com/mapp/contract/disclaimer",
		        "disclaimerName": "平台免责声明",
		        "riskVerifyTitile": "本金收益稳定",
		 
		         
		        //项目简介
		        "projectBrief":"“稳盈-安e+”服务是陆金所面向个人借款者和个人出借人推出的个人借贷中介服务。借贷双方通过“稳盈-安e+”服务可以快捷方便地达成借款交易并完成资金的借出和借入。在“稳盈-安e+”服务中，陆金所为借贷双方           提供中介服务，发布借款需求、管理借贷双方以及担保公司之间的借贷及担保活动、借贷资金的划拨。“稳盈-安e+”服务仅向符合中华人民共和国有关法律法规及陆金所相关规定的合格出借人和借款人提供。",
		        //预报单 待定
		    }
		}
		Meteor.setTimeout(function(){
			resp.setHeader("access-control-allow-origin", "*");
			resp.setHeader ('Content-Type','application/json');
			resp.end(JSON.stringify(resdata))
		},2000)
	})