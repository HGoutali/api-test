# test_api
-- Intégrer l'application dans GitHub
créer le fichier .gitignore
echo "# test_api" >> README.md
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/HGoutali/api-test.git
git push -u origin master

# la configuration
Host
    ec2-54-228-125-183.eu-west-1.compute.amazonaws.com
Database
    d3e5upumbpjia0
User
    xvxttkrnodwxyd
Port
    5432
Password
    84c6ff46da6febf2f9cd62b7224d7759e3de4cf39c9c93ab1a478bff4560181b
URI
    postgres://xvxttkrnodwxyd:84c6ff46da6febf2f9cd62b7224d7759e3de4cf39c9c93ab1a478bff4560181b@ec2-54-228-125-183.eu-west-1.compute.amazonaws.com:5432/d3e5upumbpjia0
Heroku CLI
    heroku pg:psql postgresql-deep-19667 --app api-test-hhn
# SSL
heroku config:set PGSSLMODE=no-verify


-- initialisation de la BD
npm run migrate
