// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  accmobile: 8637649796,
  taximobile: 8637649796,
  dialogflow: {
    angularBot: 'e3a17f2629de4f15a300370e5e332266'
  },
  apiEndPoint: 'http://localhost:8080/ServicePoc/',
  dialogFlowService:'http://localhost:3000/policy/',
  chatApiEndPoint : 'http://localhost:3000/policy/'
};
