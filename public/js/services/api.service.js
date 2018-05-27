cpApp.service('apiService', ('$http',function($http){
    this.get = function(url,query){
        return $http.get(url, query)
        .then(res=>{
            return res.data;
        });
    }

    this.post = function(url, data){
        return $http.post(url, data)
    }
}))