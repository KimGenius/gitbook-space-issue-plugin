'use strict'
module.exports = {
  hooks: {
    "page": function (page) {
      page.content = page.content.replace('.md','.html').replace('%20',' ')
      return page;
    }
  }
}
