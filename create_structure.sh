#!/bin/bash
# This script creates the folder structure for the my-franchise-site project

# Create the root project folder
mkdir -p my-franchise-site

# Create subdirectories
mkdir -p my-franchise-site/components
mkdir -p my-franchise-site/pages/api
mkdir -p my-franchise-site/public/images
mkdir -p my-franchise-site/styles

# Create files in the components directory
touch my-franchise-site/components/InstagramFeed.js
touch my-franchise-site/components/SignupForm.js
touch my-franchise-site/components/Testimonials.js

# Create files in the pages directory
touch my-franchise-site/pages/_app.js
touch my-franchise-site/pages/_document.js
touch my-franchise-site/pages/index.js
touch my-franchise-site/pages/api/signup.js

# Create files in the public/images directory (place your images here later)
touch my-franchise-site/public/images/hero.jpg
touch my-franchise-site/public/images/placeholder.jpg

# Create root-level configuration files
touch my-franchise-site/next.config.js
touch my-franchise-site/package.json
touch my-franchise-site/postcss.config.js
touch my-franchise-site/tailwind.config.js

echo "Folder structure created successfully in the 'my-franchise-site' folder."
