fusApp.controller('productCtrl', ['$scope', '$http', '$rootScope', '$state', function ($scope, $http, $rootScope, $state) {
	console.log("In Product Controller!");
	$rootScope.currentState = $state.current.name;

	$scope.oneAtATime = true;
	$scope.findUrStr == false;
	$scope.forU == false;
	$scope.brandU == false;

	$scope.groups = [{
		title: 'Findurstore',
		content: ["Findurstore, a part of Anstice Technologies Pvt Ltd., is in the business of enhancing customer touchpoints and improving the experience of customers during their shopping cycles.", "Our goal is to assist shoppers, make better and aware decisions with available choices for their purchases. Beginning with the intent of being able to reduce marketing chaos for end customers & brands alike, findurstore is the step in that direction.", "As part of the ever growing and fast paced retail market in India, we understand there is a gap to identify exact needs of a customer and help brands project the right content to the relevant audience, instead of the incessant spamming that’s called marketing today."],
		icon: 'ti-search',
		class: 'col-xs-12 col-sm-2 col-sm-offset-5 col-md-offset-5 col-md-2'
	},
	{
		title: 'For U',
		content: ["You know when your go to store has their best offers for you.", "You save more than you would have otherwise spent Save time and money on your shopping, coz you know what’s selling where.", "You want a better deal, well we’re listening, and we want to do just that for you and your loved ones.", "mart solution to reduce the humbug of going through multiple sites for offers on your purchases."],
		icon: 'ti-shopping-cart',
		class: 'col-xs-12 col-sm-12 col-md-5 margin-text-align prod-box-border'
	},
	{
		title: 'For brands',
		content: ["Targeted audience; you know what exactly you’re spending on instead of non measurable marketing techniques.", "Reach the right target audience who are looking to shop for your offering.", "Reach a sizeable larger audience.", "Intelligence to help you serve your customer better.", "Don’t pay to see your brand online, pay to help shoppers reach you offline,"],
		icon: 'ti-layout-grid3-alt',
		class: 'col-xs-12 col-sm-12 col-md-5 col-md-offset-2 prod-box-border'
	}

	];


	$(document).ready(function () {
		$("#MyModal").modal();
	});

	$scope.accordion = {
		current: null
	};

	$scope.accFunc = function (item) {
		console.log(item);
		$scope.accordion.current = item.name;
		$scope.accordion.show = !$scope.accordion.show;
	}

	$scope.getContent = function (type) {
		if (type == "fUrstore") {
			$scope.title1 = "Find Ur Store";
			$scope.content1 = "Findurstore, a part of Anstice Technologies Pvt Ltd., is in the business of enhancing customer touchpoints and improving the experience of customers during their shopping cycles., Our goal is to assist shoppers, make better and aware decisions with available choices for their purchases. Beginning with the intent of being able to reduce marketing chaos for end customers & brands alike, findurstore is the step in that direction., As part of the ever growing and fast paced retail market in India, we understand there is a gap to identify exact needs of a customer and help brands project the right content to the relevant audience, instead of the incessant spamming that’s called marketing today."
		
		} else if (type == "forU") {
			$scope.title1 = "For U";
			$scope.content1 = '<ul class="bullet-paragh"><li>You know when your go to store has their best offers for you.</li><li> You save more than you would have otherwise spent Save time and money on your shopping, coz you know what’s selling where.</li><li> You want a better deal, well we’re listening, and we want to do just that for you and your loved ones.</li><li> Smart solution to reduce the humbug of going through multiple sites for offers on your purchases.</li></ul>'
			
		} else if (type == "forBrands") {
			$scope.title1 = "Brands";
			$scope.content1 = 'Thanks for reaching here. You are now 1 step away from redefining experience for your Customers. Write to us<span><a class="email-class" href="mailto:team@findurstore.com"> @  team@findurstore.com</a></span>, and we will drop in to meet you'
			
		}

	}

	$scope.closePopup = function () {
		$scope.findUrStr = false;
		$scope.forU = false;
		$scope.brandU = false;
	}

	$scope.items = [{
		name: 'List 1',
		icon: 'ti-search',
		desc: "Findurstore, a part of Anstice Technologies Pvt Ltd., is in the business of enhancing customer touchpoints and improving the experience of customers during their shopping cycles."
	},
	{
		name: 'List 2',
		desc: "asdasd"
	},
	{
		name: 'List 3',
		desc: "asdasd"
	}
	];
}]);