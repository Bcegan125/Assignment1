const HttpError = require('../utils/http-error');
const Packs = require('../models/packs');
const { response } = require('express');

const selectionController = {

  async getSelection(request, response, next) {
    let packs;
    try {
      packs = await Packs.find({});
    } catch (err) {
      const error = new HttpError(
        'Fetching pack selection failed, please try again later.',
        500
      );
      return next(error);
    }
    response.json({packs});
  }

};

module.exports = selectionController;