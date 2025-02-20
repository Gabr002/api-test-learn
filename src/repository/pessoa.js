const database = Array("jhon", "ana", "kand");

class RepositoryPeople{
    GetAll(){
        return database;
    }
    GetOne(index){
        return database[index];
    }
    Add(name){
        database.push(name);

    }
    Update(index, name){
        database[index] = name; 
    }
    Delete(index){
        database.splice(1, index);
    }
}

module.exports = RepositoryPeople;