var MAX_CLOUDLET = "environment.maxcloudletsperrec", 
    SAME_NODES = "environment.maxsamenodescount",
    MAX_NODES = "environment.maxnodescount",
    max = 10, 
    cloudlets = 8, 
    min = 0, 
    resp, 
    name, 
    value, 
    markup = "";

var q = jelastic.billing.account.GetQuotas(MAX_NODES + ";" + SAME_NODES + ";" + MAX_CLOUDLET).array || [];

for (var i = 0, n = q.length; i < n; i++) {
  name = q[i].quota.name;
  value = q[i].value;
  
  if (name == MAX_CLOUDLET && value < cloudlets) {
    markup = "Quota limits: " + name + " = " + value + ".  Please upgrade your account.";
    continue;
  }
  if (max >= value) {
    if (name == MAX_NODES) max = value ? value - 1 : 1;
      else if (name == SAME_NODES) max = value;
  }
}

resp = {result: 0, "settings":{"fields":[{"type":"spinner","name":"osCount","caption":"OpenSearch Nodes","min":1,"max":max, "default": Math.min(min, max)},{"type":"toggle","name":"is_opensearchdashboards","caption":"OpenSearch Dashboards","value":true},{"type":"toggle","name":"is_logstash","caption":"Logstash","value":false}]}};

if (markup) {
resp.settings.fields.push(
  {"type": "displayfield", "cls": "warning", "height": 30, "hideLabel": true, "markup": markup},
  {"type": "compositefield","height": 0,"hideLabel": true,"width": 0,"items": [{"height": 0,"type": "string","required": true}]});
}

return resp;
