# Docusaurus template for Github Pages

This is a template to use Docusaurus together with Github Pages. Perfect for a documentaton website. Tools needed to run the project is Node.JS and GIT

### Pre installation preparation (Windows)

#### Install Node.JS
```
Download from website: https://nodejs.org/en/download/current
Command line: winget OpenJS.NodeJS
```

#### Install Github Desktop or GIT (whatever you prefer)
```
winget install github.desktop
```

### Installation

```
- create new repo in your Github environment .ex "my-website"
- Clone your repo to local disk .ex "C:\GIT\my-website"
- Downlod this repo as a zip
- Expand downloaded zip
- Move the files from folder "ghpages-template-main" to  "C:\GIT\my-website"
```

### Local Development

```
$ yarn start
``` 

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
