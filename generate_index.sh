#!/bin/bash

printf '' > ./index.js

for d in `ls`; do
    if [ ! -d "${d}" ]; then
        continue
    fi
    printf "exports.${d} = require('./${d}');\n" >> ./index.js
done
