cpApp.service('userService', ('apiService',function(apiService){
    this.createUser = function(user){
        const url = "/signup"
        return apiService.post(url, user)
        .then(res=>{
            return res.data
        })
    }

    this.getCategories = function(role){
        const url = `/user/${role}/categories`;
        return apiService.get(url);
    }

    this.getActors = function(role, categories){
        const url = `/user/${role}`
        return apiService.get(url,{
            params:{
                categories
            }
        })
    }
}))