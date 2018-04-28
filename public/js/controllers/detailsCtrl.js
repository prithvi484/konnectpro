cpApp.controller('detailsCtrl', ['$scope', '$state', function ($scope, $state) {
    console.log("ABOUT details");

    

    $scope.detailData = {
        "title":"Naypunya Aesthetic Clinic",
        "subTitle":"Multi-speciality-clinic",
        "address":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
        "imgItems":[
            { "url": "images/doc.png" },
            { "url": "images/doc.png" },
            { "url": "images/doc.png" },
            { "url": "images/doc.png" },
            { "url": "images/doc.png" },
            { "url": "images/doc.png" }
        ]
    }

}]);