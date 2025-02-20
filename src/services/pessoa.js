const RepositoryPeople = require("../repository/pessoa");

const repository = new RepositoryPeople();

class ServicePeople{
    GetAll(){
        return repository.GetAll();
    }
    GetOne(index){
        return repository.GetOne(index);
    }
    Add(name){
        return repository.Add(name);
    }
    Update(index, name){
        return repository.GetOne(index, name);
    }
    Delete(index){
        return repository.GetOne(index);
    }
}

module.exports = ServicePeople;