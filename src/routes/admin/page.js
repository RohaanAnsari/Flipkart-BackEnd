const express = require('express');
const router = express.Router();
const { upload, adminMiddleware, requireSignin } = require('../../common-middleware');
const { createPage, getPage } = require('../../controllers/admin/page');

router.post('/page/create', requireSignin, adminMiddleware, upload.fields([
  { name: 'products' },
  { name: 'banners' }
]), createPage)

router.get('/page/:category/:type', getPage);

module.exports = router