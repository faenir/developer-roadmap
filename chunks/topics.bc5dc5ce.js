class o{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(t){const e=t.target.value.trim().toLowerCase();e?(document.querySelectorAll("[data-topic]").forEach((t=>t.classList.add("hidden"))),document.querySelectorAll(`[data-topic*="${e}"]`).forEach((t=>t.classList.remove("hidden")))):document.querySelectorAll("[data-topic]").forEach((t=>t.classList.remove("hidden")))}onDOMLoaded(){!this.topicSearchEl||this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const d=new o;d.init();