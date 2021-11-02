# Where to Watch Tasks

<!-- Compile TS code -->
## build
~~~sh
echo "Compiling ts files..."
tsc src/models/index.ts
tsc src/repositories/index.ts
tsc src/app.ts
echo "js files built successfully from ts files"
~~~

<!-- Run project -->
## run
~~~sh
if [ ! -f "src/app.js" ]; then
    mask build
fi
echo "Running the project, starting at src/app.js"
node src/app.js
~~~

<!-- Remove compiled js files -->
## clean
~~~sh
echo "Removing generated js files"
rm src/models/*js
rm src/repositories/*js
rm src/*js
echo "js files removed successfully"
~~~

<!-- Install project dependencies -->
## install
~~~sh
echo "Installing dependencies with npm..."
npm install
~~~

<!-- Audit project dependencies -->
## audit
~~~sh
echo "Auditing dependencies with npm..."
npm audit
~~~

<!-- Run project unit tests -->
## test
~~~sh
echo "Running tests with jest"
npx jest
~~~
