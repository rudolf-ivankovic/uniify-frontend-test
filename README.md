This monorepo is created using [NX](https://nx.dev/getting-started/intro), main techs are React, Styled-component, Sass/Scss.
<br/>

This monorepo contains two apps, naming `main-app` and `sub-app`, with `libs` built for both apps;
<br/>
`Main-app` will be the main frame with logo, header, etc... Meanwhile, `sub-app` will be embedded inside `main-app` through iframe.

<br/>

### **For Development:**

Only run `npm run start` is enough. NX will serve `main-app` in `localhost:4001` and `sub-aoo` in `localhost:4002`.

### **For Deployment:**

Build this monorepo with `npm run build`, you will get `dist` folder with two separated apps.
Try to deploy both apps in different endpoints to use. Also, to use `sub-app` inside `main-app` in production,
you will need to update `contentIframe` link in `apps/main-app/src/environments/environment.prod.ts`,
which would be the deployed link of sub-app.

<br />
