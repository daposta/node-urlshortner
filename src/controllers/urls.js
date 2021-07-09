const URL = require('../models/Url');
const shortid = require('shortid');
const validUrl = require('valid-url');

const createShortURL = async(req, res) => {

  const {fullUrl} = req.body;
  const urlCode = await shortid.generate();
  const baseUrl = process.env.BASE_URL;
  
  try{
    if(validUrl.isUri(fullUrl)){

      const existingurl = await URL.findOne({fullUrl})
      if(existingurl){
        return res.json(existingurl)
      }else{
        const shortUrl = baseUrl +'/api/v1/urls/' + urlCode;
        const newURL = await URL.create({
          shortUrl, urlCode, fullUrl
        })

        res.status(201).json({status: 'success', newURL: newURL})
      }
    }else{
      res.status(400).json('Invalid Long URL')
    }
  }catch(err){
    console.log(err)
    res.status(500).json('Server Error')
  }
  

};

const getURL = async(req, res) => {
  //get short url
  const urlCode = req.params.urlCode;
  const url = await URL.findOne({urlCode})
  if(url){
      res.status(200).redirect(url.fullUrl)
  }else{
    res.status(404).json('Can\'t find url')
  }
};

const getAllURLs = async(req, res) => {
  //get all urls in the db
  const urls = await URL.find();

  return res.status(200).json({status:'success', urls: urls })

};


module.exports = {
createShortURL, getURL, getAllURLs

}