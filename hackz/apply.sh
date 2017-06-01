#!/usr/bin/env bash

echo "applying hackz... hard hats required"

patch -p0 -i ./hackz/uglifyjs.patch
patch -p0 -i ./hackz/localforage.patch