const ServicePeople = require("../services/pessoa");

const services = new ServicePeople();

class ControllerPeople {
    GetAll(_, res){
        try{
            const names = services.GetAll();
            res.status(200).json({ names });
        } catch(error){
            res.status(500).json({error: error.message });
        }
    }
    GetOne(req, res){
        try{
            const index = req.params.id;
            const name = services.GetOne(index);
            res.status(200).json({ name });
        } catch(error){
            res.status(500).json({error: error.message });
        }
    }
    Add(req, res){
        try{
            const name = req.body.name;
            services.Add(name);
            res.status(200).json("Add with success!");
        } catch(error){
            res.status(500).json({error: error.message });
        }
    }
    Update(req, res){
        try{
            const index = req.params.id;
            const name = req.body;
            services.Update(index, name);
            res.status(200).json("People update with success!");
        } catch(error){
            res.status(500).json({error: error.message });
        }
    }
    Delete(req, res){
        try{
            const index = req.params.id;
            services.Delete(index);
            res.status(200).json("People Deleting!");
        } catch(error){
            res.status(500).json({error: error.message });
        }
    }
}

module.exports = ControllerPeople;