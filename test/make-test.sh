#!/bin/bash

cp original-yarn.lock yarn.lock
node ../index.js volto
diff --color yarn.lock expected-yarn.lock
