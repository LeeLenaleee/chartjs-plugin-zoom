(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{422:function(e,t,i){"use strict";i.r(t);var a=i(55),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"click-to-zoom"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#click-to-zoom"}},[e._v("#")]),e._v(" Click to Zoom")]),e._v(" "),i("div",{staticClass:"custom-block tip"},[i("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),i("p",[e._v("The following text is there on purpose, so the page is scrollable.\nThis demoes that the chart does not consume the wheel until clicked.")])]),e._v(" "),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum velit euismod. Elit pellentesque habitant morbi tristique senectus et netus. Consectetur adipiscing elit pellentesque habitant morbi. Id faucibus nisl tincidunt eget nullam non nisi est sit. Blandit turpis cursus in hac habitasse. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Ornare massa eget egestas purus. A diam sollicitudin tempor id eu nisl nunc. Augue mauris augue neque gravida in fermentum et sollicitudin. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Habitant morbi tristique senectus et netus et malesuada. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Gravida dictum fusce ut placerat orci nulla pellentesque.")]),e._v(" "),i("p",[e._v("Semper viverra nam libero justo laoreet sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo laoreet sit amet. Magna ac placerat vestibulum lectus mauris ultrices eros. Dolor purus non enim praesent elementum facilisis leo vel. Enim eu turpis egestas pretium aenean pharetra. Vitae purus faucibus ornare suspendisse sed nisi lacus. Senectus et netus et malesuada fames. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Accumsan lacus vel facilisis volutpat. Lectus quam id leo in vitae turpis massa. Cras sed felis eget velit aliquet. Volutpat maecenas volutpat blandit aliquam.")]),e._v(" "),i("p",[e._v("Volutpat lacus laoreet non curabitur. Diam donec adipiscing tristique risus. Fusce id velit ut tortor pretium viverra suspendisse. Dui ut ornare lectus sit amet est. Pharetra sit amet aliquam id. Porttitor massa id neque aliquam vestibulum morbi blandit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Quam elementum pulvinar etiam non quam. Congue quisque egestas diam in arcu cursus euismod quis. Dictum fusce ut placerat orci nulla pellentesque. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Dui ut ornare lectus sit amet est.")]),e._v(" "),i("p",[e._v("Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Mauris a diam maecenas sed enim. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras sed felis eget velit aliquet. Purus viverra accumsan in nisl nisi. Sed risus ultricies tristique nulla aliquet enim tortor at. Integer quis auctor elit sed vulputate mi sit amet mauris. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Risus feugiat in ante metus dictum at. Posuere urna nec tincidunt praesent semper. Auctor elit sed vulputate mi sit amet mauris commodo. Senectus et netus et malesuada fames ac turpis egestas integer. Varius morbi enim nunc faucibus a pellentesque. Sed felis eget velit aliquet sagittis id. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat.")]),e._v(" "),i("p",[e._v("Tortor condimentum lacinia quis vel eros donec ac. Phasellus vestibulum lorem sed risus ultricies tristique. Vitae tortor condimentum lacinia quis vel eros donec. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ut pharetra sit amet aliquam id diam. Eu non diam phasellus vestibulum lorem. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Sagittis orci a scelerisque purus semper eget duis. In iaculis nunc sed augue lacus viverra. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet tellus cras adipiscing enim eu turpis. Amet porttitor eget dolor morbi non arcu risus quis varius. Potenti nullam ac tortor vitae purus.")]),e._v(" "),i("chart-editor",{attrs:{code:"// <block:data:1>\nconst DATA_COUNT = 70;\nconst NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};\n\nconst labels = Utils.months({count: DATA_COUNT});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.randomColor(0.4),\n      backgroundColor: Utils.randomColor(0.1),\n      stack: 'combined',\n      type: 'bar'\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.randomColor(0.4),\n      backgroundColor: Utils.randomColor(0.1),\n      pointBorderColor: Utils.randomColor(0.7),\n      pointBackgroundColor: Utils.randomColor(0.5),\n      stack: 'combined'\n    }\n  ]\n};\n// </block:data>\n\n// <block:zoom:0>\nconst zoomOptions = {\n  limits: {\n    y: {min: 0, max: 200, minRange: 50}\n  },\n  pan: {\n    enabled: true,\n    mode: 'xy',\n  },\n  zoom: {\n    wheel: {\n      enabled: false,\n    },\n    pinch: {\n      enabled: false\n    },\n    mode: 'xy',\n  }\n};\n// </block:zoom>\n\n// <block:border:3>\nconst borderPlugin = {\n  id: 'chartAreaBorder',\n  beforeDraw(chart, args, options) {\n    const {ctx, chartArea: {left, top, width, height}} = chart;\n    if (chart.options.plugins.zoom.zoom.enabled) {\n      ctx.save();\n      ctx.strokeStyle = 'red';\n      ctx.lineWidth = 1;\n      ctx.strokeRect(left, top, width, height);\n      ctx.restore();\n    }\n  }\n};\n// </block:border>\n\nconst zoomStatus = () => 'Zoom: ' + (zoomOptions.zoom.enabled ? 'enabled' : 'disabled');\n\n// <block:config:1>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    scales: {y: {stacked: true, min: 0}},\n    plugins: {\n      zoom: zoomOptions,\n      title: {\n        display: true,\n        position: 'bottom',\n        text: zoomStatus\n      }\n    },\n    onClick(e) {\n      const chart = e.chart;\n      chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;\n      chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;\n      chart.update();\n    }\n  },\n  plugins: [borderPlugin]\n};\n// </block:config>\n\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers(NUMBER_CFG);\n      });\n      chart.update();\n    }\n  }, {\n    name: 'Toggle zoom',\n    handler(chart) {\n      zoomOptions.zoom.wheel.enabled = !zoomOptions.zoom.wheel.enabled;\n      chart.update();\n    }\n  }, {\n    name: 'Toggle pan',\n    handler(chart) {\n      zoomOptions.pan.enabled = !zoomOptions.pan.enabled;\n      chart.update();\n    },\n  }, {\n    name: 'Reset zoom',\n    handler(chart) {\n      chart.resetZoom();\n    }\n  }\n];\n\nmodule.exports = {\n  actions,\n  config,\n};\n"}}),i("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla ut morbi tincidunt augue interdum velit euismod. Elit pellentesque habitant morbi tristique senectus et netus. Consectetur adipiscing elit pellentesque habitant morbi. Id faucibus nisl tincidunt eget nullam non nisi est sit. Blandit turpis cursus in hac habitasse. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Ornare massa eget egestas purus. A diam sollicitudin tempor id eu nisl nunc. Augue mauris augue neque gravida in fermentum et sollicitudin. Dolor purus non enim praesent elementum facilisis leo vel fringilla. Habitant morbi tristique senectus et netus et malesuada. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Gravida dictum fusce ut placerat orci nulla pellentesque.")]),e._v(" "),i("p",[e._v("Semper viverra nam libero justo laoreet sit. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Consequat semper viverra nam libero justo laoreet sit amet. Magna ac placerat vestibulum lectus mauris ultrices eros. Dolor purus non enim praesent elementum facilisis leo vel. Enim eu turpis egestas pretium aenean pharetra. Vitae purus faucibus ornare suspendisse sed nisi lacus. Senectus et netus et malesuada fames. Nec feugiat in fermentum posuere urna nec tincidunt praesent. Accumsan lacus vel facilisis volutpat. Lectus quam id leo in vitae turpis massa. Cras sed felis eget velit aliquet. Volutpat maecenas volutpat blandit aliquam.")]),e._v(" "),i("p",[e._v("Volutpat lacus laoreet non curabitur. Diam donec adipiscing tristique risus. Fusce id velit ut tortor pretium viverra suspendisse. Dui ut ornare lectus sit amet est. Pharetra sit amet aliquam id. Porttitor massa id neque aliquam vestibulum morbi blandit. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Quam elementum pulvinar etiam non quam. Congue quisque egestas diam in arcu cursus euismod quis. Dictum fusce ut placerat orci nulla pellentesque. Ut placerat orci nulla pellentesque dignissim enim sit amet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Dui ut ornare lectus sit amet est.")]),e._v(" "),i("p",[e._v("Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Mauris a diam maecenas sed enim. Tellus in hac habitasse platea dictumst vestibulum rhoncus. Cras sed felis eget velit aliquet. Purus viverra accumsan in nisl nisi. Sed risus ultricies tristique nulla aliquet enim tortor at. Integer quis auctor elit sed vulputate mi sit amet mauris. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Risus feugiat in ante metus dictum at. Posuere urna nec tincidunt praesent semper. Auctor elit sed vulputate mi sit amet mauris commodo. Senectus et netus et malesuada fames ac turpis egestas integer. Varius morbi enim nunc faucibus a pellentesque. Sed felis eget velit aliquet sagittis id. Ac auctor augue mauris augue neque gravida. Etiam erat velit scelerisque in dictum non consectetur a erat.")]),e._v(" "),i("p",[e._v("Tortor condimentum lacinia quis vel eros donec ac. Phasellus vestibulum lorem sed risus ultricies tristique. Vitae tortor condimentum lacinia quis vel eros donec. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. Ut pharetra sit amet aliquam id diam. Eu non diam phasellus vestibulum lorem. Pharetra pharetra massa massa ultricies mi. Donec ultrices tincidunt arcu non. Sagittis orci a scelerisque purus semper eget duis. In iaculis nunc sed augue lacus viverra. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Massa placerat duis ultricies lacus sed turpis tincidunt id. Sit amet tellus cras adipiscing enim eu turpis. Amet porttitor eget dolor morbi non arcu risus quis varius. Potenti nullam ac tortor vitae purus.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);