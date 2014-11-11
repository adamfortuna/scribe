REPORTER = dot
FILES = test/**/*_test.js

test: 
	./node_modules/karma/bin/karma start test/karma.conf.js

.PHONY: test


