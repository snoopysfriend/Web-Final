all:
	git fetch
	$(eval HASH := $(git rev-parse `git branch -r --sort=committerdate | tail -1`))
	git reset $(HASH) --hard