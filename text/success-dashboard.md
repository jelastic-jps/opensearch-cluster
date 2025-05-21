Use the following credentials to access the OpenSearch cluster admin panel:

**Admin panel URL:** [${globals.protocol}://node${nodes.nosqldb.master.id}-${env.domain}:${globals.osport}](${globals.protocol}://node${nodes.nosqldb.master.id}-${env.domain}:${globals.osport})  
**Admin name:** admin  
**Admin password:** ${globals.oSearchPswd}  

**Admin panel URL:** [${globals.protocol}://node${nodes.odash.master.id}-${env.domain}](${globals.protocol}://node${nodes.odash.master.id}-${env.domain})  
**Admin name:** admin  
**Admin password:** ${globals.oSearchPswd}  

To add a custom domain name for your OpenSearch installation, follow the steps described in our [documentation](https://www.virtuozzo.com/application-platform-docs/custom-domains/).
