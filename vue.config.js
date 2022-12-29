const path = require("path");

module.exports = {
  outputDir:path.resolve(__dirname, "../src/main/resources/static/vue"),
  indexPath:"../../templates/vue/index.html",
  publicPath: '/',

  devServer: {
	  port:8081,
	    proxy: {
	      '/api': {
	        // '/api' 로 들어오면 포트 8080(스프링 서버)로 보낸다
	        target: 'http://localhost:8080',
	        //changeOrigin: true // cross origin 허용
          //disableHostCheck: true
	      	}
	      }
  },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
}
