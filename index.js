'use strict'
module.exports = {
  hooks: {
    "page": function (page) {
      page.content = page.content.replace(/\.md/g,'.html').replace(/\%20/g,' ')
      return page;
    }
  }
}
