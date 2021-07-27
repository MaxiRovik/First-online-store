const {Basket, BasketDevice} = require('../models/models');
const ApiError = require('../error/ApiError');


class BasketController {
    async createBasket(req, res) {
        const {userId}= req.body;
        const data = await Basket.create({userId});
        return res.json(data)
    } ;

    async addDeviceToBasket(req, res, ) {

        const{basketId, deviceId} = req.body;
        const data = await BasketDevice.create({basketId, deviceId});

        return res.json(data)
    }

    async getAll(req, res) {
        const device = await BasketDevice.findAll();
        return res.json(device)
    };

    async deleteOneItem(req, res) {

        const {deviceId} = req.params;
            const deletedItem = await BasketDevice.destroy({where: {deviceId}});

            return res.json(deletedItem)

    };
};

module.exports = new BasketController();